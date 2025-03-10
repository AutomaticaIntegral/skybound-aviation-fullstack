import React, { ReactNode } from 'react';

interface NavLinkProps {
  href: string;
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  isMobile?: boolean;
}

const NavLink = ({ 
  href, 
  children, 
  onClick,
  className = '',
  isMobile = false
}: NavLinkProps) => {
  const baseClasses = "text-charcoal hover:text-skyblue font-medium transition-colors";
  const mobileClasses = isMobile ? "py-2 text-lg" : "";
  const combinedClasses = `${baseClasses} ${mobileClasses} ${className}`;
  
  return (
    <a 
      href={href} 
      className={combinedClasses}
      onClick={onClick}
    >
      {children}
    </a>
  );
};

export default NavLink; 