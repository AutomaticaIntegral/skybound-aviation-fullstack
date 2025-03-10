import React, { ReactNode } from 'react';

interface ContactHeadingProps {
  children: ReactNode;
  className?: string;
}

const ContactHeading = ({ 
  children,
  className = '' 
}: ContactHeadingProps) => {
  const baseClasses = "text-2xl font-bold mb-4";
  const combinedClasses = `${baseClasses} ${className}`;
  
  return (
    <h3 className={combinedClasses}>{children}</h3>
  );
};

export default ContactHeading; 