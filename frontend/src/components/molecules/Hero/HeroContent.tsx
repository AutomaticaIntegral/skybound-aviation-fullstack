import React from 'react';
import { HeroTitle, HeroSubtitle } from '@/components/atoms/Hero';
import HeroButtons from './HeroButtons';

interface HeroContentProps {
  title: string;
  subtitle: string;
  exploreButtonText: string;
  aboutButtonText: string;
}

const HeroContent: React.FC<HeroContentProps> = ({ 
  title, 
  subtitle, 
  exploreButtonText, 
  aboutButtonText 
}) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 relative z-20 flex items-center justify-start h-full w-full">
      <div className="max-w-3xl backdrop-blur-xl p-6 sm:p-8 rounded-xl bg-gradient-to-r from-charcoal-dark/90 to-charcoal-dark/80 border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.4)] ring-1 ring-white/10 w-full sm:w-auto">
        <HeroTitle title={title} />
        <HeroSubtitle subtitle={subtitle} />
        <HeroButtons 
          exploreButtonText={exploreButtonText} 
          aboutButtonText={aboutButtonText} 
        />
      </div>
    </div>
  );
};

export default HeroContent; 