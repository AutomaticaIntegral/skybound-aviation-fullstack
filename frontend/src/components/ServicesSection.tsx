
import React from 'react';
import { 
  PlaneTakeoff, 
  Wrench, 
  BarChart, 
  Shield, 
  Cpu, 
  BookOpen 
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const ServicesSection = () => {
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
        <h2 className="section-title text-charcoal tracking-wide">{t('services.title')}</h2>
        <p className="section-subtitle leading-relaxed">
          {t('services.subtitle')}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mt-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="service-card group border border-gray-100 hover:border-skyblue/20 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl overflow-hidden"
            >
              <CardHeader className="pb-2 pt-6">
                <div className="service-icon-container mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <service.icon className="h-6 w-6 group-hover:stroke-[2.5px] transition-all" />
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-skyblue transition-colors duration-300">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-charcoal leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
