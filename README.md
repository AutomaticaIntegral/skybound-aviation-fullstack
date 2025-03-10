# Skybound Aviation - Aplicación Fullstack

Este proyecto es una versión fullstack de Skybound Aviation, una empresa ficticia de servicios de aviación. La aplicación está construida con React en el frontend y Node.js/Express en el backend, con una base de datos PostgreSQL alojada en Neon.

## Estructura del Proyecto

El proyecto está organizado en dos partes principales:

- **frontend**: Aplicación React con componentes organizados según el patrón Atomic Design
- **backend**: API RESTful con Node.js y Express, conectada a una base de datos PostgreSQL en Neon

## Características Implementadas

### Backend

- API RESTful con Express
- Conexión a base de datos PostgreSQL con Neon
- Modelos para Servicios, Mensajes de Contacto y Estadísticas
- Controladores y rutas para cada modelo
- Inicialización automática de datos predeterminados
- Autenticación simulada para el panel de administración
- Configuración CORS para permitir solicitudes desde el frontend

### Frontend

- Interfaz de usuario moderna con React y Tailwind CSS
- Componentes organizados según el patrón Atomic Design
- Soporte multilingüe
- Formulario de contacto funcional
- Visualización dinámica de servicios y estadísticas
- Panel de administración protegido con autenticación
- Gestión de estado con Context API

## Pasos Realizados

1. **Configuración del Proyecto**
   - Creación de la estructura de directorios para frontend y backend
   - Configuración de dependencias para ambas partes

2. **Implementación del Backend**
   - Configuración de la conexión a la base de datos Neon
   - Creación de modelos para Servicios, Mensajes de Contacto y Estadísticas
   - Implementación de controladores y rutas para la API
   - Configuración de scripts para inicializar la base de datos y los datos predeterminados

3. **Implementación del Frontend**
   - Configuración de React con Vite y TypeScript
   - Implementación de componentes según el patrón Atomic Design
   - Configuración de rutas con React Router
   - Implementación de soporte multilingüe

4. **Implementación de la Autenticación**
   - Creación del contexto de autenticación para gestionar el estado de la sesión
   - Implementación de la página de inicio de sesión
   - Creación de rutas protegidas para el panel de administración
   - Implementación del panel de administración con pestañas para Servicios, Estadísticas y Mensajes

5. **Integración Frontend-Backend**
   - Configuración de CORS en el backend para permitir solicitudes desde el frontend
   - Implementación de llamadas a la API desde el frontend
   - Visualización de datos dinámicos en el frontend

## Requisitos Previos

- Node.js (v14 o superior)
- npm o yarn
- Cuenta en Neon para la base de datos PostgreSQL

## Configuración

### Backend

1. Navega al directorio del backend:
   ```
   cd backend
   ```

2. Instala las dependencias:
   ```
   npm install
   ```

3. Crea un archivo `.env` basado en `.env.example` y configura tus variables de entorno:
   ```
   cp .env.example .env
   ```

4. Edita el archivo `.env` con tus credenciales de Neon y otras configuraciones.

5. Inicializa la base de datos y los datos predeterminados:
   ```
   npm run setup
   ```

6. Inicia el servidor en modo desarrollo:
   ```
   npm run dev
   ```

### Frontend

1. Navega al directorio del frontend:
   ```
   cd frontend
   ```

2. Instala las dependencias:
   ```
   npm install
   ```

3. Inicia la aplicación en modo desarrollo:
   ```
   npm run dev
   ```

## Uso de la Aplicación

### Acceso al Panel de Administración

1. Accede a la página de inicio de sesión:
   ```
   http://localhost:4000/login
   ```

2. Utiliza las siguientes credenciales:
   - Email: `admin@skybound.com`
   - Contraseña: `admin123`

3. Después de iniciar sesión, serás redirigido al panel de administración:
   ```
   http://localhost:4000/admin
   ```

4. En el panel de administración, puedes:
   - Ver y gestionar los servicios
   - Ver y gestionar las estadísticas
   - Ver y gestionar los mensajes de contacto

## API Endpoints

### Servicios

- `GET /api/services` - Obtener todos los servicios
- `GET /api/services/:id` - Obtener un servicio por ID
- `POST /api/services` - Crear un nuevo servicio
- `PUT /api/services/:id` - Actualizar un servicio
- `DELETE /api/services/:id` - Eliminar un servicio
- `POST /api/services/init` - Inicializar servicios predeterminados

### Mensajes de Contacto

- `GET /api/contact` - Obtener todos los mensajes
- `GET /api/contact/unread` - Obtener mensajes no leídos
- `GET /api/contact/unread/count` - Contar mensajes no leídos
- `GET /api/contact/:id` - Obtener un mensaje por ID
- `POST /api/contact` - Crear un nuevo mensaje
- `PATCH /api/contact/:id/read` - Marcar un mensaje como leído
- `DELETE /api/contact/:id` - Eliminar un mensaje

### Estadísticas

- `GET /api/stats` - Obtener todas las estadísticas
- `GET /api/stats/:id` - Obtener una estadística por ID
- `POST /api/stats` - Crear una nueva estadística
- `PUT /api/stats/:id` - Actualizar una estadística
- `DELETE /api/stats/:id` - Eliminar una estadística
- `POST /api/stats/init` - Inicializar estadísticas predeterminadas

### Salud

- `GET /api/health` - Verificar el estado de la conexión a la base de datos

## Solución de Problemas

### Problemas de Conexión al Backend

Si no puedes acceder al backend desde el navegador, asegúrate de que:

1. El servidor backend esté en ejecución:
   ```
   cd backend && npm run dev
   ```

2. El servidor esté escuchando en la dirección correcta:
   ```
   Servidor ejecutándose en http://0.0.0.0:5000
   ```

3. No haya problemas de CORS. El backend está configurado para permitir solicitudes desde:
   ```
   http://localhost:3000
   http://localhost:4000
   http://127.0.0.1:4000
   ```

### Problemas de Autenticación

Si tienes problemas para iniciar sesión, asegúrate de que:

1. Estás utilizando las credenciales correctas:
   - Email: `admin@skybound.com`
   - Contraseña: `admin123`

2. El contexto de autenticación esté configurado correctamente en el frontend.

## Scripts Disponibles

### Backend

- `npm start` - Iniciar el servidor en modo producción
- `npm run dev` - Iniciar el servidor en modo desarrollo con recarga automática
- `npm run init-db` - Inicializar las tablas de la base de datos
- `npm run init-data` - Inicializar los datos predeterminados
- `npm run setup` - Ejecutar init-db e init-data en secuencia

### Frontend

- `npm run dev` - Iniciar el servidor de desarrollo
- `npm run build` - Construir la aplicación para producción
- `npm run lint` - Ejecutar el linter
- `npm run preview` - Previsualizar la aplicación construida

## Próximos Pasos

- Implementar autenticación real con JWT
- Añadir funcionalidad CRUD completa en el panel de administración
- Implementar pruebas unitarias y de integración
- Mejorar la experiencia de usuario en el panel de administración
- Implementar un sistema de notificaciones para nuevos mensajes de contacto

## Licencia

MIT
