import React from 'react';
import { CardDescription } from '@/components/ui/card';

interface ServiceDescriptionProps {
  description: string;
}

const ServiceDescription: React.FC<ServiceDescriptionProps> = ({ description }) => {
  return (
    <CardDescription className="text-base text-charcoal leading-relaxed">
      {description}
    </CardDescription>
  );
};

export default ServiceDescription; 