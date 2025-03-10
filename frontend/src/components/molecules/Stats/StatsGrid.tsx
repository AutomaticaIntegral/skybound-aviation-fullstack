import React from 'react';
import { LucideIcon } from 'lucide-react';
import StatItem from './StatItem';

interface Stat {
  icon: LucideIcon;
  count: number;
  label: string;
}

interface StatsGridProps {
  stats: Stat[];
  isVisible: boolean;
  counts: number[];
}

const StatsGrid: React.FC<StatsGridProps> = ({ stats, isVisible, counts }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <StatItem 
          key={index}
          icon={stat.icon}
          count={stat.count}
          label={stat.label}
          isVisible={isVisible}
          animatedCount={counts[index]}
        />
      ))}
    </div>
  );
};

export default StatsGrid; 