const db = require('../config/db');

class ContactMessage {
  // Obtener todos los mensajes
  static async getAll() {
    try {
      const result = await db.query('SELECT * FROM contact_messages ORDER BY created_at DESC');
      return result.rows;
    } catch (error) {
      console.error('Error al obtener mensajes de contacto:', error);
      throw error;
    }
  }

  // Obtener un mensaje por ID
  static async getById(id) {
    try {
      const result = await db.query('SELECT * FROM contact_messages WHERE id = $1', [id]);
      return result.rows[0];
    } catch (error) {
      console.error(`Error al obtener mensaje con ID ${id}:`, error);
      throw error;
    }
  }

  // Crear un nuevo mensaje
  static async create(message) {
    const { name, email, phone, message: messageText } = message;
    try {
      const result = await db.query(
        'INSERT INTO contact_messages (name, email, phone, message) VALUES ($1, $2, $3, $4) RETURNING *',
        [name, email, phone, messageText]
      );
      return result.rows[0];
    } catch (error) {
      console.error('Error al crear mensaje de contacto:', error);
      throw error;
    }
  }

  // Marcar mensaje como leído
  static async markAsRead(id) {
    try {
      const result = await db.query(
        'UPDATE contact_messages SET read = true WHERE id = $1 RETURNING *',
        [id]
      );
      return result.rows[0];
    } catch (error) {
      console.error(`Error al marcar mensaje con ID ${id} como leído:`, error);
      throw error;
    }
  }

  // Eliminar un mensaje
  static async delete(id) {
    try {
      const result = await db.query('DELETE FROM contact_messages WHERE id = $1 RETURNING *', [id]);
      return result.rows[0];
    } catch (error) {
      console.error(`Error al eliminar mensaje con ID ${id}:`, error);
      throw error;
    }
  }

  // Obtener mensajes no leídos
  static async getUnread() {
    try {
      const result = await db.query('SELECT * FROM contact_messages WHERE read = false ORDER BY created_at DESC');
      return result.rows;
    } catch (error) {
      console.error('Error al obtener mensajes no leídos:', error);
      throw error;
    }
  }

  // Contar mensajes no leídos
  static async countUnread() {
    try {
      const result = await db.query('SELECT COUNT(*) FROM contact_messages WHERE read = false');
      return parseInt(result.rows[0].count);
    } catch (error) {
      console.error('Error al contar mensajes no leídos:', error);
      throw error;
    }
  }
}

module.exports = ContactMessage; 