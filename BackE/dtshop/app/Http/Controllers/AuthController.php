<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        // Hard-coded admin credential check
        if (isset($credentials['email']) && isset($credentials['password']) &&
            $credentials['email'] === 'admin@gmail.com' && $credentials['password'] === '123') {
            $accessToken = Hash::make($request->email . now());
            return response()->json(['message' => 'Login successful', 'access_token' => $accessToken, 'is_admin' => true], 200);
        }

        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            $accessToken = Hash::make($request->email);
            $user->access_token = $accessToken;
            $user->save();

            return response()->json(['message' => 'Login successful', 'access_token' => $accessToken, 'user' => $user], 200);
        } else {
            return response()->json(['error' => 'Invalid credentials'], 401);
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
            $user = new User();
            $user->name = $data['name'];
            $user->email = $data['email'];
            $user->password = Hash::make($data['password']);
            $user->save();

            $accessToken = Hash::make($user->email . now());
            $user->access_token = $accessToken;
            $user->save();

            return response()->json(['message' => 'Register successful', 'user' => $user, 'access_token' => $accessToken], 201);
        } catch (\Throwable $e) {
            return response()->json(['error' => 'Unable to register user', 'message' => $e->getMessage()], 500);
        }
    }
}