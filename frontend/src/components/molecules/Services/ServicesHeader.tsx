import React from 'react';
import { SectionTitle, SectionSubtitle } from '@/components/atoms/Services';

interface ServicesHeaderProps {
  title: string;
  subtitle: string;
}

const ServicesHeader: React.FC<ServicesHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12">
      <SectionTitle title={title} />
      <SectionSubtitle subtitle={subtitle} />
    </div>
  );
};

export default ServicesHeader; 