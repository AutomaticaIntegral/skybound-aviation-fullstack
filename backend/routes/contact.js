const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// Ruta para obtener todos los mensajes
router.get('/', contactController.getMessages);

// Ruta para obtener mensajes no leídos
router.get('/unread', contactController.getUnreadMessages);

// Ruta para contar mensajes no leídos
router.get('/unread/count', contactController.countUnreadMessages);

// Ruta para obtener un mensaje por ID
router.get('/:id', contactController.getMessageById);

// Ruta para crear un nuevo mensaje
router.post('/', contactController.createMessage);

// Ruta para marcar un mensaje como leído
router.patch('/:id/read', contactController.markAsRead);

// Ruta para eliminar un mensaje
router.delete('/:id', contactController.deleteMessage);

module.exports = router; 