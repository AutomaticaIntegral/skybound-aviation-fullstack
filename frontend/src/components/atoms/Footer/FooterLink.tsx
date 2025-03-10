import React from 'react';

interface FooterLinkProps {
  href: string;
  text: string;
  isExternal?: boolean;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, text, isExternal = false }) => {
  if (isExternal) {
    return (
      <a 
        href={href} 
        className="text-gray-300 hover:text-skyblue transition-colors flex items-center gap-2 group"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="h-[1px] w-0 bg-skyblue group-hover:w-4 transition-all duration-300"></span>
        {text}
      </a>
    );
  }
  
  return (
    <a href={href} className="text-gray-300 hover:text-skyblue transition-colors flex items-center gap-2 group">
      <span className="h-[1px] w-0 bg-skyblue group-hover:w-4 transition-all duration-300"></span>
      {text}
    </a>
  );
};

export default FooterLink; 