<?php

use App\Http\Controllers\FormController;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Client\Request;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () { // ajout de la route middleware auth et verified qui permet de vérifier si l'utilisateur est authentifié et si son adresse email est vérifiée pour accéder au dashboard, plugin de base de breeze
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});
Route::post('/create-message', [FormController::class, 'createMessage']); // ajout de la route create-message qui depuis le FormController envoie les données du formulaire a la BDD
Route::get('/messages', [FormController::class, 'getMessages']); // ajout de la route messages qui depuis le FormController qui récupère les données des donées de la BDD au Dashboard

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
