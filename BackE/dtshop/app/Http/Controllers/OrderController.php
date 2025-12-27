<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller
{
    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
       $data = $request->validate([
           'fullName' => 'required|string|max:255',
           'address' => 'required|string|max:255',
           'phone' => 'required|string|max:50',
           'email' => 'required|email|max:255',
           'note' => 'nullable|string',
           'products' => 'required|array|min:1',
           'products.*.productId' => 'required|integer|exists:products,id',
           'products.*.quantity' => 'required|integer|min:1',
       ]);

       $order = null;

       DB::beginTransaction();
       try {
           $order = Order::create([
               'fullName' => $data['fullName'],
               'address' => $data['address'],
               'phone' => $data['phone'],
               'email' => $data['email'],
               'note' => $data['note'] ?? null,
               'status' => 'ORDERED',
           ]);

           foreach ($data['products'] as $p) {
               $order->details()->create([
                   'product_id' => $p['productId'],
                   'quantity' => $p['quantity'],
               ]);
           }

           $order->load('details');

           DB::commit();

           return response()->json(['data' => $order], 201);
       } catch (\Throwable $e) {
           DB::rollBack();
           return response()->json(['error' => 'Unable to create order', 'message' => $e->getMessage()], 500);
       }
    }
}