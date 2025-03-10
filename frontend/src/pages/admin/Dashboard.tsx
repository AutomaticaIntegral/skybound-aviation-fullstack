import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { LogOut, Users, MessageSquare, BarChart2, Settings } from 'lucide-react';
import axios from 'axios';

// URL base de la API
const API_URL = 'http://localhost:5000/api';

const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('services');
  const [services, setServices] = useState([]);
  const [stats, setStats] = useState([]);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Cargar datos al montar el componente
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Cargar servicios
        const servicesResponse = await axios.get(`${API_URL}/services`);
        setServices(servicesResponse.data);

        // Cargar estadísticas
        const statsResponse = await axios.get(`${API_URL}/stats`);
        setStats(statsResponse.data);

        // Cargar mensajes
        const messagesResponse = await axios.get(`${API_URL}/contact`);
        setMessages(messagesResponse.data);

        setError('');
      } catch (err) {
        console.error('Error al cargar datos:', err);
        setError('Error al cargar datos. Por favor, intenta de nuevo.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Manejar cierre de sesión
  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  // Renderizar contenido según la pestaña activa
  const renderContent = () => {
    if (loading) {
      return (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-skyblue"></div>
        </div>
      );
    }

    if (error) {
      return (
        <div className="bg-red-50 p-4 rounded-md">
          <p className="text-red-800">{error}</p>
        </div>
      );
    }

    switch (activeTab) {
      case 'services':
        return (
          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <ul className="divide-y divide-gray-200">
              {services.map((service: any) => (
                <li key={service.id}>
                  <div className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-skyblue truncate">{service.name}</p>
                      <div className="ml-2 flex-shrink-0 flex">
                        <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {service.icon_name}
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 sm:flex sm:justify-between">
                      <div className="sm:flex">
                        <p className="text-sm text-gray-500">{service.description}</p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        );
      case 'stats':
        return (
          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <ul className="divide-y divide-gray-200">
              {stats.map((stat: any) => (
                <li key={stat.id}>
                  <div className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-skyblue truncate">{stat.name}</p>
                      <div className="ml-2 flex-shrink-0 flex">
                        <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                          {stat.value}
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 sm:flex sm:justify-between">
                      <div className="sm:flex">
                        <p className="text-sm text-gray-500">{stat.icon_name}</p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        );
      case 'messages':
        return (
          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <ul className="divide-y divide-gray-200">
              {messages.length > 0 ? (
                messages.map((message: any) => (
                  <li key={message.id}>
                    <div className="px-4 py-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-skyblue truncate">{message.name}</p>
                        <div className="ml-2 flex-shrink-0 flex">
                          <p className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${message.read ? 'bg-gray-100 text-gray-800' : 'bg-yellow-100 text-yellow-800'}`}>
                            {message.read ? 'Leído' : 'No leído'}
                          </p>
                        </div>
                      </div>
                      <div className="mt-2 sm:flex sm:justify-between">
                        <div className="sm:flex flex-col">
                          <p className="text-sm text-gray-500">{message.email}</p>
                          <p className="mt-2 text-sm text-gray-700">{message.message}</p>
                        </div>
                        <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                          <p>
                            {new Date(message.created_at).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                ))
              ) : (
                <li className="px-4 py-4 sm:px-6 text-center text-gray-500">
                  No hay mensajes disponibles
                </li>
              )}
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Barra superior */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Panel de Administración</h1>
          <div className="flex items-center">
            <span className="text-sm text-gray-700 mr-4">
              Bienvenido, {user?.username}
            </span>
            <button
              onClick={handleLogout}
              className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-skyblue hover:bg-skyblue-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-skyblue"
            >
              <LogOut className="h-4 w-4 mr-1" />
              Cerrar sesión
            </button>
          </div>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Barra lateral */}
          <div className="w-full md:w-64 bg-white shadow rounded-lg p-4">
            <nav className="space-y-1">
              <button
                onClick={() => setActiveTab('services')}
                className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                  activeTab === 'services'
                    ? 'bg-skyblue text-white'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Settings className="h-5 w-5 mr-2" />
                Servicios
              </button>
              <button
                onClick={() => setActiveTab('stats')}
                className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                  activeTab === 'stats'
                    ? 'bg-skyblue text-white'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <BarChart2 className="h-5 w-5 mr-2" />
                Estadísticas
              </button>
              <button
                onClick={() => setActiveTab('messages')}
                className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                  activeTab === 'messages'
                    ? 'bg-skyblue text-white'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <MessageSquare className="h-5 w-5 mr-2" />
                Mensajes
                {messages.filter((m: any) => !m.read).length > 0 && (
                  <span className="ml-auto inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                    {messages.filter((m: any) => !m.read).length}
                  </span>
                )}
              </button>
            </nav>
          </div>

          {/* Área de contenido */}
          <div className="flex-1">
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                {activeTab === 'services' && 'Gestión de Servicios'}
                {activeTab === 'stats' && 'Gestión de Estadísticas'}
                {activeTab === 'messages' && 'Mensajes de Contacto'}
              </h2>
              {renderContent()}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard; 