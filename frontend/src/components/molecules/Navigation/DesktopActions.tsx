import React from 'react';
import { PrimaryButton } from '@/components/atoms/Button';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';

interface DesktopActionsProps {
  className?: string;
}

const DesktopActions = ({ className = '' }: DesktopActionsProps) => {
  const { t } = useLanguage();
  
  const baseClasses = "hidden md:flex items-center space-x-4";
  const combinedClasses = `${baseClasses} ${className}`;
  
  return (
    <div className={combinedClasses}>
      <LanguageSwitcher />
      <PrimaryButton>
        {t('navbar.requestInfo')}
      </PrimaryButton>
    </div>
  );
};

export default DesktopActions; 