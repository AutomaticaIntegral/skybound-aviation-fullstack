import React, { ChangeEvent } from 'react';
import { TextInput } from '@/components/atoms/Input';
import { Label, ErrorMessage } from '@/components/atoms/Typography';

interface FormFieldProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  disabled?: boolean;
}

const FormField = ({
  id,
  label,
  type = 'text',
  placeholder,
  required = false,
  error,
  value,
  onChange,
  className = '',
  disabled = false
}: FormFieldProps) => {
  return (
    <div className={`space-y-1 ${className}`}>
      <Label htmlFor={id} required={required}>{label}</Label>
      <TextInput
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        hasError={!!error}
        disabled={disabled}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </div>
  );
};

export default FormField; 