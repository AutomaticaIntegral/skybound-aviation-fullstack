import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceIconProps {
  icon: LucideIcon;
}

const ServiceIcon: React.FC<ServiceIconProps> = ({ icon: Icon }) => {
  return (
    <div className="service-icon-container mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
      <Icon className="h-6 w-6 group-hover:stroke-[2.5px] transition-all" />
    </div>
  );
};

export default ServiceIcon; 