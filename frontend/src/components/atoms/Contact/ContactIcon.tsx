import React, { ReactNode } from 'react';

interface ContactIconProps {
  icon: ReactNode;
  className?: string;
}

const ContactIcon = ({ 
  icon,
  className = '' 
}: ContactIconProps) => {
  const baseClasses = "w-10 h-10 rounded-full bg-skyblue/10 flex items-center justify-center mr-4";
  const combinedClasses = `${baseClasses} ${className}`;
  
  return (
    <div className={combinedClasses}>
      {icon}
    </div>
  );
};

export default ContactIcon; 