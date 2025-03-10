import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';
import { ServiceIcon, ServiceTitle, ServiceDescription } from '@/components/atoms/Services';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <Card className="service-card group border border-gray-100 hover:border-skyblue/20 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl overflow-hidden">
      <CardHeader className="pb-2 pt-6">
        <ServiceIcon icon={icon} />
        <ServiceTitle title={title} />
      </CardHeader>
      <CardContent>
        <ServiceDescription description={description} />
      </CardContent>
    </Card>
  );
};

export default ServiceCard; 