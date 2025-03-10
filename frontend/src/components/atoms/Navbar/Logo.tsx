import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  text: string;
}

const Logo: React.FC<LogoProps> = ({ text }) => {
  return (
    <Link to="/" className="flex items-center">
      <span className="text-2xl font-bold text-skyblue">{text}</span>
    </Link>
  );
};

export default Logo; 