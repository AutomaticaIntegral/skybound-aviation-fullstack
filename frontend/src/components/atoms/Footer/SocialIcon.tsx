import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SocialIconProps {
  icon: LucideIcon;
  href: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon: Icon, href }) => {
  return (
    <a href={href} className="text-gray-400 hover:text-skyblue transition-colors transform hover:scale-110 duration-300">
      <Icon size={22} className="hover:animate-pulse" />
    </a>
  );
};

export default SocialIcon; 