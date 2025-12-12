<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('appointments', function (Blueprint $table) {
            $table->uuid("id")->primary();
            $table->foreignUuid("user_id")->constrained()->onDelete('cascade');
            $table->date("appointment_date");
            $table->time("appointment_time");
            $table->enum("status", ['waiting', 'Accepted', 'Declined'])->default('waiting');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('appointments');
    }
};
