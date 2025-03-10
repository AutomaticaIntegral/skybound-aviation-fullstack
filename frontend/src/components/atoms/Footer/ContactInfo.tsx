import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ContactInfoProps {
  icon: LucideIcon;
  text: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ icon: Icon, text }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-skyblue/10 flex items-center justify-center">
        <Icon size={18} className="text-skyblue" />
      </div>
      <p className="text-gray-300">{text}</p>
    </div>
  );
};

export default ContactInfo; 