const Stat = require('../models/Stat');

// Obtener todas las estadísticas
const getStats = async (req, res) => {
  try {
    const stats = await Stat.getAll();
    res.status(200).json(stats);
  } catch (error) {
    console.error('Error en getStats:', error);
    res.status(500).json({ message: 'Error al obtener estadísticas' });
  }
};

// Obtener una estadística por ID
const getStatById = async (req, res) => {
  try {
    const stat = await Stat.getById(req.params.id);
    if (!stat) {
      return res.status(404).json({ message: 'Estadística no encontrada' });
    }
    res.status(200).json(stat);
  } catch (error) {
    console.error('Error en getStatById:', error);
    res.status(500).json({ message: 'Error al obtener estadística' });
  }
};

// Crear una nueva estadística
const createStat = async (req, res) => {
  try {
    const { name, value, icon_name } = req.body;
    
    // Validación básica
    if (!name || value === undefined) {
      return res.status(400).json({ message: 'Nombre y valor son requeridos' });
    }
    
    // Validar que el valor sea un número
    if (isNaN(value)) {
      return res.status(400).json({ message: 'El valor debe ser un número' });
    }
    
    const newStat = await Stat.create({ name, value, icon_name });
    res.status(201).json(newStat);
  } catch (error) {
    console.error('Error en createStat:', error);
    res.status(500).json({ message: 'Error al crear estadística' });
  }
};

// Actualizar una estadística
const updateStat = async (req, res) => {
  try {
    const { name, value, icon_name } = req.body;
    
    // Validación básica
    if (!name || value === undefined) {
      return res.status(400).json({ message: 'Nombre y valor son requeridos' });
    }
    
    // Validar que el valor sea un número
    if (isNaN(value)) {
      return res.status(400).json({ message: 'El valor debe ser un número' });
    }
    
    const updatedStat = await Stat.update(req.params.id, { name, value, icon_name });
    if (!updatedStat) {
      return res.status(404).json({ message: 'Estadística no encontrada' });
    }
    res.status(200).json(updatedStat);
  } catch (error) {
    console.error('Error en updateStat:', error);
    res.status(500).json({ message: 'Error al actualizar estadística' });
  }
};

// Eliminar una estadística
const deleteStat = async (req, res) => {
  try {
    const deletedStat = await Stat.delete(req.params.id);
    if (!deletedStat) {
      return res.status(404).json({ message: 'Estadística no encontrada' });
    }
    res.status(200).json({ message: 'Estadística eliminada correctamente' });
  } catch (error) {
    console.error('Error en deleteStat:', error);
    res.status(500).json({ message: 'Error al eliminar estadística' });
  }
};

// Inicializar estadísticas predeterminadas
const initDefaultStats = async (req, res) => {
  try {
    const initialized = await Stat.initDefaultStats();
    if (initialized) {
      res.status(201).json({ message: 'Estadísticas predeterminadas creadas correctamente' });
    } else {
      res.status(200).json({ message: 'Las estadísticas ya estaban inicializadas' });
    }
  } catch (error) {
    console.error('Error en initDefaultStats:', error);
    res.status(500).json({ message: 'Error al inicializar estadísticas predeterminadas' });
  }
};

module.exports = {
  getStats,
  getStatById,
  createStat,
  updateStat,
  deleteStat,
  initDefaultStats
}; 