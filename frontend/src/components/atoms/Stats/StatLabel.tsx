import React from 'react';

interface StatLabelProps {
  label: string;
}

const StatLabel: React.FC<StatLabelProps> = ({ label }) => {
  return (
    <div className="text-white/90 text-lg font-medium">
      {label}
    </div>
  );
};

export default StatLabel; 