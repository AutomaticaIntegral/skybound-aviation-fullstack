import React, { ReactNode } from 'react';

interface ParagraphProps {
  children: ReactNode;
  className?: string;
  size?: 'small' | 'medium' | 'large';
  muted?: boolean;
  centered?: boolean;
}

const Paragraph = ({ 
  children, 
  className = '', 
  size = 'medium',
  muted = false,
  centered = false
}: ParagraphProps) => {
  const baseClasses = 'leading-7';
  const centeredClass = centered ? 'text-center' : '';
  const mutedClass = muted ? 'text-charcoal-light' : '';
  
  let sizeClasses = '';
  
  switch (size) {
    case 'small':
      sizeClasses = 'text-sm sm:text-base';
      break;
    case 'medium':
      sizeClasses = 'text-base sm:text-lg';
      break;
    case 'large':
      sizeClasses = 'text-lg sm:text-xl md:text-2xl';
      break;
  }
  
  const combinedClasses = `${baseClasses} ${sizeClasses} ${centeredClass} ${mutedClass} ${className}`;
  
  return <p className={combinedClasses}>{children}</p>;
};

export default Paragraph; 