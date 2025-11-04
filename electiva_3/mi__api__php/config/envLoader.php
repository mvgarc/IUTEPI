<?php

function loadEnv($path)
{
    if (!file_exists($path)) {
        throw new Exception(".env no encontrado en: $path");
    }

    $lines = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);

    foreach ($lines as $line) {
        if (strpos(trim($line), '#') === 0) continue; // ignora comentarios

        list($key, $value) = explode('=', $line, 2);
        $_ENV[trim($key)] = trim($value);
        putenv("$key=$value");
    }
}
