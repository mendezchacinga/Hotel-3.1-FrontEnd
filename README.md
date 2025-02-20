Universidad Valle del Momboy

Profesor: Yerson GonzálezEstudiante: Gustavo Mendez

Requisitos e Instalación

Para ejecutar este proyecto, es necesario contar con los siguientes elementos instalados en tu sistema:

Node.js

MongoDB

NPM (Node Package Manager)

Descarga del Proyecto

Los archivos del proyecto se encuentran en los siguientes repositorios de GitHub:

Backend: https://github.com/mendezchacinga/Hotel-3.1-Back-End

Frontend: https://github.com/mendezchacinga/Hotel-3.1-FrontEnd

Para obtener los archivos, sigue estos pasos:

Ingresa a los enlaces anteriores.

Haz clic en "Code" y luego selecciona "Download ZIP".

Extrae los archivos descargados y ubica ambos proyectos en una misma carpeta.

Configuración del Entorno

Abre Visual Studio Code y carga la carpeta del backend en una ventana.

En otra ventana de VS Code, abre la carpeta del frontend.

Agrega las variables de entorno necesarias:

Backend: Copia el archivo .env proporcionado.

Frontend: Copia el archivo .env.local proporcionado.

Instalación de Dependencias

Abre la terminal en cada ventana de VS Code (con CTRL + Ñ o desde "Terminal > Abrir Terminal") y ejecuta el siguiente comando en ambas:

npm install

Ejecución del Proyecto

Para iniciar el backend y el frontend, usa el siguiente comando en ambas terminales:

npm run dev

Luego, accede a la aplicación desde tu navegador en http://localhost:3000.

Base de Datos

Para gestionar los archivos CSV de usuarios y reservas, puedes utilizar MongoDB Compass u otra herramienta compatible, como un plugin de VS Code.

Credenciales de Administrador

Para probar las funcionalidades del administrador, puedes iniciar sesión con:

Correo: admin@gmail.com

Contraseña: 123

Uso de la Aplicación

Esta aplicación es una SPA (Single Page Application) que permite gestionar un sistema de reservas mediante operaciones CRUD:

Crear: Generar nuevas reservas en la sección "Reserva".

Leer: Visualizar reservas y usuarios desde el panel de administración.

Editar: Modificar datos de reservas y usuarios desde el perfil del administrador.

Login: Iniciar sesión como usuario o administrador.

Registro: Crear una nueva cuenta para acceder al sistema.

Blog: Explorar artículos relacionados con viajes.

Seguridad y Notificaciones

Protección de Rutas: Se han implementado permisos para restringir el acceso a ciertas secciones.

Correos Automáticos:

Se envía una confirmación de reserva al correo del usuario.

Se envían ofertas promocionales diariamente a las 8 AM.

Estructura del Proyecto

Archivos y Carpetas Principales

node_modules/: Contiene las dependencias del proyecto.

public/: Almacena archivos estáticos como imágenes y estilos.

package.json: Define las dependencias y scripts del proyecto.

.gitignore: Especifica los archivos que deben excluirse del control de versiones.

vite.config.js: Configuración del entorno de desarrollo con Vite.

tailwind.config.js: Configuración del framework de estilos Tailwind CSS.

postcss.config.js: Configuración de PostCSS para procesamiento de estilos CSS.

Carpeta src/

main.jsx: Punto de entrada principal de la aplicación.

index.css: Archivo global de estilos.

app.jsx: Componente principal que define la estructura de la interfaz.

Componentes

Header/: Contiene el encabezado, el menú de navegación y el loader.

Admin/: Elementos de la interfaz del administrador.

Blog/: Componentes de la sección de artículos.

Reservas/: Elementos de la funcionalidad de reservas.

AnimatedPage: Agrega animaciones de transición de páginas con Framer Motion.

Footer: Pie de página de la aplicación.

Profile: Componente para la gestión del perfil de usuario y administrador.

ProtectedRoute: Controla el acceso a las rutas protegidas según los permisos del usuario.

Registro: Formulario de registro de nuevos usuarios.

Otras Carpetas

assets/: Almacena recursos estáticos como imágenes e íconos.

context/: Contiene la gestión del estado global, como el AuthProvider para la autenticación.
