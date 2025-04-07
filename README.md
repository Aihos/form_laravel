# Laravel Breeze + Vite.js + Docker

Ce projet utilise **Laravel** pour la gesstion du Backend , **Vite.js** pour la compilation front-end, et **Docker** pour le déploiement local avec MySQL et PhpMyAdmin.

---

## ⚙️ Pré-requis

- Docker et Docker Compose
- Node.js ≥ 16
- Composer

---
## Démarrer

1. Cloner le repo github
> git clone https://github.com/Aihos/form_laravel

2. Installer les dépendances
> cd form_laravel/laravel-breeze-react
> npm install
> composer install

3. Faire les migrations
> cd  form_laravel/laravel-breeze-react
> php artisan migration

4. Lancer la stack LAMP
>  form_laravel/laravel-breeze-react
> docker compose up -d

5. Lancer la stack Laravel (dans un nouveau terminal)
> cd laravel-breeze-react
> php artisan serve

6. Lancer la stack ViteJs (dans un nouveau terminal)
> cd laravel-breeze-react
> php artisan serve


Laravel est ouvert sur le port :8000 (http://localhost:8000).\
Phpmyadmin est ouvert sur le port :8080 (http://localhost:8080)\
Phpmyadmin est ouvert sur le port :5173 (http://localhost:5173)\
Mysql est ouvert sur :3307\
\
Utilisateur et mdp mysql: `root` et `verysecurepassword`



## Explication du projet


### 🗂️ Structure du projet

- `app/` : Contient la logique Laravel.
- `resources/` : Fichiers front-end (Vue, Blade, etc).
- `routes/` : Définition des routes (web.php, api.php, etc).
- `config/` : Configuration du projet.
- `database/` : Migrations, seeders, factories.
- `public/` : Point d'entrée web (fichiers accessibles publiquement).
- `storage/` : Logs, cache, etc.
- `docker-compose.yml` : Configuration des services Docker.
- `vite.config.ts` : Configuration Vite.js.
- `components/` : Composants Vue.js.
- `.env` : Variables d’environnement (non versionnées).
- `README.md` : Ce fichier.

---
![alt text]()

Bonjour, voici donc mon rendu pour votre exercice, j'ai voulu le faire via Laravel, Vitejs et Tailwind (via le kit breeze de Laravel), j'ai simplement fais en sorte que le formulaire envoie les données a la BDD et qu'ensuite on puisse voir les voir dans le dashboard. 

En terme de sécurité, j'ai implémenter simplement dans le formulaire HTML des RegEx pour que l'utilisateur se plie au normes. De plus si l'utilisatur arrive a écrire du html ou faire des injections SQL j'ai mis en place dans le FormController des fonction strip_tags() de Laravel pour éviter supprimer les injections avant qu'elles soient envoyés à la BDD.

Au niveau du responsive, le formulaire passe correctement au format mobile ainsi que le Dashboard (même si les messages sont très compactent ;) ).


