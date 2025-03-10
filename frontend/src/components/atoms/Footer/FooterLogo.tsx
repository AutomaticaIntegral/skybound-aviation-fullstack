import React from 'react';

interface FooterLogoProps {
  text: string;
}

const FooterLogo: React.FC<FooterLogoProps> = ({ text }) => {
  return (
    <h3 className="text-2xl font-bold text-skyblue mb-6">{text}</h3>
  );
};

export default FooterLogo; 