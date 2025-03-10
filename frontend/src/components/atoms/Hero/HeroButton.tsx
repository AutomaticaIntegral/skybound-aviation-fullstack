import React, { ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface HeroButtonProps {
  text: string;
  variant?: 'primary' | 'outline';
  icon?: boolean;
}

const HeroButton: React.FC<HeroButtonProps> = ({ text, variant = 'primary', icon = false }) => {
  if (variant === 'primary') {
    return (
      <Button 
        className="bg-skyblue hover:bg-skyblue-dark text-white px-6 sm:px-8 py-6 sm:py-7 text-base sm:text-lg rounded-md shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 group w-full sm:w-auto"
      >
        {text}
        {icon && <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />}
      </Button>
    );
  } else {
    return (
      <Button 
        variant="outline" 
        className="border-2 border-skyblue text-skyblue backdrop-blur-sm bg-white/5 hover:bg-white/20 hover:text-white px-6 sm:px-8 py-6 sm:py-7 text-base sm:text-lg rounded-md shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 w-full sm:w-auto"
      >
        {text}
      </Button>
    );
  }
};

export default HeroButton; 