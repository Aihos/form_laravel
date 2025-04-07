<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Message;

/* ### FormController ### */
/* # Ce controller gère les messages du formulaire de contact. Il permet de créer un message et de récupérer tous les messages. */
/* # Il utilise le modèle Message pour interagir avec la base de données. */

class FormController extends Controller
{
    /* ### createMessage ### */
    /* # Cette méthode crée un message à partir des données envoyées par le formulaire. Elle valide les données, les nettoie et les enregistre dans la base de données. */
    /* # Si une erreur se produit, elle renvoie un message d'erreur. */
    /* # Elle utilise la méthode validate() pour valider les données et la méthode create() du modèle Message pour enregistrer le message. */
    /* # Elle renvoie une réponse JSON avec un message de succès ou d'erreur. */

    public function createMessage(Request $request)
    {
        try {
            $incomingFields = $request->validate([
                'civilite' => 'nullable',
                'nom' => 'required',
                'prenom' => 'required',
                'email' => 'nullable',
                'telephone' => 'nullable',
                'motif' => 'nullable',
                'message' => 'nullable',
                'disponibilites' => 'nullable',
            ]);
    
            $incomingFields['nom'] = strip_tags($incomingFields['nom']);
            $incomingFields['prenom'] = strip_tags($incomingFields['prenom']);
            $incomingFields['email'] = strip_tags($incomingFields['email']);
            $incomingFields['telephone'] = strip_tags($incomingFields['telephone']);
            $incomingFields['motif'] = strip_tags($incomingFields['motif']);
            $incomingFields['message'] = strip_tags($incomingFields['message']);
            $incomingFields['civilite'] = strip_tags($incomingFields['civilite']);
            $incomingFields['disponibilites'] = json_encode($incomingFields['disponibilites'] ?? []);
            Message::create($incomingFields);
            return response()->json(['message' => 'ça marche']);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
    /* ### getMessages ### */
    /* # Cette méthode récupère tous les messages de la base de données et les renvoie au format JSON. */
    /* # Elle utilise la méthode all() du modèle Message pour récupérer tous les messages. */
    public function getMessages()
{
    return response()->json(\App\Models\Message::all());
}

    
   
}
