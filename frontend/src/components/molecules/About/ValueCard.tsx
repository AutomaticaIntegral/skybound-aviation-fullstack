import React, { ReactNode } from 'react';
import { ValueIcon } from '@/components/atoms/About';

interface ValueCardProps {
  icon: ReactNode;
  title: string;
  className?: string;
}

const ValueCard = ({ 
  icon,
  title,
  className = '' 
}: ValueCardProps) => {
  const baseClasses = "flex flex-col items-center text-center transform transition-all duration-500 hover:scale-105";
  const combinedClasses = `${baseClasses} ${className}`;
  
  return (
    <div className={combinedClasses}>
      <ValueIcon icon={icon} />
      <h4 className="font-bold text-base sm:text-lg">{title}</h4>
    </div>
  );
};

export default ValueCard; 