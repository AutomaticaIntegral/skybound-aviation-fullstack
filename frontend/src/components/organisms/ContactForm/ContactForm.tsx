import React, { useState } from 'react';
import { FormField, TextAreaField } from '@/components/molecules/FormField';
import { PrimaryButton } from '@/components/atoms/Button';
import { Send } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from '@/components/ui/use-toast';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const ContactForm = () => {
  const { t } = useLanguage();
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };
  
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = t('contact.form.errors.nameRequired');
    }
    
    if (!formData.email.trim()) {
      newErrors.email = t('contact.form.errors.emailRequired');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('contact.form.errors.emailInvalid');
    }
    
    if (!formData.message.trim()) {
      newErrors.message = t('contact.form.errors.messageRequired');
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // In a real implementation, form data would be sent to a backend service
      console.log("Form submitted with data:", formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show success message
      toast({
        title: t('contact.form.submitSuccess'),
        description: t('contact.form.submitSuccessDetail'),
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: t('contact.form.submitError'),
        description: t('contact.form.submitErrorDetail'),
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <FormField
        id="name"
        label={t('contact.form.fullName')}
        placeholder={t('contact.form.fullName')}
        required
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
      />
      
      <FormField
        id="email"
        label={t('contact.form.emailAddress')}
        type="email"
        placeholder={t('contact.form.emailAddress')}
        required
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
      />
      
      <FormField
        id="phone"
        label={t('contact.form.phoneNumber')}
        placeholder={t('contact.form.phoneNumber')}
        value={formData.phone}
        onChange={handleChange}
        error={errors.phone}
      />
      
      <TextAreaField
        id="message"
        label={t('contact.form.message')}
        placeholder={t('contact.form.messageDetails')}
        required
        value={formData.message}
        onChange={handleChange}
        error={errors.message}
      />
      
      <PrimaryButton withIcon fullWidthOnMobile disabled={isSubmitting}>
        {isSubmitting ? t('contact.form.sending') : t('contact.form.sendMessage')}
        <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </PrimaryButton>
    </form>
  );
};

export default ContactForm; 