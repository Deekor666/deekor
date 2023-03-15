<?php

namespace App;

use PDO;
use PDOException;

class Database
{
    public ?PDO $connect;

    public function __construct()
    {
        self::loadEnv();
        $host = getenv('DB_HOST');
        $port = getenv('DB_PORT');
        $dbname = getenv('DB_NAME');
        $user = getenv('DB_USER');
        $password = getenv('DB_PASSWORD');

        $dsn = "pgsql:host={$host};port={$port};dbname={$dbname};user={$user};password={$password}";

        try {
            $this->connect = new PDO($dsn);
            $this->connect->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $exception) {
            var_dump($exception->getMessage());
            exit;
        }
    }

    public static function loadEnv()
    {
        $dotenv = fopen(PROJECT_DIR . '/html/.env', 'r');
        while ($line = fgets($dotenv)) {
            putenv(trim($line));
        }
        fclose($dotenv);
    }
}