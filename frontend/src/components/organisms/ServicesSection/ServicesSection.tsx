import React from 'react';
import { 
  PlaneTakeoff, 
  Wrench, 
  BarChart, 
  Shield, 
  Cpu, 
  BookOpen 
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ServicesHeader, ServicesGrid } from '@/components/molecules/Services';

const ServicesSection: React.FC = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: PlaneTakeoff,
      title: t('services.items.aircraftDesign.title'),
      description: t('services.items.aircraftDesign.description')
    },
    {
      icon: Wrench,
      title: t('services.items.maintenance.title'),
      description: t('services.items.maintenance.description')
    },
    {
      icon: BarChart,
      title: t('services.items.performance.title'),
      description: t('services.items.performance.description')
    },
    {
      icon: Shield,
      title: t('services.items.safety.title'),
      description: t('services.items.safety.description')
    },
    {
      icon: Cpu,
      title: t('services.items.avionics.title'),
      description: t('services.items.avionics.description')
    },
    {
      icon: BookOpen,
      title: t('services.items.training.title'),
      description: t('services.items.training.description')
    }
  ];

  return (
    <section id="services" className="bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="container mx-auto px-4">
        <ServicesHeader 
          title={t('services.title')}
          subtitle={t('services.subtitle')}
        />
        <ServicesGrid services={services} />
      </div>
    </section>
  );
};

export default ServicesSection; 