<?php
$json = file_get_contents('data.json');
$usuarios = json_decode($json, true);

$nuevo = [
    "id" => count($usuarios) + 1,
    "nombre" => "Lucía",
    "edad" => 21
];

$usuarios[] = $nuevo;
file_put_contents('data.json', json_encode($usuarios, JSON_PRETTY_PRINT));

echo "Usuario agregado correctamente.";
?>
