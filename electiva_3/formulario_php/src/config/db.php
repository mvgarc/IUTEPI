<?php
require_once "config.php";

// Cargar variables de entorno
loadEnv(__DIR__ . "/.env");

$host = $_ENV["DB_HOST"];
$user = $_ENV["DB_USER"];
$pass = $_ENV["DB_PASS"];
$db   = $_ENV["DB_NAME"];

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die("Error en la conexión: " . $conn->connect_error);
}
?>
