const db = require('../config/db');

class Service {
  // Obtener todos los servicios
  static async getAll() {
    try {
      const result = await db.query('SELECT * FROM services ORDER BY id ASC');
      return result.rows;
    } catch (error) {
      console.error('Error al obtener servicios:', error);
      throw error;
    }
  }

  // Obtener un servicio por ID
  static async getById(id) {
    try {
      const result = await db.query('SELECT * FROM services WHERE id = $1', [id]);
      return result.rows[0];
    } catch (error) {
      console.error(`Error al obtener servicio con ID ${id}:`, error);
      throw error;
    }
  }

  // Crear un nuevo servicio
  static async create(service) {
    const { name, description, icon_name } = service;
    try {
      const result = await db.query(
        'INSERT INTO services (name, description, icon_name) VALUES ($1, $2, $3) RETURNING *',
        [name, description, icon_name]
      );
      return result.rows[0];
    } catch (error) {
      console.error('Error al crear servicio:', error);
      throw error;
    }
  }

  // Actualizar un servicio
  static async update(id, service) {
    const { name, description, icon_name } = service;
    try {
      const result = await db.query(
        'UPDATE services SET name = $1, description = $2, icon_name = $3 WHERE id = $4 RETURNING *',
        [name, description, icon_name, id]
      );
      return result.rows[0];
    } catch (error) {
      console.error(`Error al actualizar servicio con ID ${id}:`, error);
      throw error;
    }
  }

  // Eliminar un servicio
  static async delete(id) {
    try {
      const result = await db.query('DELETE FROM services WHERE id = $1 RETURNING *', [id]);
      return result.rows[0];
    } catch (error) {
      console.error(`Error al eliminar servicio con ID ${id}:`, error);
      throw error;
    }
  }

  // Inicializar servicios predeterminados si no existen
  static async initDefaultServices() {
    try {
      const count = await db.query('SELECT COUNT(*) FROM services');
      
      // Si no hay servicios, crear los predeterminados
      if (parseInt(count.rows[0].count) === 0) {
        const defaultServices = [
          {
            name: 'Diseño de Aeronaves',
            description: 'Servicios de diseño y desarrollo de aeronaves personalizadas según sus necesidades específicas.',
            icon_name: 'PlaneTakeoff'
          },
          {
            name: 'Mantenimiento',
            description: 'Servicios completos de mantenimiento preventivo y correctivo para todo tipo de aeronaves.',
            icon_name: 'Wrench'
          },
          {
            name: 'Análisis de Rendimiento',
            description: 'Evaluación detallada del rendimiento de su aeronave para optimizar eficiencia y seguridad.',
            icon_name: 'BarChart'
          },
          {
            name: 'Certificación de Seguridad',
            description: 'Servicios de certificación y cumplimiento de normativas de seguridad aérea internacionales.',
            icon_name: 'Shield'
          },
          {
            name: 'Sistemas Aviónica',
            description: 'Instalación y mantenimiento de sistemas avanzados de aviónica y navegación.',
            icon_name: 'Cpu'
          },
          {
            name: 'Formación Técnica',
            description: 'Programas de formación especializada para pilotos y personal técnico aeronáutico.',
            icon_name: 'BookOpen'
          }
        ];

        for (const service of defaultServices) {
          await this.create(service);
        }
        
        console.log('Servicios predeterminados creados correctamente');
        return true;
      }
      
      return false;
    } catch (error) {
      console.error('Error al inicializar servicios predeterminados:', error);
      throw error;
    }
  }
}

module.exports = Service; 