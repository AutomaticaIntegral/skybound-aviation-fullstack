import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  text: string;
  className?: string;
}

const Logo = ({ 
  text, 
  className = '' 
}: LogoProps) => {
  const baseClasses = "text-2xl font-bold text-skyblue";
  const combinedClasses = `${baseClasses} ${className}`;
  
  return (
    <Link to="/" className="flex items-center">
      <span className={combinedClasses}>{text}</span>
    </Link>
  );
};

export default Logo; 