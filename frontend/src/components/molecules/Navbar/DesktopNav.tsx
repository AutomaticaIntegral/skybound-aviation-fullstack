import React from 'react';
import { NavLink } from '@/components/atoms/Navbar';

interface NavItem {
  href: string;
  text: string;
}

interface DesktopNavProps {
  items: NavItem[];
}

const DesktopNav: React.FC<DesktopNavProps> = ({ items }) => {
  return (
    <nav className="hidden md:flex space-x-10">
      {items.map((item, index) => (
        <NavLink 
          key={index} 
          href={item.href} 
          text={item.text} 
        />
      ))}
    </nav>
  );
};

export default DesktopNav; 