import React from 'react';

interface SectionSubtitleProps {
  subtitle: string;
}

const SectionSubtitle: React.FC<SectionSubtitleProps> = ({ subtitle }) => {
  return (
    <p className="section-subtitle leading-relaxed">
      {subtitle}
    </p>
  );
};

export default SectionSubtitle; 