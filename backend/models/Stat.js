const db = require('../config/db');

class Stat {
  // Obtener todas las estadísticas
  static async getAll() {
    try {
      const result = await db.query('SELECT * FROM stats ORDER BY id ASC');
      return result.rows;
    } catch (error) {
      console.error('Error al obtener estadísticas:', error);
      throw error;
    }
  }

  // Obtener una estadística por ID
  static async getById(id) {
    try {
      const result = await db.query('SELECT * FROM stats WHERE id = $1', [id]);
      return result.rows[0];
    } catch (error) {
      console.error(`Error al obtener estadística con ID ${id}:`, error);
      throw error;
    }
  }

  // Crear una nueva estadística
  static async create(stat) {
    const { name, value, icon_name } = stat;
    try {
      const result = await db.query(
        'INSERT INTO stats (name, value, icon_name) VALUES ($1, $2, $3) RETURNING *',
        [name, value, icon_name]
      );
      return result.rows[0];
    } catch (error) {
      console.error('Error al crear estadística:', error);
      throw error;
    }
  }

  // Actualizar una estadística
  static async update(id, stat) {
    const { name, value, icon_name } = stat;
    try {
      const result = await db.query(
        'UPDATE stats SET name = $1, value = $2, icon_name = $3, updated_at = CURRENT_TIMESTAMP WHERE id = $4 RETURNING *',
        [name, value, icon_name, id]
      );
      return result.rows[0];
    } catch (error) {
      console.error(`Error al actualizar estadística con ID ${id}:`, error);
      throw error;
    }
  }

  // Eliminar una estadística
  static async delete(id) {
    try {
      const result = await db.query('DELETE FROM stats WHERE id = $1 RETURNING *', [id]);
      return result.rows[0];
    } catch (error) {
      console.error(`Error al eliminar estadística con ID ${id}:`, error);
      throw error;
    }
  }

  // Inicializar estadísticas predeterminadas si no existen
  static async initDefaultStats() {
    try {
      const count = await db.query('SELECT COUNT(*) FROM stats');
      
      // Si no hay estadísticas, crear las predeterminadas
      if (parseInt(count.rows[0].count) === 0) {
        const defaultStats = [
          {
            name: 'Proyectos Completados',
            value: 500,
            icon_name: 'CheckCircle'
          },
          {
            name: 'Ingenieros Expertos',
            value: 120,
            icon_name: 'Users'
          },
          {
            name: 'Países Atendidos',
            value: 30,
            icon_name: 'Globe'
          },
          {
            name: 'Premios del Sector',
            value: 25,
            icon_name: 'Award'
          }
        ];

        for (const stat of defaultStats) {
          await this.create(stat);
        }
        
        console.log('Estadísticas predeterminadas creadas correctamente');
        return true;
      }
      
      return false;
    } catch (error) {
      console.error('Error al inicializar estadísticas predeterminadas:', error);
      throw error;
    }
  }
}

module.exports = Stat; 