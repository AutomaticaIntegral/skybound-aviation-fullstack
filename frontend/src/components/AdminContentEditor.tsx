
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Save, FileText, Home, Layout } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface AdminContentEditorProps {
  translations: any;
  editableTranslations: any;
  setEditableTranslations: (translations: any) => void;
  onSave: () => void;
}

const AdminContentEditor: React.FC<AdminContentEditorProps> = ({ 
  translations, 
  editableTranslations, 
  setEditableTranslations, 
  onSave 
}) => {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = React.useState('hero');

  const handleInputChange = (key: string, value: string) => {
    const keys = key.split('.');
    let newTranslations = { ...editableTranslations };
    let current = newTranslations;
    
    for (let i = 0; i < keys.length - 1; i++) {
      if (!current[keys[i]]) current[keys[i]] = {};
      current = current[keys[i]];
    }
    
    current[keys[keys.length - 1]] = value;
    setEditableTranslations(newTranslations);
  };

  const renderEditableFields = (section: string, prefix: string) => {
    let sectionData = translations[section];
    if (!sectionData) return null;
    
    return renderFieldsRecursive(sectionData, prefix || section);
  };

  const renderFieldsRecursive = (obj: any, prefix: string) => {
    return Object.entries(obj).map(([key, value]) => {
      const fullKey = `${prefix}.${key}`;
      
      if (typeof value === 'object' && value !== null) {
        return (
          <div key={fullKey} className="mt-4">
            <h3 className="font-semibold text-lg mb-2 text-charcoal">{key}</h3>
            <div className="pl-4">
              {renderFieldsRecursive(value, fullKey)}
            </div>
          </div>
        );
      }
      
      return (
        <div key={fullKey} className="mb-4">
          <label className="block text-sm font-medium text-charcoal-dark mb-1">
            {key}
          </label>
          {(value as string).length > 80 ? (
            <Textarea
              value={getNestedValue(editableTranslations, fullKey)}
              onChange={(e) => handleInputChange(fullKey, e.target.value)}
              className="w-full"
            />
          ) : (
            <Input
              value={getNestedValue(editableTranslations, fullKey)}
              onChange={(e) => handleInputChange(fullKey, e.target.value)}
              className="w-full"
            />
          )}
        </div>
      );
    });
  };

  const getNestedValue = (obj: any, path: string) => {
    const keys = path.split('.');
    let result = obj;
    
    for (const key of keys) {
      if (result && result[key] !== undefined) {
        result = result[key];
      } else {
        return '';
      }
    }
    
    return result;
  };

  return (
    <Card>
      <CardHeader className="border-b">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" /> {t('admin.contentEditor')}
            </CardTitle>
            <CardDescription>
              {t('admin.contentEditorDescription')}
            </CardDescription>
          </div>
          <Button onClick={onSave} className="bg-skyblue hover:bg-skyblue-dark">
            <Save className="mr-2 h-4 w-4" /> {t('admin.save')}
          </Button>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <Tabs defaultValue="hero" onValueChange={setActiveSection} className="mt-4">
          <TabsList className="grid grid-cols-6 mb-8">
            <TabsTrigger value="hero" className="flex items-center gap-2">
              <Home className="h-4 w-4" /> Hero
            </TabsTrigger>
            <TabsTrigger value="about" className="flex items-center gap-2">
              <Layout className="h-4 w-4" /> About
            </TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="stats">Stats</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
            <TabsTrigger value="footer">Footer</TabsTrigger>
          </TabsList>
          
          <TabsContent value="hero" className="space-y-4">
            {renderEditableFields('hero', 'hero')}
          </TabsContent>
          
          <TabsContent value="about" className="space-y-4">
            {renderEditableFields('about', 'about')}
          </TabsContent>
          
          <TabsContent value="services" className="space-y-4">
            {renderEditableFields('services', 'services')}
          </TabsContent>
          
          <TabsContent value="stats" className="space-y-4">
            {renderEditableFields('stats', 'stats')}
          </TabsContent>
          
          <TabsContent value="contact" className="space-y-4">
            {renderEditableFields('contact', 'contact')}
          </TabsContent>
          
          <TabsContent value="footer" className="space-y-4">
            {renderEditableFields('footer', 'footer')}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default AdminContentEditor;
