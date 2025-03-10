import React from 'react';

interface HeroSubtitleProps {
  subtitle: string;
}

const HeroSubtitle: React.FC<HeroSubtitleProps> = ({ subtitle }) => {
  return (
    <p className="text-white/90 text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 font-light leading-relaxed">
      {subtitle}
    </p>
  );
};

export default HeroSubtitle; 