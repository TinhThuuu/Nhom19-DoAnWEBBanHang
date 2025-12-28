<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        // Hard-coded admin credential check
        if (isset($credentials['email']) && isset($credentials['password']) &&
            $credentials['email'] === 'admin@gmail.com' && $credentials['password'] === '123') {
            $accessToken = Hash::make($request->email . now());
            return response()->json(['message' => 'Đăng nhập thành công', 'access_token' => $accessToken, 'is_admin' => true], 200);
        }

        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            $accessToken = Hash::make($request->email);
            $user->access_token = $accessToken;
            $user->remember_token = Str::random(60);
            $user->save();

            return response()->json(['message' => 'Đăng nhập thành công', 'access_token' => $accessToken, 'user' => $user], 200);
        } else {
            return response()->json(['error' => 'Thông tin đăng nhập không chính xác'], 401);
        }
    }

    public function register(Request $request)
    {
        $data = $request->only('name', 'email', 'password');

        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|min:3',
        ]);

        try {
            \DB::beginTransaction();

            $user = User::create([
                'name' => $data['name'],
                'email' => $data['email'],
                'password' => $data['password'], // model cast will hash
            ]);

            $accessToken = Hash::make($user->email . now());
            $user->access_token = $accessToken;
            $user->remember_token = Str::random(60);
            $user->save();

            \DB::commit();

            $user = User::find($user->id);

            return response()->json(['message' => 'Đăng ký thành công', 'user' => $user, 'access_token' => $accessToken], 201);
        } catch (\Throwable $e) {
            \DB::rollBack();
            \Log::error('Đăng ký thất bại: ' . $e->getMessage());
            return response()->json(['error' => 'Không thể đăng ký người dùng', 'message' => $e->getMessage()], 500);
        }
    }

    public function syncCart(Request $request)
    {
        $cart = $request->input('cart');

        // try to find user from session/auth
        if (\Auth::check()) {
            $user = \Auth::user();
        } else {
            $token = null;
            $authHeader = $request->header('Authorization');
            if ($authHeader && str_starts_with($authHeader, 'Bearer ')) {
                $token = substr($authHeader, 7);
            }
            if (!$token && $request->has('access_token')) {
                $token = $request->get('access_token');
            }
            $user = null;
            if ($token) {
                $user = User::where('access_token', $token)->first();
            }
        }

        if (!$user) {
            return response()->json(['error' => 'Không tìm thấy người dùng'], 404);
        }

        // Ensure `cart` column exists (safe for dev). If missing, add it.
        if (!Schema::hasColumn('users', 'cart')) {
            try {
                Schema::table('users', function (Blueprint $table) {
                    $table->json('cart')->nullable()->after('remember_token');
                });
            } catch (\Throwable $e) {
                \Log::warning('Unable to add cart column dynamically: ' . $e->getMessage());
                return response()->json(['error' => 'Server not ready to persist cart'], 500);
            }
        }

        try {
            $user->cart = $cart;
            $user->save();
            return response()->json(['message' => 'Đã lưu giỏ hàng', 'cart' => $user->cart], 200);
        } catch (\Throwable $e) {
            \Log::error('Lưu giỏ hàng thất bại: ' . $e->getMessage());
            return response()->json(['error' => 'Không thể lưu giỏ hàng', 'message' => $e->getMessage()], 500);
        }
    }

    public function me(Request $request)
    {
        // prefer auth session
        if (Auth::check()) {
            return response()->json(['data' => Auth::user()], 200);
        }

        // try Bearer token or access_token param
        $token = null;
        $authHeader = $request->header('Authorization');
        if ($authHeader && str_starts_with($authHeader, 'Bearer ')) {
            $token = substr($authHeader, 7);
        }
        if (!$token && $request->has('access_token')) {
            $token = $request->get('access_token');
        }

        if ($token) {
            $user = User::where('access_token', $token)->first();
            if ($user) return response()->json(['data' => $user], 200);
        }

        return response()->json(['error' => 'Chưa đăng nhập'], 401);
    }
}