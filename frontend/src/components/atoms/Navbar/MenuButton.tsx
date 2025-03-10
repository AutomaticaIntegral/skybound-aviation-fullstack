import React from 'react';
import { Menu, X } from 'lucide-react';

interface MenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({ isOpen, onClick }) => {
  return (
    <button 
      className="text-charcoal p-2 relative z-50"
      onClick={onClick}
      aria-label="Toggle menu"
    >
      {isOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  );
};

export default MenuButton; 