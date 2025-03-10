import React from 'react';
import { NavLink } from '@/components/atoms/Navigation';
import { useLanguage } from '@/contexts/LanguageContext';

interface DesktopNavProps {
  className?: string;
}

const DesktopNav = ({ className = '' }: DesktopNavProps) => {
  const { t } = useLanguage();
  
  const baseClasses = "hidden md:flex space-x-10";
  const combinedClasses = `${baseClasses} ${className}`;
  
  return (
    <nav className={combinedClasses}>
      <NavLink href="#home">
        {t('navbar.home')}
      </NavLink>
      <NavLink href="#about">
        {t('navbar.about')}
      </NavLink>
      <NavLink href="#services">
        {t('navbar.services')}
      </NavLink>
      <NavLink href="#contact">
        {t('navbar.contact')}
      </NavLink>
    </nav>
  );
};

export default DesktopNav; 