
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/components/ui/use-toast';
import AdminSidebar from '@/components/AdminSidebar';
import AdminTopbar from '@/components/AdminTopbar';
import AdminStats from '@/components/AdminStats';
import AdminLogin from '@/components/AdminLogin';
import AdminContentEditor from '@/components/AdminContentEditor';

const Admin = () => {
  const { language, setLanguage, translations, updateTranslations, t } = useLanguage();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [editableTranslations, setEditableTranslations] = useState({});
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const auth = localStorage.getItem('admin_auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
    
    setEditableTranslations(translations);
  }, [translations]);

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('admin_auth');
  };

  const handleLanguageChange = (value: string) => {
    setLanguage(value as 'es' | 'en' | 'ca');
    setEditableTranslations(translations);
  };

  const saveChanges = () => {
    updateTranslations(editableTranslations);
    toast({
      title: t('admin.success'),
      duration: 3000,
    });
  };

  if (!isAuthenticated) {
    return <AdminLogin onLoginSuccess={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="admin-layout">
      <AdminSidebar 
        collapsed={sidebarCollapsed} 
        toggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)} 
        onLogout={handleLogout}
      />
      
      <div className="admin-content">
        <AdminTopbar 
          username="Administrator" 
          language={language} 
          onLanguageChange={handleLanguageChange} 
        />
        
        <div className="p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-charcoal-dark mb-2">{t('admin.subtitle')}</h1>
            <p className="text-muted-foreground">
              {t('admin.contentManagement')} - {language.toUpperCase()}
            </p>
          </div>
          
          <AdminStats />
          
          <AdminContentEditor 
            translations={translations}
            editableTranslations={editableTranslations}
            setEditableTranslations={setEditableTranslations}
            onSave={saveChanges}
          />
        </div>
      </div>
    </div>
  );
};

export default Admin;
