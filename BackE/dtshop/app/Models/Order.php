<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'fullName',
        'address',
        'user_id',
        'phone',
        'email',
        'note',
        'paymentMethod',
        'status',
    ];

    protected $table = 'orders';

    public function details() 
    {
        return $this->hasMany(OrderDetail::class, 'order_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}