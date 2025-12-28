<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

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
           'paymentMethod' => 'nullable|string',
           'products' => 'required|array|min:1',
           'products.*.productId' => 'required|integer|exists:products,id',
           'products.*.quantity' => 'required|integer|min:1',
       ]);

       $order = null;

       // determine user id from session/auth or access token
       $userId = null;
       if (Auth::check()) {
           $userId = Auth::id();
       } else {
           $token = null;
           $authHeader = $request->header('Authorization');
           if ($authHeader && str_starts_with($authHeader, 'Bearer ')) {
               $token = substr($authHeader, 7);
           }
           if (!$token && $request->has('access_token')) {
               $token = $request->input('access_token');
           }
           if ($token) {
               $u = User::where('access_token', $token)->first();
               if ($u) $userId = $u->id;
           }
       }

       DB::beginTransaction();
       try {
           $order = Order::create([
               'fullName' => $data['fullName'],
               'address' => $data['address'],
               'user_id' => $userId,
               'phone' => $data['phone'],
               'email' => $data['email'],
               'note' => $data['note'] ?? '',
               'paymentMethod' => $data['paymentMethod'] ?? null,
               'status' => 'ORDERED',
           ]);

           foreach ($data['products'] as $p) {
               $order->details()->create([
                   'product_id' => $p['productId'],
                   'quantity' => $p['quantity'],
               ]);
           }

           $order->load('details.product');

           DB::commit();

           return response()->json(['data' => $order], 201);
       } catch (\Throwable $e) {
           DB::rollBack();
           return response()->json(['error' => 'Không thể tạo đơn hàng', 'message' => $e->getMessage()], 500);
       }
    }

    public function index()
    {
        $query = Order::with('details.product')->orderBy('created_at', 'desc');

        $filterApplied = false;
        if (Auth::check()) {
            $query->where('user_id', Auth::id());
            $filterApplied = true;
        } else {
            $token = null;
            $authHeader = request()->header('Authorization');
            if ($authHeader && str_starts_with($authHeader, 'Bearer ')) {
                $token = substr($authHeader, 7);
            }
            if (!$token && request()->has('access_token')) {
                $token = request()->get('access_token');
            }
            if ($token) {
                $u = User::where('access_token', $token)->first();
                if ($u) {
                    $query->where('user_id', $u->id);
                    $filterApplied = true;
                }
            }
        }

        if (!$filterApplied) {
            // optional filter by email when no user filter
            if (request()->has('email')) {
                $email = request()->get('email');
                $query->where('email', $email);
            }
        }

        $orders = $query->get();

        $result = $orders->map(function ($order) {
            $total = 0;
            foreach ($order->details as $d) {
                $price = $d->product? $d->product->price : 0;
                $total += ($price * $d->quantity);
            }

            return [
                'id' => $order->id,
                'total' => $total,
                'customerName' => $order->fullName,
                'email' => $order->email,
                'phone' => $order->phone,
                'address' => $order->address,
                'note' => $order->note,
                'date' => $order->created_at->toDateTimeString(),
                'status' => $order->status,
                'items' => $order->details->map(function($d){
                    return [
                        'productId' => $d->product_id,
                        'productName' => $d->product? $d->product->name : null,
                        'quantity' => $d->quantity,
                        'price' => $d->product? $d->product->price : 0,
                    ];
                }),
            ];
        });

        return response()->json(['data' => $result], 200);
    }

    /**
     * Update order status
     */
    public function updateStatus(Request $request, $id)
    {
        $request->validate([
            'status' => 'required|string',
        ]);

        $allowed = ['ORDERED','PREPARING','DILIVERED','CANCELLED'];
        $status = strtoupper($request->input('status'));
        if (!in_array($status, $allowed)) {
            return response()->json(['error' => 'Trạng thái không hợp lệ'], 400);
        }

        $order = Order::find($id);
        if (!$order) {
            return response()->json(['error' => 'Không tìm thấy đơn hàng'], 404);
        }

        $order->status = $status;
        $order->save();

        return response()->json(['data' => [
            'id' => $order->id,
            'status' => $order->status
        ]], 200);
    }
}