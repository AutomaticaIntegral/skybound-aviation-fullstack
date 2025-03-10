require('dotenv').config();
const { Pool } = require('pg');

console.log('Iniciando script de inicialización de datos predeterminados...');
console.log('DATABASE_URL:', process.env.DATABASE_URL);

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  },
  connectionTimeoutMillis: 10000 // 10 segundos
});

const initDefaultData = async () => {
  let client;
  try {
    // Verificar la conexión
    console.log('Verificando conexión a la base de datos...');
    const testResult = await pool.query('SELECT NOW()');
    console.log('Conexión exitosa. Hora del servidor:', testResult.rows[0].now);
    
    // Obtener un cliente del pool
    console.log('Obteniendo cliente para inicializar datos...');
    client = await pool.connect();
    
    // Inicializar servicios predeterminados
    console.log('Inicializando servicios predeterminados...');
    const servicesCount = await client.query('SELECT COUNT(*) FROM services');
    
    if (parseInt(servicesCount.rows[0].count) === 0) {
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
        await client.query(
          'INSERT INTO services (name, description, icon_name) VALUES ($1, $2, $3)',
          [service.name, service.description, service.icon_name]
        );
      }
      
      console.log('Servicios predeterminados creados correctamente');
    } else {
      console.log('Los servicios ya estaban inicializados');
    }
    
    // Inicializar estadísticas predeterminadas
    console.log('Inicializando estadísticas predeterminadas...');
    const statsCount = await client.query('SELECT COUNT(*) FROM stats');
    
    if (parseInt(statsCount.rows[0].count) === 0) {
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
        await client.query(
          'INSERT INTO stats (name, value, icon_name) VALUES ($1, $2, $3)',
          [stat.name, stat.value, stat.icon_name]
        );
      }
      
      console.log('Estadísticas predeterminadas creadas correctamente');
    } else {
      console.log('Las estadísticas ya estaban inicializadas');
    }
    
    // Verificar datos insertados
    console.log('Verificando datos insertados...');
    
    const servicesResult = await client.query('SELECT * FROM services');
    console.log(`Servicios (${servicesResult.rows.length}):`);
    servicesResult.rows.forEach(row => {
      console.log(`- ${row.name} (${row.icon_name})`);
    });
    
    const statsResult = await client.query('SELECT * FROM stats');
    console.log(`Estadísticas (${statsResult.rows.length}):`);
    statsResult.rows.forEach(row => {
      console.log(`- ${row.name}: ${row.value} (${row.icon_name})`);
    });
    
    console.log('Inicialización de datos predeterminados completada con éxito.');
  } catch (error) {
    console.error('Error al inicializar datos predeterminados:', error);
  } finally {
    if (client) {
      client.release();
      console.log('Cliente liberado');
    }
    await pool.end();
    console.log('Conexión a la base de datos cerrada');
  }
};

initDefaultData(); 