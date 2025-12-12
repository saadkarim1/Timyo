<?php

use App\Http\Controllers\AppointmentController;
use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::controller(AppointmentController::class)->group(function () {
    Route::get('appointments', 'index');
});
