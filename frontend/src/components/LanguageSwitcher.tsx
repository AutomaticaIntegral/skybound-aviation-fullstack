
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe, Flag } from 'lucide-react';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const languageOptions = [
    { code: 'es', label: 'Español', emoji: '🇪🇸' },
    { code: 'en', label: 'English', emoji: '🇬🇧' },
    { code: 'ca', label: 'Català', emoji: '🏴' }
  ];

  const currentLanguage = languageOptions.find(option => option.code === language);

  return (
    <div className="flex items-center gap-2">
      <Globe className="h-4 w-4" />
      <Select value={language} onValueChange={(value) => setLanguage(value as 'es' | 'en' | 'ca')}>
        <SelectTrigger className="w-[130px] h-8 text-sm">
          <SelectValue>
            <div className="flex items-center gap-2">
              <span className="text-base">{currentLanguage?.emoji}</span>
              <span>{currentLanguage?.label}</span>
            </div>
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {languageOptions.map((option) => (
            <SelectItem key={option.code} value={option.code}>
              <div className="flex items-center gap-2">
                <span className="text-base">{option.emoji}</span>
                <span>{option.label}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSwitcher;
