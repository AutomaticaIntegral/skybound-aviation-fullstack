const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');

// Ruta para obtener todos los servicios
router.get('/', serviceController.getServices);

// Ruta para obtener un servicio por ID
router.get('/:id', serviceController.getServiceById);

// Ruta para crear un nuevo servicio
router.post('/', serviceController.createService);

// Ruta para actualizar un servicio
router.put('/:id', serviceController.updateService);

// Ruta para eliminar un servicio
router.delete('/:id', serviceController.deleteService);

// Ruta para inicializar servicios predeterminados
router.post('/init', serviceController.initDefaultServices);

module.exports = router; 