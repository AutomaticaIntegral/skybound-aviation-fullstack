const Todo = require('../models/Todo');

// Obtener todos los todos
const getTodos = async (req, res) => {
  try {
    const todos = await Todo.getAll();
    res.status(200).json(todos);
  } catch (error) {
    console.error('Error en getTodos:', error);
    res.status(500).json({ message: 'Error al obtener todos' });
  }
};

// Obtener todos por ID de usuario
const getTodosByUserId = async (req, res) => {
  try {
    const todos = await Todo.getByUserId(req.params.userId);
    res.status(200).json(todos);
  } catch (error) {
    console.error('Error en getTodosByUserId:', error);
    res.status(500).json({ message: 'Error al obtener todos del usuario' });
  }
};

// Obtener un todo por ID
const getTodoById = async (req, res) => {
  try {
    const todo = await Todo.getById(req.params.id);
    if (!todo) {
      return res.status(404).json({ message: 'Todo no encontrado' });
    }
    res.status(200).json(todo);
  } catch (error) {
    console.error('Error en getTodoById:', error);
    res.status(500).json({ message: 'Error al obtener todo' });
  }
};

// Crear un nuevo todo
const createTodo = async (req, res) => {
  try {
    const { task, owner_id } = req.body;
    
    // Validación básica
    if (!task || !owner_id) {
      return res.status(400).json({ message: 'Tarea y ID de propietario son requeridos' });
    }
    
    const newTodo = await Todo.create({ task, owner_id });
    res.status(201).json(newTodo);
  } catch (error) {
    console.error('Error en createTodo:', error);
    res.status(500).json({ message: 'Error al crear todo' });
  }
};

// Actualizar un todo
const updateTodo = async (req, res) => {
  try {
    const { task, is_complete } = req.body;
    
    // Validación básica
    if (!task) {
      return res.status(400).json({ message: 'Tarea es requerida' });
    }
    
    const updatedTodo = await Todo.update(req.params.id, { task, is_complete });
    if (!updatedTodo) {
      return res.status(404).json({ message: 'Todo no encontrado' });
    }
    res.status(200).json(updatedTodo);
  } catch (error) {
    console.error('Error en updateTodo:', error);
    res.status(500).json({ message: 'Error al actualizar todo' });
  }
};

// Marcar un todo como completado
const toggleTodoComplete = async (req, res) => {
  try {
    const updatedTodo = await Todo.toggleComplete(req.params.id);
    if (!updatedTodo) {
      return res.status(404).json({ message: 'Todo no encontrado' });
    }
    res.status(200).json(updatedTodo);
  } catch (error) {
    console.error('Error en toggleTodoComplete:', error);
    res.status(500).json({ message: 'Error al marcar todo como completado' });
  }
};

// Eliminar un todo
const deleteTodo = async (req, res) => {
  try {
    const deletedTodo = await Todo.delete(req.params.id);
    if (!deletedTodo) {
      return res.status(404).json({ message: 'Todo no encontrado' });
    }
    res.status(200).json({ message: 'Todo eliminado correctamente' });
  } catch (error) {
    console.error('Error en deleteTodo:', error);
    res.status(500).json({ message: 'Error al eliminar todo' });
  }
};

module.exports = {
  getTodos,
  getTodosByUserId,
  getTodoById,
  createTodo,
  updateTodo,
  toggleTodoComplete,
  deleteTodo
}; 