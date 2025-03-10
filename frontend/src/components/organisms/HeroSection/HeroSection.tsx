import React from 'react';
import { HeroBackground, HeroAccent } from '@/components/atoms/Hero';
import { HeroContent } from '@/components/molecules/Hero';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section id="home" className="relative h-[85vh] flex items-center overflow-hidden w-full">
      <HeroBackground />
      <HeroContent 
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
        exploreButtonText={t('hero.exploreButton')}
        aboutButtonText={t('hero.aboutButton')}
      />
      <HeroAccent />
    </section>
  );
};

export default HeroSection; 