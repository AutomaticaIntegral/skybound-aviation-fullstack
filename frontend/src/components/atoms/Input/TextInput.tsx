import React, { ChangeEvent } from 'react';
import { Input } from '@/components/ui/input';

interface TextInputProps {
  id: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  hasError?: boolean;
  disabled?: boolean;
}

const TextInput = ({
  id,
  name,
  type = 'text',
  placeholder,
  required = false,
  value,
  onChange,
  className = '',
  hasError = false,
  disabled = false
}: TextInputProps) => {
  const errorClasses = hasError ? 'border-red-500 focus-visible:ring-red-500' : '';
  const combinedClasses = `w-full ${errorClasses} ${className}`;
  
  return (
    <Input
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={onChange}
      className={combinedClasses}
      disabled={disabled}
    />
  );
};

export default TextInput; 