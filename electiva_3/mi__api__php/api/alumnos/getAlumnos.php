<?php

header("Content-Type: application/json");
require_once __DIR__ . '/../../config/database.php';
require_once __DIR__ . '/../../utils/Response.php';

try {
    $stmt = $conexion->query("SELECT * FROM alumnos");
    $alumnos = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo Response::success("Lista de alumnos obtenida correctamente", $alumnos);
} catch (PDOException $e) {
    echo Response::error("Error al obtener alumnos: " . $e->getMessage());
}
