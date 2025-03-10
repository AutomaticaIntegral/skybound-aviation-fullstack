const Service = require('../models/Service');

// Obtener todos los servicios
const getServices = async (req, res) => {
  try {
    const services = await Service.getAll();
    res.status(200).json(services);
  } catch (error) {
    console.error('Error en getServices:', error);
    res.status(500).json({ message: 'Error al obtener servicios' });
  }
};

// Obtener un servicio por ID
const getServiceById = async (req, res) => {
  try {
    const service = await Service.getById(req.params.id);
    if (!service) {
      return res.status(404).json({ message: 'Servicio no encontrado' });
    }
    res.status(200).json(service);
  } catch (error) {
    console.error('Error en getServiceById:', error);
    res.status(500).json({ message: 'Error al obtener servicio' });
  }
};

// Crear un nuevo servicio
const createService = async (req, res) => {
  try {
    const { name, description, icon_name } = req.body;
    
    // Validación básica
    if (!name || !description) {
      return res.status(400).json({ message: 'Nombre y descripción son requeridos' });
    }
    
    const newService = await Service.create({ name, description, icon_name });
    res.status(201).json(newService);
  } catch (error) {
    console.error('Error en createService:', error);
    res.status(500).json({ message: 'Error al crear servicio' });
  }
};

// Actualizar un servicio
const updateService = async (req, res) => {
  try {
    const { name, description, icon_name } = req.body;
    
    // Validación básica
    if (!name || !description) {
      return res.status(400).json({ message: 'Nombre y descripción son requeridos' });
    }
    
    const updatedService = await Service.update(req.params.id, { name, description, icon_name });
    if (!updatedService) {
      return res.status(404).json({ message: 'Servicio no encontrado' });
    }
    res.status(200).json(updatedService);
  } catch (error) {
    console.error('Error en updateService:', error);
    res.status(500).json({ message: 'Error al actualizar servicio' });
  }
};

// Eliminar un servicio
const deleteService = async (req, res) => {
  try {
    const deletedService = await Service.delete(req.params.id);
    if (!deletedService) {
      return res.status(404).json({ message: 'Servicio no encontrado' });
    }
    res.status(200).json({ message: 'Servicio eliminado correctamente' });
  } catch (error) {
    console.error('Error en deleteService:', error);
    res.status(500).json({ message: 'Error al eliminar servicio' });
  }
};

// Inicializar servicios predeterminados
const initDefaultServices = async (req, res) => {
  try {
    const initialized = await Service.initDefaultServices();
    if (initialized) {
      res.status(201).json({ message: 'Servicios predeterminados creados correctamente' });
    } else {
      res.status(200).json({ message: 'Los servicios ya estaban inicializados' });
    }
  } catch (error) {
    console.error('Error en initDefaultServices:', error);
    res.status(500).json({ message: 'Error al inicializar servicios predeterminados' });
  }
};

module.exports = {
  getServices,
  getServiceById,
  createService,
  updateService,
  deleteService,
  initDefaultServices
}; 