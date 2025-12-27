<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            $accessToken = Hash::make($request->email);
            $user->access_token = $accessToken;
            $user->save();

            return response()->json(['message' => 'Login successful', 'access_token' => $accessToken], 200);
        } else {
            return response()->json(['error' => 'Invalid credentials'], 401);
        }
    }
}