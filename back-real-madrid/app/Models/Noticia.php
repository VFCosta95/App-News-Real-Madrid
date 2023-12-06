<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Noticia extends Model
{
    use HasFactory;

    protected $table = 'reservas';

    protected $fillable = [
        'titulo',
        'subTitulo',
        'p_Um',
        'p_Dois',
        'p_Tres',
        'p_Quatro',
        'p_Cinco',
        'p_Seis',
        'p_Sete',
        'fonte',
        'dataHora',
        'foto'
    ];

}
