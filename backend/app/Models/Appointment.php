<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Appointment extends Model
{
    use HasUuids, HasFactory;

    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = ['status', 'appointment_date', 'appointment_time'];

    public function user() {
        return $this->belongsToMany(User::class);
    }
}
