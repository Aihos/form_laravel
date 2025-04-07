<?php 
return [

    'paths' => ['api/*', 'create-message'], // 'api/*' pour les routes API, 'create-message' pour la route de création de message

    'allowed_methods' => ['*'],

    'allowed_origins' => ['http://localhost:5173'],

    'allowed_origins_patterns' => [],

    'allowed_headers' => ['*'],

    'exposed_headers' => [],

    'max_age' => 0,

    'supports_credentials' => false,

];
