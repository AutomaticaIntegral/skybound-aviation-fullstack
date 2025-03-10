import React from 'react';
import { LucideIcon } from 'lucide-react';
import ServiceCard from './ServiceCard';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ServicesGridProps {
  services: Service[];
}

const ServicesGrid: React.FC<ServicesGridProps> = ({ services }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mt-16">
      {services.map((service, index) => (
        <ServiceCard 
          key={index} 
          icon={service.icon}
          title={service.title}
          description={service.description}
        />
      ))}
    </div>
  );
};

export default ServicesGrid; 