import React, { ReactNode } from 'react';
import { Button } from '@/components/ui/button';

interface SecondaryButtonProps {
  children: ReactNode;
  fullWidthOnMobile?: boolean;
  onClick?: () => void;
}

const SecondaryButton = ({ 
  children, 
  fullWidthOnMobile = true,
  onClick 
}: SecondaryButtonProps) => {
  return (
    <Button 
      variant="outline"
      onClick={onClick}
      className={`
        border-2 border-skyblue text-skyblue 
        backdrop-blur-sm bg-white/5 hover:bg-white/20 hover:text-white 
        px-6 sm:px-8 py-6 sm:py-7 text-base sm:text-lg 
        rounded-md shadow-lg hover:shadow-xl 
        transition-all duration-300 transform 
        hover:-translate-y-1 hover:scale-105
        ${fullWidthOnMobile ? 'w-full sm:w-auto' : ''}
      `}
    >
      {children}
    </Button>
  );
};

export default SecondaryButton; 