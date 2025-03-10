require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const db = require('./config/db');

// Inicializar la aplicación Express
const app = express();
const PORT = process.env.PORT || 5000;
const HOST = '0.0.0.0'; // Permitir conexiones desde cualquier dirección IP

// Configuración de CORS
const corsOptions = {
  origin: ['http://localhost:3000', 'http://localhost:4000', 'http://127.0.0.1:4000'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204
};

// Middleware
app.use(cors(corsOptions));
app.use(helmet({
  contentSecurityPolicy: false, // Deshabilitar CSP para desarrollo
  crossOriginEmbedderPolicy: false // Permitir carga de recursos de otros orígenes
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.get('/', (req, res) => {
  res.json({ message: 'Bienvenido a la API de Skybound Aviation' });
});

// Ruta para verificar la conexión a la base de datos
app.get('/api/health', async (req, res) => {
  try {
    const connected = await db.testConnection();
    if (connected) {
      res.status(200).json({ status: 'ok', message: 'Conexión a la base de datos establecida' });
    } else {
      res.status(500).json({ status: 'error', message: 'No se pudo conectar a la base de datos' });
    }
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
});

// Rutas de la API
app.use('/api/services', require('./routes/services'));
app.use('/api/contact', require('./routes/contact'));
app.use('/api/stats', require('./routes/stats'));
app.use('/api/todos', require('./routes/todos'));

// Manejador de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: 'Error del servidor',
    error: process.env.NODE_ENV === 'development' ? err.message : {}
  });
});

// Inicializar la base de datos y luego iniciar el servidor
const startServer = async () => {
  try {
    // Verificar la conexión a la base de datos
    const connected = await db.testConnection();
    if (!connected) {
      console.warn('No se pudo conectar a la base de datos. El servidor se iniciará sin inicializar las tablas.');
      // Iniciar el servidor de todos modos
      app.listen(PORT, HOST, () => {
        console.log(`Servidor ejecutándose en http://${HOST}:${PORT}`);
        console.log('ADVERTENCIA: La base de datos no está disponible. Algunas funciones pueden no estar operativas.');
      });
      return;
    }
    
    // Inicializar la base de datos
    await db.initDb();
    console.log('Base de datos inicializada correctamente');
    
    // Iniciar el servidor
    app.listen(PORT, HOST, () => {
      console.log(`Servidor ejecutándose en http://${HOST}:${PORT}`);
    });
  } catch (error) {
    console.error('Error al iniciar el servidor:', error);
    // Iniciar el servidor de todos modos, pero con advertencia
    app.listen(PORT, HOST, () => {
      console.log(`Servidor ejecutándose en http://${HOST}:${PORT}`);
      console.log('ADVERTENCIA: La base de datos no está disponible. Algunas funciones pueden no estar operativas.');
    });
  }
};

startServer();

// Exportar para pruebas
module.exports = app; 