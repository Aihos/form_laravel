<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/* ### Mesage ### */
/* # Ce modèle représente la table form dans la base de données.*/
/* # Il définit les colonnes de la table qui peuvent être remplies en masse. */
class Message extends Model
{
    use HasFactory;
    protected $table = 'form';

    protected $fillable = [
        'civilite',
        'nom',
        'prenom',
        'email',
        'telephone',
        'motif',
        'message',
        'disponibilites',
        
    ];
    
}
