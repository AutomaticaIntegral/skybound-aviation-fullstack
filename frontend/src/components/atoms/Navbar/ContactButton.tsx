import React from 'react';
import { Button } from '@/components/ui/button';

interface ContactButtonProps {
  text: string;
  onClick?: () => void;
  fullWidth?: boolean;
}

const ContactButton: React.FC<ContactButtonProps> = ({ text, onClick, fullWidth = false }) => {
  return (
    <Button 
      variant="default" 
      className={`bg-skyblue hover:bg-skyblue-dark ${fullWidth ? 'w-full py-6 text-lg' : ''}`}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default ContactButton; 