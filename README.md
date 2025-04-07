# Laravel Breeze + Vite.js + Docker

Ce projet utilise **Laravel** pour la gestion du Backend , **Vite.js** pour la compilation front-end, et **Docker** pour le déploiement local avec MySQL et PhpMyAdmin.

---

## ⚙️ Pré-requis

- Docker et Docker Compose
- Node.js ≥ 16
- Composer

---
## Démarrer

0. Cloner le repo github
> git clone https://github.com/Aihos/form_laravel

1. Récupérer le .env
- cd .\form_laravel\laravel-breeze-react\
> cp .env.example .env

2. Installer les dépendances
> cd form_laravel/laravel-breeze-react
- npm install
- composer install

3. Lancer la stack LAMP
>  form_laravel/laravel-breeze-react
- docker compose up -d

4. Faire les migrations
> cd  form_laravel/laravel-breeze-react
-  php artisan migrate
- taper Yes



5. Lancer la stack Laravel (dans un nouveau terminal)
> cd laravel-breeze-react
- php artisan serve

6. Lancer la stack ViteJs (dans un nouveau terminal)
> cd laravel-breeze-react
- npm run dev


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
Bonjour, voici donc mon rendu pour votre exercice, j'ai voulu le faire via Laravel, Vitejs et Tailwind (via le kit breeze de Laravel), j'ai simplement fait en sorte que le formulaire envoie les données à la BDD et qu'ensuite, on puisse voir les voir dans le dashboard. 

Le Dashboard est accessible par le button inscription ou connexion, mais je vous conseille de vous créer un compte. Ensuite, vous pouvez voir les messages envoyés depuis le form.

En termes de sécurité, j'ai implémenté simplement dans le formulaire HTML des RegEx pour que l'utilisateur se plie aux normes. De plus, si l'utilisateur arrive à écrire du html ou faire des injections SQL, j'ai mis en place dans le FormController des fonction strip_tags() de Laravel pour éviter de supprimer les injections avant qu'elles ne soient envoyés à la BDD.

Au niveau du responsive, le formulaire passe correctement au format mobile ainsi que le Dashboard (même si les messages sont très compactent ;) ).


