import React from 'react';
import MainLayout from '@/components/templates/MainLayout';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import StatsSection from '@/components/StatsSection';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';
import { useLanguage } from '@/contexts/LanguageContext';

const HomePage = () => {
  const { t } = useLanguage();
  
  return (
    <MainLayout 
      title={t('meta.title')} 
      description={t('meta.description')}
    >
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <ServicesSection />
      <ContactSection />
    </MainLayout>
  );
};

export default HomePage; 