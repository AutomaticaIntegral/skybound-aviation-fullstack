import React, { ChangeEvent } from 'react';
import { TextArea } from '@/components/atoms/Input';
import { Label, ErrorMessage } from '@/components/atoms/Typography';

interface TextAreaFieldProps {
  id: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
  disabled?: boolean;
  rows?: number;
}

const TextAreaField = ({
  id,
  label,
  placeholder,
  required = false,
  error,
  value,
  onChange,
  className = '',
  disabled = false,
  rows
}: TextAreaFieldProps) => {
  return (
    <div className={`space-y-1 ${className}`}>
      <Label htmlFor={id} required={required}>{label}</Label>
      <TextArea
        id={id}
        name={id}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        hasError={!!error}
        disabled={disabled}
        rows={rows}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </div>
  );
};

export default TextAreaField; 