import React from 'react';
import { Menu, X } from 'lucide-react';

interface MenuToggleProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

const MenuToggle = ({ 
  isOpen, 
  onClick,
  className = '' 
}: MenuToggleProps) => {
  const baseClasses = "text-charcoal p-2 relative z-50";
  const combinedClasses = `${baseClasses} ${className}`;
  
  return (
    <button 
      className={combinedClasses}
      onClick={onClick}
      aria-label="Toggle menu"
    >
      {isOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  );
};

export default MenuToggle; 