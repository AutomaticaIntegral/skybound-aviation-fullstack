import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { FooterHeading, ContactInfo } from '@/components/atoms/Footer';

interface ContactDetailsProps {
  title: string;
  address: string;
  phone: string;
  email: string;
}

const ContactDetails: React.FC<ContactDetailsProps> = ({ title, address, phone, email }) => {
  return (
    <div className="col-span-1 md:col-span-4">
      <FooterHeading text={title} />
      <div className="space-y-4">
        <ContactInfo icon={MapPin} text={address} />
        <ContactInfo icon={Phone} text={phone} />
        <ContactInfo icon={Mail} text={email} />
      </div>
    </div>
  );
};

export default ContactDetails; 