import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import axios from 'axios';

// URL base de la API
const API_URL = 'http://localhost:5000/api';

// Interfaz para el usuario
interface User {
  id: string;
  username: string;
  email: string;
  role: string;
}

// Interfaz para el contexto de autenticación
interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  isAdmin: boolean;
}

// Crear el contexto
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Hook personalizado para usar el contexto
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
};

// Proveedor del contexto
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Verificar si hay un usuario en localStorage al cargar
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        console.error('Error al parsear usuario almacenado:', e);
        localStorage.removeItem('user');
      }
    }
    setLoading(false);
  }, []);

  // Función para iniciar sesión
  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      // En un entorno real, esto sería una llamada a la API
      // Por ahora, simulamos la autenticación con credenciales hardcodeadas
      if (email === 'admin@skybound.com' && password === 'admin123') {
        const mockUser: User = {
          id: '1',
          username: 'admin',
          email: 'admin@skybound.com',
          role: 'admin'
        };
        setUser(mockUser);
        localStorage.setItem('user', JSON.stringify(mockUser));
      } else {
        throw new Error('Credenciales inválidas');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  // Función para cerrar sesión
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  // Valores del contexto
  const value = {
    user,
    loading,
    error,
    login,
    logout,
    isAuthenticated: !!user,
    isAdmin: user?.role === 'admin'
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext; 