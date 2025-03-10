import React, { ReactNode } from 'react';
import { ContactIcon } from '@/components/atoms/Contact';

interface ContactInfoProps {
  icon: ReactNode;
  title: string;
  detail: string;
  className?: string;
}

const ContactInfo = ({ 
  icon,
  title,
  detail,
  className = '' 
}: ContactInfoProps) => {
  const baseClasses = "flex items-center";
  const combinedClasses = `${baseClasses} ${className}`;
  
  return (
    <div className={combinedClasses}>
      <ContactIcon icon={icon} />
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-charcoal-light">{detail}</p>
      </div>
    </div>
  );
};

export default ContactInfo; 