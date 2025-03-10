import React from 'react';
import { CompanyInfo, QuickLinks, ContactDetails, FooterBottom } from '@/components/molecules/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  
  const quickLinks = [
    { href: '#home', text: t('navbar.home') },
    { href: '#about', text: t('navbar.about') },
    { href: '#services', text: t('navbar.services') },
    { href: '#contact', text: t('navbar.contact') },
    { href: '/admin', text: 'Admin', isRouterLink: true }
  ];

  return (
    <footer className="bg-charcoal-dark text-white">
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-gray-700/50 pb-12">
          <CompanyInfo 
            logoText="Olmo Aviation"
            description={t('footer.description')}
          />
          
          <QuickLinks 
            title={t('footer.quickLinks')}
            links={quickLinks}
          />
          
          <ContactDetails 
            title={t('footer.contactInfo')}
            address="123 Aviation Blvd, Seattle, WA 98101, USA"
            phone="+1 (555) 123-4567"
            email="info@olmoaviation.com"
          />
        </div>
        
        <FooterBottom 
          copyrightText={t('footer.rights')}
          privacyText={t('footer.privacy')}
          termsText={t('footer.terms')}
        />
      </div>
      
      <div className="w-full bg-white py-4 mt-8">
        <div className="flex justify-center">
          <img 
            src="/lovable-uploads/f6b1cb2b-4801-45ba-a80e-e892b498fa6f.png" 
            alt="Programa Kit Digital - Cofinanciado por los fondos Next Generation EU" 
            className="w-auto max-w-[800px] px-4"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer; 