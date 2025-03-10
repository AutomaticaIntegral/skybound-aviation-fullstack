const db = require('../config/db');

class Todo {
  // Obtener todos los todos
  static async getAll() {
    try {
      const result = await db.query(`
        SELECT 
          todos.id,
          todos.task,
          todos.is_complete,
          todos.owner_id,
          neon_auth.users_sync.email as owner_email
        FROM todos
        LEFT JOIN neon_auth.users_sync ON todos.owner_id = neon_auth.users_sync.id
        ORDER BY todos.inserted_at ASC
      `);
      return result.rows;
    } catch (error) {
      console.error('Error al obtener todos:', error);
      throw error;
    }
  }

  // Obtener todos por ID de usuario
  static async getByUserId(userId) {
    try {
      const result = await db.query(
        `SELECT * FROM todos WHERE owner_id = $1 ORDER BY inserted_at ASC`,
        [userId]
      );
      return result.rows;
    } catch (error) {
      console.error(`Error al obtener todos del usuario ${userId}:`, error);
      throw error;
    }
  }

  // Obtener un todo por ID
  static async getById(id) {
    try {
      const result = await db.query('SELECT * FROM todos WHERE id = $1', [id]);
      return result.rows[0];
    } catch (error) {
      console.error(`Error al obtener todo con ID ${id}:`, error);
      throw error;
    }
  }

  // Crear un nuevo todo
  static async create(todo) {
    const { task, owner_id } = todo;
    try {
      const result = await db.query(
        'INSERT INTO todos (task, owner_id) VALUES ($1, $2) RETURNING *',
        [task, owner_id]
      );
      return result.rows[0];
    } catch (error) {
      console.error('Error al crear todo:', error);
      throw error;
    }
  }

  // Actualizar un todo
  static async update(id, todo) {
    const { task, is_complete } = todo;
    try {
      const result = await db.query(
        'UPDATE todos SET task = $1, is_complete = $2 WHERE id = $3 RETURNING *',
        [task, is_complete, id]
      );
      return result.rows[0];
    } catch (error) {
      console.error(`Error al actualizar todo con ID ${id}:`, error);
      throw error;
    }
  }

  // Marcar un todo como completado
  static async toggleComplete(id) {
    try {
      const result = await db.query(
        'UPDATE todos SET is_complete = NOT is_complete WHERE id = $1 RETURNING *',
        [id]
      );
      return result.rows[0];
    } catch (error) {
      console.error(`Error al marcar todo con ID ${id} como completado:`, error);
      throw error;
    }
  }

  // Eliminar un todo
  static async delete(id) {
    try {
      const result = await db.query('DELETE FROM todos WHERE id = $1 RETURNING *', [id]);
      return result.rows[0];
    } catch (error) {
      console.error(`Error al eliminar todo con ID ${id}:`, error);
      throw error;
    }
  }
}

module.exports = Todo; 