# Formulario PHP + MySQL

Este es un proyecto base para explicar **frontend + backend + base de datos** en desarrollo web.  
Consiste en un formulario de registro de usuario construido con **HTML + CSS (frontend)**, **PHP (backend)** y **MySQL (base de datos)**.

---

## 🚀 Características
- Formulario en **HTML + CSS** para registrar usuarios.
- Procesamiento de datos en **PHP**.
- Conexión a base de datos usando **MySQL**.
- Uso de archivo **.env** para variables de entorno (seguridad).

---

## 📂 Estructura del proyecto

formulario_php/
│
├── config.php # Función para leer variables del .env
├── db.php # Conexión a la base de datos
├── index.php # Formulario de registro (frontend)
├── procesar.php # Lógica backend (insertar datos en BD)
├── style.css # Estilos CSS

## ⚙️ Configuración

1. **Clona este repositorio**:
   ```bash
   git clone https://github.com/tuusuario/tu-repo.git

2. Crea la base de datos en MySQL:

CREATE DATABASE prototipo_db;
USE prototipo_db;

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

3. Configura tu archivo .env en la raíz del proyecto:
DB_HOST=
DB_USER=
DB_PASS=
DB_NAME=

4. Ejecuta el proyecto en tu servidor local (XAMPP, Laragon, etc.)
Accede desde el navegador a:
http://localhost/formulario_php/index.php

✅ Resultado esperado

- Al registrar un usuario en el formulario, sus datos se guardarán en la tabla usuarios.

- El backend devuelve un mensaje de confirmación.

🔒 Notas de seguridad

- Nunca subas el archivo .env a tu repositorio (usa .gitignore).

- Usa password_hash (ya implementado) para almacenar contraseñas de forma segura.