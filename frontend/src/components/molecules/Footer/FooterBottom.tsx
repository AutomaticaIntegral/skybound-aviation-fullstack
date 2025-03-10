import React from 'react';
import { Copyright } from '@/components/atoms/Footer';

interface FooterBottomProps {
  copyrightText: string;
  privacyText: string;
  termsText: string;
}

const FooterBottom: React.FC<FooterBottomProps> = ({ copyrightText, privacyText, termsText }) => {
  return (
    <div className="mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
      <Copyright text={copyrightText} />
      <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-gray-400">
        <a href="#" className="hover:text-skyblue transition-colors">{privacyText}</a>
        <a href="#" className="hover:text-skyblue transition-colors">{termsText}</a>
      </div>
    </div>
  );
};

export default FooterBottom; 