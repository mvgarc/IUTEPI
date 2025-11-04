<?php

header("Content-Type: application/json");
require_once __DIR__ . '/../../config/database.php';
require_once __DIR__ . '/../../utils/Response.php';

$data = json_decode(file_get_contents("php://input"), true);

if (!isset($data["nombre"]) || !isset($data["apellido"]) || !isset($data["edad"])) {
    echo Response::error("Faltan datos obligatorios (nombre, apellido, edad)");
    exit;
}

try {
    $sql = "INSERT INTO alumnos (nombre, apellido, edad) VALUES (:nombre, :apellido, :edad)";
    $stmt = $conexion->prepare($sql);
    $stmt->bindParam(":nombre", $data["nombre"]);
    $stmt->bindParam(":apellido", $data["apellido"]);
    $stmt->bindParam(":edad", $data["edad"]);
    $stmt->execute();

    echo Response::success("Alumno registrado correctamente", ["id" => $conexion->lastInsertId()]);
} catch (PDOException $e) {
    echo Response::error("Error al registrar alumno: " . $e->getMessage());
}
