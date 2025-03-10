const express = require('express');
const router = express.Router();
const statController = require('../controllers/statController');

// Ruta para obtener todas las estadísticas
router.get('/', statController.getStats);

// Ruta para obtener una estadística por ID
router.get('/:id', statController.getStatById);

// Ruta para crear una nueva estadística
router.post('/', statController.createStat);

// Ruta para actualizar una estadística
router.put('/:id', statController.updateStat);

// Ruta para eliminar una estadística
router.delete('/:id', statController.deleteStat);

// Ruta para inicializar estadísticas predeterminadas
router.post('/init', statController.initDefaultStats);

module.exports = router; 