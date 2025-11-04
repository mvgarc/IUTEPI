<?php

require_once __DIR__ . '/envLoader.php';

try {
    // Cargar variables del archivo .env
    loadEnv(__DIR__ . '/../.env');

    $host = $_ENV['DB_HOST'];
    $db   = $_ENV['DB_NAME'];
    $user = $_ENV['DB_USER'];
    $pass = $_ENV['DB_PASS'];

    // Crear conexión PDO
    $conexion = new PDO("mysql:host=$host;dbname=$db;charset=utf8", $user, $pass);
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die(json_encode(["error" => "Error de conexión: " . $e->getMessage()]));
} catch (Exception $e) {
    die(json_encode(["error" => $e->getMessage()]));
}
