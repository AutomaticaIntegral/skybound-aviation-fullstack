import React from 'react';
import { HeroButton } from '@/components/atoms/Hero';

interface HeroButtonsProps {
  exploreButtonText: string;
  aboutButtonText: string;
}

const HeroButtons: React.FC<HeroButtonsProps> = ({ exploreButtonText, aboutButtonText }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full">
      <HeroButton text={exploreButtonText} variant="primary" icon={true} />
      <HeroButton text={aboutButtonText} variant="outline" />
    </div>
  );
};

export default HeroButtons; 