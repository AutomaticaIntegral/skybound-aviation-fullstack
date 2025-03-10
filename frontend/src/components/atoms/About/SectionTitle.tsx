import React, { ReactNode } from 'react';

interface SectionTitleProps {
  children: ReactNode;
  className?: string;
}

const SectionTitle = ({ 
  children,
  className = '' 
}: SectionTitleProps) => {
  const baseClasses = "section-title";
  const combinedClasses = `${baseClasses} ${className}`;
  
  return (
    <h2 className={combinedClasses}>{children}</h2>
  );
};

export default SectionTitle; 