import React, { ReactNode } from 'react';

interface ValueIconProps {
  icon: ReactNode;
  className?: string;
}

const ValueIcon = ({ 
  icon,
  className = '' 
}: ValueIconProps) => {
  const baseClasses = "w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-skyblue to-skyblue-light text-white flex items-center justify-center mb-3 sm:mb-4 shadow-md";
  const combinedClasses = `${baseClasses} ${className}`;
  
  return (
    <div className={combinedClasses}>
      {icon}
    </div>
  );
};

export default ValueIcon; 