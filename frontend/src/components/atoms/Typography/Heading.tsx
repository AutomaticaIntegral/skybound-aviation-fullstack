import React, { ReactNode } from 'react';

interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
  className?: string;
  centered?: boolean;
}

const Heading = ({ 
  level, 
  children, 
  className = '', 
  centered = false 
}: HeadingProps) => {
  const baseClasses = 'font-montserrat font-bold tracking-tight';
  const centeredClass = centered ? 'text-center' : '';
  
  let sizeClasses = '';
  
  switch (level) {
    case 1:
      sizeClasses = 'text-4xl sm:text-5xl md:text-6xl leading-[1.1]';
      break;
    case 2:
      sizeClasses = 'text-3xl sm:text-4xl md:text-5xl leading-[1.2]';
      break;
    case 3:
      sizeClasses = 'text-2xl sm:text-3xl leading-[1.3]';
      break;
    case 4:
      sizeClasses = 'text-xl sm:text-2xl leading-[1.3]';
      break;
    case 5:
      sizeClasses = 'text-lg sm:text-xl leading-[1.4]';
      break;
    case 6:
      sizeClasses = 'text-base sm:text-lg leading-[1.4]';
      break;
  }
  
  const combinedClasses = `${baseClasses} ${sizeClasses} ${centeredClass} ${className}`;
  
  switch (level) {
    case 1:
      return <h1 className={combinedClasses}>{children}</h1>;
    case 2:
      return <h2 className={combinedClasses}>{children}</h2>;
    case 3:
      return <h3 className={combinedClasses}>{children}</h3>;
    case 4:
      return <h4 className={combinedClasses}>{children}</h4>;
    case 5:
      return <h5 className={combinedClasses}>{children}</h5>;
    case 6:
      return <h6 className={combinedClasses}>{children}</h6>;
    default:
      return <h2 className={combinedClasses}>{children}</h2>;
  }
};

export default Heading; 