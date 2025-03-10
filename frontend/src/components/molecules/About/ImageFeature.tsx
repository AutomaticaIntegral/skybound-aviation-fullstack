import React from 'react';
import { FeatureImage, InfoBox } from '@/components/atoms/About';
import { useLanguage } from '@/contexts/LanguageContext';

interface ImageFeatureProps {
  imageSrc: string;
  imageAlt: string;
  className?: string;
}

const ImageFeature = ({ 
  imageSrc,
  imageAlt,
  className = '' 
}: ImageFeatureProps) => {
  const { t } = useLanguage();
  
  const baseClasses = "relative animate-slide-in-bottom";
  const combinedClasses = `${baseClasses} ${className}`;
  
  return (
    <div className={combinedClasses} style={{ animationDelay: "0.4s" }}>
      <FeatureImage 
        src={imageSrc} 
        alt={imageAlt} 
      />
      <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 max-w-[80%] sm:max-w-xs">
        <InfoBox 
          title={t('about.yearsExperience')}
          description={t('about.experienceText')}
        />
      </div>
    </div>
  );
};

export default ImageFeature; 