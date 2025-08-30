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
```bash
formulario_php/
│
├── public/ # Archivos accesibles desde el navegador
│ ├── index.php # Formulario principal
│ ├── procesar.php # Lógica de registro (controlador básico)
│ ├── css/
│ │ └── style.css # Estilos del frontend
│
├── src/ # Código fuente (backend)
│ ├── config/
│ │ ├── config.php # Función para leer .env
│ │ └── db.php # Conexión a la base de datos
│
├── sql/
│ └── schema.sql # Script para crear la base de datos
│
├── .env # Variables de entorno (NO versionar)
├── .gitignore # Archivos a ignorar en Git
└── README.md # Documentación 
```

## ⚙️ Configuración

1. **Clona este repositorio**:
   ```bash
   git clone https://github.com/tuusuario/tu-repo.git
   cd formulario_php 
   ```


2. Ejecuta el proyecto en tu servidor local (XAMPP, Laragon, etc.)
Accede desde el navegador a:
```bash
    http://localhost/formulario_php/index.php
```

✅ Flujo del proyecto
```bash
1. Usuario completa el formulario en index.php.

2. procesar.php recibe los datos, llama al controlador, y los guarda en la base de datos.

3. Muestra un mensaje de éxito o error estilizado.

4. Usuario puede volver al formulario con un botón.
```

🔒 Buenas prácticas
```bash
- .env nunca se sube al repositorio (controlado con .gitignore).

- Contraseñas almacenadas con password_hash() (seguras).

- Separación de responsabilidades con estructura MVC simple.

- Estilos modernos y animaciones básicas para una mejor presentación.
```