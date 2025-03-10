import React from 'react';
import { SectionTitle, SectionSubtitle } from '@/components/atoms/About';
import { ContactInfoList, ContactIntro } from '@/components/molecules/Contact';
import ContactForm from '@/components/organisms/ContactForm';
import BarcelonaMap from '@/components/BarcelonaMap';
import { useLanguage } from '@/contexts/LanguageContext';

const ContactSection = () => {
  const { t } = useLanguage();
  
  return (
    <section id="contact" className="container-section">
      <SectionTitle>{t('contact.title')}</SectionTitle>
      <SectionSubtitle>{t('contact.subtitle')}</SectionSubtitle>
      
      <div className="grid md:grid-cols-2 gap-12 mt-12">
        {/* Columna izquierda - Información de contacto y mapa */}
        <div className="flex flex-col justify-between">
          <ContactInfoList />
          
          {/* Mapa del Aeropuerto de Barcelona */}
          <div className="mt-auto">
            <BarcelonaMap />
          </div>
        </div>
        
        {/* Columna derecha - Título, descripción y formulario */}
        <div>
          <ContactIntro />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 