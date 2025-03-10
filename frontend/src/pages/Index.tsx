import React from 'react';
import Navbar from '@/components/organisms/Navbar';
import HeroSection from '@/components/organisms/HeroSection';
import AboutSection from '@/components/organisms/AboutSection';
import ServicesSection from '@/components/organisms/ServicesSection';
import StatsSection from '@/components/organisms/StatsSection';
import ContactSection from '@/components/organisms/ContactSection';
import Footer from '@/components/organisms/Footer';
import { Helmet } from 'react-helmet';
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
      </Helmet>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <StatsSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
