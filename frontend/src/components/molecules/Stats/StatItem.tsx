import React from 'react';
import { LucideIcon } from 'lucide-react';
import { StatIcon, StatCount, StatLabel } from '@/components/atoms/Stats';

interface StatItemProps {
  icon: LucideIcon;
  count: number;
  label: string;
  isVisible: boolean;
  animatedCount: number;
}

const StatItem: React.FC<StatItemProps> = ({ icon, count, label, isVisible, animatedCount }) => {
  const showPlus = count > 100;
  
  return (
    <div className="text-center transform transition-transform duration-500 hover:scale-105">
      <StatIcon icon={icon} />
      <StatCount 
        count={count} 
        isVisible={isVisible} 
        animatedCount={animatedCount} 
        showPlus={showPlus} 
      />
      <StatLabel label={label} />
    </div>
  );
};

export default StatItem; 