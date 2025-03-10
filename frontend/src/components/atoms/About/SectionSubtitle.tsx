import React, { ReactNode } from 'react';

interface SectionSubtitleProps {
  children: ReactNode;
  className?: string;
}

const SectionSubtitle = ({ 
  children,
  className = '' 
}: SectionSubtitleProps) => {
  const baseClasses = "section-subtitle";
  const combinedClasses = `${baseClasses} ${className}`;
  
  return (
    <p className={combinedClasses}>{children}</p>
  );
};

export default SectionSubtitle; 