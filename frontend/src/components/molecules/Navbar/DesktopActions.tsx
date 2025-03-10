import React from 'react';
import { ContactButton } from '@/components/atoms/Navbar';
import LanguageSwitcher from '@/components/LanguageSwitcher';

interface DesktopActionsProps {
  contactButtonText: string;
}

const DesktopActions: React.FC<DesktopActionsProps> = ({ contactButtonText }) => {
  return (
    <div className="hidden md:flex items-center space-x-4">
      <LanguageSwitcher />
      <ContactButton text={contactButtonText} />
    </div>
  );
};

export default DesktopActions; 