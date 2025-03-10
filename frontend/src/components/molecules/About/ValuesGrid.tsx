import React from 'react';
import { ValueCard } from '@/components/molecules/About';
import { Shield, Users, Target, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface ValuesGridProps {
  className?: string;
}

const ValuesGrid = ({ className = '' }: ValuesGridProps) => {
  const { t } = useLanguage();
  
  const baseClasses = "grid grid-cols-2 gap-4 sm:gap-8 mt-6 sm:mt-10";
  const combinedClasses = `${baseClasses} ${className}`;
  
  return (
    <div className={combinedClasses}>
      <ValueCard 
        icon={<Shield className="h-6 w-6 sm:h-8 sm:w-8" />} 
        title={t('about.values.safety')} 
      />
      <ValueCard 
        icon={<Users className="h-6 w-6 sm:h-8 sm:w-8" />} 
        title={t('about.values.team')} 
      />
      <ValueCard 
        icon={<Target className="h-6 w-6 sm:h-8 sm:w-8" />} 
        title={t('about.values.precision')} 
      />
      <ValueCard 
        icon={<Award className="h-6 w-6 sm:h-8 sm:w-8" />} 
        title={t('about.values.excellence')} 
      />
    </div>
  );
};

export default ValuesGrid; 