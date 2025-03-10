import React, { useState, useEffect } from 'react';
import { Logo, MenuButton } from '@/components/atoms/Navbar';
import { DesktopNav, MobileNav, DesktopActions } from '@/components/molecules/Navbar';
import { useLanguage } from '@/contexts/LanguageContext';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  // Cerrar el menú móvil cuando se cambia el tamaño de la ventana a desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  // Evitar el desplazamiento cuando el menú móvil está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { href: '#home', text: t('navbar.home') },
    { href: '#about', text: t('navbar.about') },
    { href: '#services', text: t('navbar.services') },
    { href: '#contact', text: t('navbar.contact') }
  ];

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Logo text="Olmo Aviation" />

          {/* Desktop Navigation */}
          <DesktopNav items={navItems} />

          {/* Language Switcher + Contact Button - Desktop */}
          <DesktopActions contactButtonText={t('navbar.requestInfo')} />

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <MenuButton isOpen={isMenuOpen} onClick={toggleMenu} />
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileNav 
        items={navItems} 
        isOpen={isMenuOpen} 
        contactButtonText={t('navbar.requestInfo')} 
        onLinkClick={() => setIsMenuOpen(false)} 
      />
    </header>
  );
};

export default Navbar; 