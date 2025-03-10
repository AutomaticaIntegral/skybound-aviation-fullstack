import React from 'react';
import { ContactInfo } from '@/components/molecules/Contact';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface ContactInfoListProps {
  className?: string;
}

const ContactInfoList = ({ className = '' }: ContactInfoListProps) => {
  const { t } = useLanguage();
  
  const baseClasses = "space-y-4 mb-8";
  const combinedClasses = `${baseClasses} ${className}`;
  
  return (
    <div className={combinedClasses}>
      <ContactInfo 
        icon={<Phone className="h-5 w-5 text-skyblue" />}
        title={t('contact.phone')}
        detail="+34 932 983 700"
      />
      
      <ContactInfo 
        icon={<Mail className="h-5 w-5 text-skyblue" />}
        title={t('contact.email')}
        detail="info@olmoaviation.com"
      />
      
      <ContactInfo 
        icon={<MapPin className="h-5 w-5 text-skyblue" />}
        title={t('contact.address')}
        detail="Aeropuerto de Barcelona-El Prat, 08820 El Prat de Llobregat, Barcelona"
      />
    </div>
  );
};

export default ContactInfoList; 