const ContactMessage = require('../models/ContactMessage');

// Obtener todos los mensajes de contacto
const getMessages = async (req, res) => {
  try {
    const messages = await ContactMessage.getAll();
    res.status(200).json(messages);
  } catch (error) {
    console.error('Error en getMessages:', error);
    res.status(500).json({ message: 'Error al obtener mensajes de contacto' });
  }
};

// Obtener un mensaje de contacto por ID
const getMessageById = async (req, res) => {
  try {
    const message = await ContactMessage.getById(req.params.id);
    if (!message) {
      return res.status(404).json({ message: 'Mensaje no encontrado' });
    }
    res.status(200).json(message);
  } catch (error) {
    console.error('Error en getMessageById:', error);
    res.status(500).json({ message: 'Error al obtener mensaje de contacto' });
  }
};

// Crear un nuevo mensaje de contacto
const createMessage = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    
    // Validación básica
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Nombre, email y mensaje son requeridos' });
    }
    
    // Validación simple de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Email inválido' });
    }
    
    const newMessage = await ContactMessage.create({ name, email, phone, message });
    res.status(201).json({ 
      success: true,
      message: 'Mensaje enviado correctamente',
      data: newMessage
    });
  } catch (error) {
    console.error('Error en createMessage:', error);
    res.status(500).json({ message: 'Error al crear mensaje de contacto' });
  }
};

// Marcar mensaje como leído
const markAsRead = async (req, res) => {
  try {
    const updatedMessage = await ContactMessage.markAsRead(req.params.id);
    if (!updatedMessage) {
      return res.status(404).json({ message: 'Mensaje no encontrado' });
    }
    res.status(200).json(updatedMessage);
  } catch (error) {
    console.error('Error en markAsRead:', error);
    res.status(500).json({ message: 'Error al marcar mensaje como leído' });
  }
};

// Eliminar un mensaje
const deleteMessage = async (req, res) => {
  try {
    const deletedMessage = await ContactMessage.delete(req.params.id);
    if (!deletedMessage) {
      return res.status(404).json({ message: 'Mensaje no encontrado' });
    }
    res.status(200).json({ message: 'Mensaje eliminado correctamente' });
  } catch (error) {
    console.error('Error en deleteMessage:', error);
    res.status(500).json({ message: 'Error al eliminar mensaje' });
  }
};

// Obtener mensajes no leídos
const getUnreadMessages = async (req, res) => {
  try {
    const messages = await ContactMessage.getUnread();
    res.status(200).json(messages);
  } catch (error) {
    console.error('Error en getUnreadMessages:', error);
    res.status(500).json({ message: 'Error al obtener mensajes no leídos' });
  }
};

// Contar mensajes no leídos
const countUnreadMessages = async (req, res) => {
  try {
    const count = await ContactMessage.countUnread();
    res.status(200).json({ count });
  } catch (error) {
    console.error('Error en countUnreadMessages:', error);
    res.status(500).json({ message: 'Error al contar mensajes no leídos' });
  }
};

module.exports = {
  getMessages,
  getMessageById,
  createMessage,
  markAsRead,
  deleteMessage,
  getUnreadMessages,
  countUnreadMessages
}; 