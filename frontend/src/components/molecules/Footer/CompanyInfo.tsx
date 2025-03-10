import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { FooterLogo, FooterDescription, SocialIcon } from '@/components/atoms/Footer';

interface CompanyInfoProps {
  logoText: string;
  description: string;
}

const CompanyInfo: React.FC<CompanyInfoProps> = ({ logoText, description }) => {
  return (
    <div className="col-span-1 md:col-span-5">
      <FooterLogo text={logoText} />
      <FooterDescription text={description} />
      <div className="flex space-x-4">
        <SocialIcon icon={Facebook} href="#" />
        <SocialIcon icon={Twitter} href="#" />
        <SocialIcon icon={Linkedin} href="#" />
        <SocialIcon icon={Instagram} href="#" />
      </div>
    </div>
  );
};

export default CompanyInfo; 