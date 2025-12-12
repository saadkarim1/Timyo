<?php

namespace App\Http\Controllers;

use App\Http\Resources\AppointmentResource;
use App\Models\Appointment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AppointmentController extends Controller
{
    public function index()
    {
        $appointments = Appointment::all();
        return response()->json(AppointmentResource::collection($appointments), 200);
    }

    public function getUserAppointments()
    {
        $appointments = Auth::user()->appointments;

        return response()->json(AppointmentResource::collection($appointments), 200);
    }
}
