import React from 'react';

interface FooterDescriptionProps {
  text: string;
}

const FooterDescription: React.FC<FooterDescriptionProps> = ({ text }) => {
  return (
    <p className="mb-6 text-gray-300 max-w-md leading-relaxed">
      {text}
    </p>
  );
};

export default FooterDescription; 