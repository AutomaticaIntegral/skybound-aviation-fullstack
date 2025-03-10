import React from 'react';
import { NavLink } from '@/components/atoms/Navigation';
import { PrimaryButton } from '@/components/atoms/Button';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';

interface MobileNavProps {
  isOpen: boolean;
  onLinkClick: () => void;
  className?: string;
}

const MobileNav = ({ 
  isOpen, 
  onLinkClick,
  className = '' 
}: MobileNavProps) => {
  const { t } = useLanguage();
  
  return (
    <div 
      className={`md:hidden fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } ${className}`}
      style={{ top: '80px', height: 'calc(100vh - 80px)' }}
    >
      <div className="container mx-auto px-4 py-6 h-full overflow-y-auto">
        <nav className="flex flex-col space-y-6">
          <NavLink 
            href="#home" 
            isMobile
            onClick={onLinkClick}
          >
            {t('navbar.home')}
          </NavLink>
          <NavLink 
            href="#about" 
            isMobile
            onClick={onLinkClick}
          >
            {t('navbar.about')}
          </NavLink>
          <NavLink 
            href="#services" 
            isMobile
            onClick={onLinkClick}
          >
            {t('navbar.services')}
          </NavLink>
          <NavLink 
            href="#contact" 
            isMobile
            onClick={onLinkClick}
          >
            {t('navbar.contact')}
          </NavLink>
          <div className="py-4">
            <LanguageSwitcher />
          </div>
          <PrimaryButton 
            fullWidthOnMobile
            onClick={onLinkClick}
          >
            {t('navbar.requestInfo')}
          </PrimaryButton>
        </nav>
      </div>
    </div>
  );
};

export default MobileNav; 