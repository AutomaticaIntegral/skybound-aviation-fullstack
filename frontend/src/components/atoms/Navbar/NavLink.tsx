import React from 'react';

interface NavLinkProps {
  href: string;
  text: string;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, text, onClick }) => {
  return (
    <a 
      href={href} 
      className="text-charcoal hover:text-skyblue font-medium transition-colors"
      onClick={onClick}
    >
      {text}
    </a>
  );
};

export default NavLink; 