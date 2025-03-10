import React from 'react';

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <h2 className="section-title text-charcoal tracking-wide">
      {title}
    </h2>
  );
};

export default SectionTitle; 