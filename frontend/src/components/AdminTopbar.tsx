
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Bell, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AdminTopbarProps {
  username: string;
  language: string;
  onLanguageChange: (value: string) => void;
}

const AdminTopbar: React.FC<AdminTopbarProps> = ({ username, language, onLanguageChange }) => {
  const { t } = useLanguage();

  return (
    <div className="admin-topbar">
      <div>
        <h2 className="text-xl font-semibold text-charcoal">
          {t('admin.dashboard')}
        </h2>
        <p className="text-sm text-muted-foreground">
          {t('admin.welcomeMessage')}, {username}
        </p>
      </div>
      
      <div className="flex items-center gap-4">
        <Select value={language} onValueChange={onLanguageChange}>
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder={t('admin.language')} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="es">🇪🇸 Español</SelectItem>
            <SelectItem value="en">🇬🇧 English</SelectItem>
            <SelectItem value="ca">🏴 Català</SelectItem>
          </SelectContent>
        </Select>
        
        <Button variant="ghost" size="icon" className="relative">
          <Bell size={20} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </Button>
        
        <div className="flex items-center gap-2">
          <div className="bg-gray-200 rounded-full p-1">
            <User size={24} className="text-gray-600" />
          </div>
          <span className="text-sm font-medium hidden md:inline">Admin</span>
        </div>
      </div>
    </div>
  );
};

export default AdminTopbar;
