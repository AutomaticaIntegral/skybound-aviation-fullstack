import React from 'react';
import { NavLink, ContactButton } from '@/components/atoms/Navbar';
import LanguageSwitcher from '@/components/LanguageSwitcher';

interface NavItem {
  href: string;
  text: string;
}

interface MobileNavProps {
  items: NavItem[];
  isOpen: boolean;
  contactButtonText: string;
  onLinkClick: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ 
  items, 
  isOpen, 
  contactButtonText, 
  onLinkClick 
}) => {
  return (
    <div 
      className={`md:hidden fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
      style={{ top: '80px', height: 'calc(100vh - 80px)' }}
    >
      <div className="container mx-auto px-4 py-6 h-full overflow-y-auto">
        <nav className="flex flex-col space-y-6">
          {items.map((item, index) => (
            <NavLink 
              key={index} 
              href={item.href} 
              text={item.text} 
              onClick={onLinkClick}
            />
          ))}
          <div className="py-4">
            <LanguageSwitcher />
          </div>
          <ContactButton 
            text={contactButtonText} 
            onClick={onLinkClick} 
            fullWidth={true}
          />
        </nav>
      </div>
    </div>
  );
};

export default MobileNav; 