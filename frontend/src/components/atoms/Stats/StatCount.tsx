import React from 'react';

interface StatCountProps {
  count: number;
  isVisible: boolean;
  animatedCount: number;
  showPlus?: boolean;
}

const StatCount: React.FC<StatCountProps> = ({ count, isVisible, animatedCount, showPlus = false }) => {
  return (
    <div className="text-4xl md:text-5xl font-bold mb-3">
      {isVisible ? animatedCount : 0}{showPlus ? "+" : ""}
    </div>
  );
};

export default StatCount; 