import React, { ReactNode } from 'react';

interface InfoBoxProps {
  title: ReactNode;
  description: ReactNode;
  className?: string;
}

const InfoBox = ({ 
  title,
  description,
  className = '' 
}: InfoBoxProps) => {
  const baseClasses = "bg-white p-4 sm:p-6 rounded-lg shadow-lg";
  const combinedClasses = `${baseClasses} ${className}`;
  
  return (
    <div className={combinedClasses}>
      <p className="font-bold text-xl sm:text-2xl text-skyblue">{title}</p>
      <p className="text-charcoal text-sm sm:text-base">{description}</p>
    </div>
  );
};

export default InfoBox; 