import React from 'react';
import { ValuesGrid } from '@/components/molecules/About';
import { useLanguage } from '@/contexts/LanguageContext';

interface MissionContentProps {
  className?: string;
}

const MissionContent = ({ className = '' }: MissionContentProps) => {
  const { t } = useLanguage();
  
  const baseClasses = "space-y-4 sm:space-y-6 animate-slide-in-bottom";
  const combinedClasses = `${baseClasses} ${className}`;
  
  return (
    <div className={combinedClasses} style={{ animationDelay: "0.2s" }}>
      <h3 className="text-2xl font-bold mb-2 sm:mb-4 text-charcoal-dark">{t('about.mission')}</h3>
      <p className="mb-3 sm:mb-4 text-base sm:text-lg">
        {t('about.paragraph1')}
      </p>
      <p className="mb-4 sm:mb-6 text-base sm:text-lg">
        {t('about.paragraph2')}
      </p>
      
      <ValuesGrid />
    </div>
  );
};

export default MissionContent; 