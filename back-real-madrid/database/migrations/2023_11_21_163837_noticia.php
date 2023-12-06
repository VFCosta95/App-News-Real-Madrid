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
        //
        Schema::create('noticias', function (Blueprint $table) {

            $table->id();
            $table->string('titulo', 450);
            $table->string('subTitulo', 800);
            $table->string('p_Um', 1500);
            $table->string('p_Dois', 1500);
            $table->string('p_Tres', 1500);
            $table->string('p_Quatro', 1500);
            $table->string('p_Cinco', 1500)->nullable();
            $table->string('p_Seis', 1500)->nullable();
            $table->string('p_Sete', 1500)->nullable();
            $table->string('fonte', 300);
            $table->date('dataHora');
            $table->string('foto', 1500);
            
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
