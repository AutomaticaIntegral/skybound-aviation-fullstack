import React from 'react';

interface FooterHeadingProps {
  text: string;
}

const FooterHeading: React.FC<FooterHeadingProps> = ({ text }) => {
  return (
    <h4 className="text-lg font-bold mb-6 text-white/90">{text}</h4>
  );
};

export default FooterHeading; 