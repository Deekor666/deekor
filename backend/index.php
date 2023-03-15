<?php
require_once __DIR__ . '/vendor/autoload.php';
require_once __DIR__ . '/src/App.php';
define('PROJECT_DIR', dirname(__DIR__));

$container = new DI\Container();
try {
    $app = $container->get('App\App');
    $app->start();
} catch (Exception $e) {
    var_dump($e->getMessage());
    exit;
}