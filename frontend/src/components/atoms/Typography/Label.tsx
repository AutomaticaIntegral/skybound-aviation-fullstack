import React, { ReactNode } from 'react';

interface LabelProps {
  children: ReactNode;
  htmlFor: string;
  className?: string;
  required?: boolean;
}

const Label = ({ 
  children, 
  htmlFor, 
  className = '',
  required = false
}: LabelProps) => {
  const baseClasses = 'block text-sm font-medium text-charcoal mb-1';
  const combinedClasses = `${baseClasses} ${className}`;
  
  return (
    <label htmlFor={htmlFor} className={combinedClasses}>
      {children}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
  );
};

export default Label; 