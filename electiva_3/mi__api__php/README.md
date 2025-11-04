# 🚀 Proyecto PHP + PDO (Etapa 2)

Este proyecto forma parte de la **Etapa 2** del curso de *Lenguaje de Programación*, donde aprendemos a conectar **PHP con MySQL** usando **PDO** y variables de entorno (`.env`) para proteger las credenciales.

---

## 📁 Estructura del Proyecto

```
mi_api_php/
│
├── .env                ← ⚠️ No se sube a GitHub
├── .gitignore
│
├── config/
│   ├── database.php
│   └── envLoader.php
│
├── api/
│   └── alumnos/
│       ├── getAlumnos.php
│       └── createAlumno.php
│
├── public/
│   └── index.php
│
└── utils/
    └── Response.php
```

---

## ⚙️ Requisitos

- PHP 8 o superior  
- Servidor local (XAMPP, Laragon o WAMP)  
- MySQL  
- Navegador web  

---

## 🔐 Archivo `.env`

Crea un archivo `.env` en la raíz del proyecto con tus credenciales de conexión:

```
DB_HOST=localhost
DB_NAME=escuela
DB_USER=root
DB_PASS=
```

> ⚠️ Importante: este archivo **no se debe subir** a GitHub.

---

## 🧩 Conexión a la Base de Datos (`config/database.php`)

```php
<?php
require_once __DIR__ . '/envLoader.php';
loadEnv(__DIR__ . '/../.env');

$host = $_ENV['DB_HOST'];
$db   = $_ENV['DB_NAME'];
$user = $_ENV['DB_USER'];
$pass = $_ENV['DB_PASS'];

try {
    $conexion = new PDO("mysql:host=$host;dbname=$db;charset=utf8", $user, $pass);
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Error de conexión: " . $e->getMessage());
}
```
---

## 📡 Ejemplo de Endpoint (`api/alumnos/getAlumnos.php`)

```php
<?php
header("Content-Type: application/json");
require_once __DIR__ . '/../../config/database.php';

$stmt = $conexion->query("SELECT * FROM alumnos");
$alumnos = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($alumnos);
```
---

## ▶️ Cómo Ejecutar

1. Clona el repositorio o copia los archivos en tu servidor local.  
2. Crea la base de datos `escuela` y la tabla `alumnos`.  
3. Configura el archivo `.env`.  
4. Ejecuta el endpoint en tu navegador:

```
http://localhost/mi_api_php/api/alumnos/getAlumnos.php
```

---

## 💡 Conceptos Clave

| Concepto | Explicación |
|-----------|-------------|
| **PDO** | Interfaz de PHP para acceder a bases de datos de forma segura y flexible. |
| **.env** | Archivo que guarda variables de entorno para proteger datos sensibles. |
| **json_encode()** | Convierte datos PHP a formato JSON para enviar al frontend. |
| **header()** | Define el tipo de respuesta HTTP (por ejemplo, JSON). |

---

## 🧠 Reto para tus estudiantes

Crea un nuevo endpoint en `api/alumnos/createAlumno.php` que:
1. Reciba los datos del alumno por `POST` (nombre, apellido, edad).  
2. Los inserte en la base de datos usando `PDO::prepare()`.  
3. Devuelva una respuesta JSON confirmando el registro.

---

## 🧰 Buenas Prácticas

- Usa `.gitignore` para excluir `.env` del repositorio.  
- Usa `try/catch` para manejar errores de conexión.  
- Evita usar `mysqli` en proyectos nuevos; usa siempre `PDO`.  
- Mantén una estructura modular para escalar fácilmente.

---

## 🧑‍💻 Autor

Proyecto desarrollado con fines educativos por **María Valentina García**  
📚 *Electiva 3 (IUTEPI) – Etapa 2: PHP con Base de Datos*
