import React from 'react';

interface CopyrightProps {
  text: string;
}

const Copyright: React.FC<CopyrightProps> = ({ text }) => {
  return (
    <p className="text-gray-400 text-sm">
      &copy; {new Date().getFullYear()} Olmo Aviation. {text}
    </p>
  );
};

export default Copyright; 