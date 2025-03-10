import React from 'react';
import { CardTitle } from '@/components/ui/card';

interface ServiceTitleProps {
  title: string;
}

const ServiceTitle: React.FC<ServiceTitleProps> = ({ title }) => {
  return (
    <CardTitle className="text-xl font-bold group-hover:text-skyblue transition-colors duration-300">
      {title}
    </CardTitle>
  );
};

export default ServiceTitle; 