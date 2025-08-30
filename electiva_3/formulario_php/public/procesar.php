<?php
require_once "../src/config/db.php";
require_once "../src/controllers/UserController.php";

$controller = new UserController($conn);

$message = "";
$class = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $success = $controller->register($_POST["nombre"], $_POST["email"], $_POST["password"]);

    $message = $success ? "Usuario registrado correctamente." : "Error al registrar.";
    $class   = $success ? "success" : "error";
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Resultado del Registro</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <form>
        <h2>Resultado</h2>
        <div class="message <?php echo $class; ?>">
            <?php echo $message; ?>
        </div>
        <a href="index.php">
            <button type="button">Volver al Formulario</button>
        </a>
    </form>
</body>
</html>
