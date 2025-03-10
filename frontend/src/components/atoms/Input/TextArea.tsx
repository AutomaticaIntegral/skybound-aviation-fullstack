import React, { ChangeEvent } from 'react';
import { Textarea } from '@/components/ui/textarea';

interface TextAreaProps {
  id: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
  hasError?: boolean;
  disabled?: boolean;
  rows?: number;
}

const TextArea = ({
  id,
  name,
  placeholder,
  required = false,
  value,
  onChange,
  className = '',
  hasError = false,
  disabled = false,
  rows = 5
}: TextAreaProps) => {
  const errorClasses = hasError ? 'border-red-500 focus-visible:ring-red-500' : '';
  const combinedClasses = `w-full min-h-[150px] ${errorClasses} ${className}`;
  
  return (
    <Textarea
      id={id}
      name={name}
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={onChange}
      className={combinedClasses}
      disabled={disabled}
      rows={rows}
    />
  );
};

export default TextArea; 