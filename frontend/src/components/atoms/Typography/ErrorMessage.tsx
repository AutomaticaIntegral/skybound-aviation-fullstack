import React, { ReactNode } from 'react';

interface ErrorMessageProps {
  children: ReactNode;
  className?: string;
}

const ErrorMessage = ({ 
  children, 
  className = ''
}: ErrorMessageProps) => {
  const baseClasses = 'text-sm text-red-500 mt-1';
  const combinedClasses = `${baseClasses} ${className}`;
  
  return <p className={combinedClasses}>{children}</p>;
};

export default ErrorMessage; 