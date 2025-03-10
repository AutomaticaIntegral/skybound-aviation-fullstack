import React from 'react';
import { ContactHeading } from '@/components/atoms/Contact';
import { useLanguage } from '@/contexts/LanguageContext';

interface ContactIntroProps {
  className?: string;
}

const ContactIntro = ({ className = '' }: ContactIntroProps) => {
  const { t } = useLanguage();
  
  return (
    <div className={className}>
      <ContactHeading>{t('contact.getInTouch')}</ContactHeading>
      <p className="mb-6">
        {t('contact.getInTouchText')}
      </p>
    </div>
  );
};

export default ContactIntro; 