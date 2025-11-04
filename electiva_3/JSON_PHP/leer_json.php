<?php
$json = file_get_contents('data.json');
$usuarios = json_decode($json, true);

foreach ($usuarios as $u) {
    echo "ID: {$u['id']} - Nombre: {$u['nombre']} - Edad: {$u['edad']}<br>";
}
?>
