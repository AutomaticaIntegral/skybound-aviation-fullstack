import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatIconProps {
  icon: LucideIcon;
}

const StatIcon: React.FC<StatIconProps> = ({ icon: Icon }) => {
  return (
    <div className="mx-auto w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6 shadow-lg">
      <Icon className="h-8 w-8" />
    </div>
  );
};

export default StatIcon; 