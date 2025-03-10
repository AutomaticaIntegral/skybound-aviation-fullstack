import React from 'react';
import { SectionTitle, SectionSubtitle } from '@/components/atoms/About';
import { MissionContent, ImageFeature } from '@/components/molecules/About';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutSection = () => {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="container-section bg-gradient-to-b from-white to-gray-50 w-full">
      <SectionTitle>{t('about.title')}</SectionTitle>
      <SectionSubtitle>{t('about.subtitle')}</SectionSubtitle>
      
      <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center mt-8 sm:mt-12 w-full">
        <MissionContent />
        
        <ImageFeature 
          imageSrc="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
          imageAlt="Aerospace engineering team"
          className="mt-8 sm:mt-0"
        />
      </div>
    </section>
  );
};

export default AboutSection; 