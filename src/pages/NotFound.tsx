import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center p-6 max-w-md">
        <h1 className="text-6xl font-bold text-gray-800 dark:text-gray-200 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">Page Not Found</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <div className="flex justify-center space-x-4">
          <Link 
            to="/" 
            className="btn btn-primary"
          >
            View Resume
          </Link>
          <Link 
            to="/admin" 
            className="btn btn-outline border-gray-300 dark:border-gray-700"
          >
            Go to Admin
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;