const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

// Ruta para obtener todos los todos
router.get('/', todoController.getTodos);

// Ruta para obtener todos por ID de usuario
router.get('/user/:userId', todoController.getTodosByUserId);

// Ruta para obtener un todo por ID
router.get('/:id', todoController.getTodoById);

// Ruta para crear un nuevo todo
router.post('/', todoController.createTodo);

// Ruta para actualizar un todo
router.put('/:id', todoController.updateTodo);

// Ruta para marcar un todo como completado
router.patch('/:id/toggle', todoController.toggleTodoComplete);

// Ruta para eliminar un todo
router.delete('/:id', todoController.deleteTodo);

module.exports = router; 