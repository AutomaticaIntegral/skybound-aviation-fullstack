# Instrucciones para el Servidor MCP (GitHub API)

Este documento proporciona instrucciones sobre cómo configurar y utilizar el servidor MCP para ejecutar operaciones de la API de GitHub.

## Funciones Disponibles

El servidor MCP puede ejecutar las siguientes funciones de la API de GitHub:

1. `create_or_update_file` - Crear o actualizar un archivo en un repositorio
2. `search_repositories` - Buscar repositorios en GitHub
3. `create_repository` - Crear un nuevo repositorio
4. `get_file_contents` - Obtener el contenido de un archivo o directorio
5. `push_files` - Subir múltiples archivos en un solo commit
6. `create_issue` - Crear un nuevo issue en un repositorio
7. `create_pull_request` - Crear un nuevo pull request
8. `fork_repository` - Hacer fork de un repositorio
9. `create_branch` - Crear una nueva rama
10. `list_commits` - Listar commits de una rama
11. `list_issues` - Listar issues de un repositorio
12. `update_issue` - Actualizar un issue existente
13. `add_issue_comment` - Añadir un comentario a un issue
14. `search_code` - Buscar código en repositorios
15. `search_issues` - Buscar issues y pull requests
16. `search_users` - Buscar usuarios en GitHub
17. `get_issue` - Obtener detalles de un issue específico

## Herramientas de Navegador (Browser Tools)

El servidor MCP también proporciona herramientas para interactuar con el navegador:

1. `getConsoleLogs` - Obtener los logs de la consola del navegador
2. `getConsoleErrors` - Obtener los errores de la consola del navegador
3. `getNetworkErrorLogs` - Obtener los logs de errores de red
4. `getNetworkSuccessLogs` - Obtener los logs de éxito de red
5. `takeScreenshot` - Tomar una captura de pantalla del navegador actual
6. `getSelectedElement` - Obtener el elemento seleccionado en el navegador
7. `wipeLogs` - Limpiar todos los logs del navegador en memoria

### Ejemplos de Uso de Browser Tools

```javascript
// Tomar una captura de pantalla
mcp__takeScreenshot({
  random_string: "capture"
})

// Obtener logs de consola
mcp__getConsoleLogs({
  random_string: "logs"
})

// Limpiar logs
mcp__wipeLogs({
  random_string: "clear"
})
```

## Herramientas de Base de Datos Neon

El servidor MCP incluye funciones para interactuar con bases de datos Neon:

1. `__node_version` - Obtener la versión de Node.js utilizada por el servidor MCP
2. `list_projects` - Listar todos los proyectos Neon en tu cuenta
3. `create_project` - Crear un nuevo proyecto Neon
4. `delete_project` - Eliminar un proyecto Neon
5. `describe_project` - Describir un proyecto Neon
6. `run_sql` - Ejecutar una consulta SQL en una base de datos Neon
7. `run_sql_transaction` - Ejecutar una transacción SQL en una base de datos Neon
8. `describe_table_schema` - Describir el esquema de una tabla
9. `get_database_tables` - Obtener todas las tablas de una base de datos
10. `create_branch` - Crear una nueva rama en un proyecto Neon
11. `prepare_database_migration` - Preparar una migración de base de datos
12. `complete_database_migration` - Completar una migración de base de datos
13. `describe_branch` - Obtener una vista de árbol de todos los objetos en una rama
14. `delete_branch` - Eliminar una rama de un proyecto Neon

### Ejemplos de Uso de Neon Database

```javascript
// Listar proyectos
mcp__list_projects({})

// Crear un proyecto
mcp__create_project({
  name: "mi-proyecto-neon"
})

// Ejecutar SQL
mcp__run_sql({
  projectId: "tu-project-id",
  databaseName: "neondb",
  sql: "SELECT * FROM users LIMIT 10;"
})

// Describir esquema de tabla
mcp__describe_table_schema({
  projectId: "tu-project-id",
  databaseName: "neondb",
  tableName: "users"
})
```

## Configuración

Para configurar el servidor MCP para usar la API de GitHub:

1. Asegúrate de tener un token de acceso personal de GitHub con los permisos adecuados
2. Configura las variables de entorno necesarias:
   ```
   GITHUB_TOKEN=tu_token_de_acceso_personal
   ```

## Ejemplos de Uso de GitHub API

### Crear un Repositorio
```javascript
mcp__create_repository({
  name: "mi-nuevo-repo",
  description: "Mi nuevo repositorio",
  private: true,
  autoInit: true
})
```

### Crear o Actualizar un Archivo
```javascript
mcp__create_or_update_file({
  owner: "nombre_usuario",
  repo: "nombre_repo",
  path: "ruta/al/archivo.txt",
  message: "Mensaje de commit",
  content: "Contenido del archivo",
  branch: "main"
})
```

### Buscar Repositorios
```javascript
mcp__search_repositories({
  query: "tema lenguaje:javascript"
})
```

### Obtener Contenido de un Archivo
```javascript
mcp__get_file_contents({
  owner: "nombre_usuario",
  repo: "nombre_repo",
  path: "ruta/al/archivo.txt"
})
```

### Crear un Issue
```javascript
mcp__create_issue({
  owner: "nombre_usuario",
  repo: "nombre_repo",
  title: "Título del issue",
  body: "Descripción del issue"
})
```

## Notas Importantes

- Todas las operaciones están sujetas a los límites de la API de GitHub
- Asegúrate de tener los permisos adecuados para realizar las operaciones
- Para operaciones en repositorios privados, necesitarás un token con los permisos adecuados
- Para las operaciones de Neon Database, necesitarás tener configuradas las credenciales adecuadas

## Solución de Problemas

Si encuentras errores al ejecutar estas funciones, verifica:

1. Que tu token tenga los permisos necesarios
2. Que estés proporcionando todos los parámetros requeridos
3. Que los nombres de usuario, repositorio y rutas sean correctos
4. Que no estés excediendo los límites de la API de GitHub
5. Para herramientas de navegador, asegúrate de que el navegador esté abierto y accesible
6. Para operaciones de Neon Database, verifica que las credenciales y los identificadores de proyecto sean correctos 