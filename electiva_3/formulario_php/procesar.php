<?php
include "db.php";

$message = "";
$messageClass = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre   = $_POST["nombre"];
    $email    = $_POST["email"];
    $password = password_hash($_POST["password"], PASSWORD_DEFAULT);

    $sql = "INSERT INTO usuarios (nombre, email, password) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sss", $nombre, $email, $password);

    if ($stmt->execute()) {
        $message = "✅ Usuario registrado correctamente.";
        $messageClass = "success";
    } else {
        $message = "❌ Error: " . $stmt->error;
        $messageClass = "error";
    }
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Resultado del Registro</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <form>
        <h2>Resultado</h2>
        <div class="message <?php echo $messageClass; ?>">
            <?php echo $message; ?>
        </div>
        <a href="index.php">
            <button type="button">Volver al Formulario</button>
        </a>
    </form>
</body>
</html>
