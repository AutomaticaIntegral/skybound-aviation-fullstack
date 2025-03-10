import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        <h1 className="text-9xl font-extrabold text-skyblue">404</h1>
        <h2 className="mt-4 text-3xl font-bold text-gray-900">Página no encontrada</h2>
        <p className="mt-2 text-lg text-gray-600">
          Lo sentimos, la página que estás buscando no existe o ha sido movida.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-skyblue hover:bg-skyblue-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-skyblue"
          >
            <Home className="h-5 w-5 mr-2" />
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
