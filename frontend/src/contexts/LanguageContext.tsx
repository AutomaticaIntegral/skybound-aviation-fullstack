
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import esTranslations from '../locales/es.json';
import enTranslations from '../locales/en.json';
import caTranslations from '../locales/ca.json';

type Language = 'es' | 'en' | 'ca';

type Translations = {
  [key: string]: any;
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  translations: Translations;
  updateTranslations: (newTranslations: Translations) => void;
}

const translations: Record<Language, Translations> = {
  es: esTranslations,
  en: enTranslations,
  ca: caTranslations,
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('es');
  const [currentTranslations, setCurrentTranslations] = useState<Translations>(translations[language]);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && ['es', 'en', 'ca'].includes(savedLanguage)) {
      setLanguageState(savedLanguage);
    }
  }, []);

  useEffect(() => {
    setCurrentTranslations(translations[language]);
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let result: any = currentTranslations;

    for (const k of keys) {
      if (result && result[k] !== undefined) {
        result = result[k];
      } else {
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
    }

    if (typeof result === 'string') {
      return result;
    }

    console.warn(`Translation is not a string: ${key}`);
    return key;
  };

  const updateTranslations = (newTranslations: Translations) => {
    translations[language] = newTranslations;
    setCurrentTranslations(newTranslations);
    // In a real app, this would send the updated translations to a server
    // For this demo, we'll just update the in-memory translations
    console.log('Updated translations for', language, newTranslations);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, translations: currentTranslations, updateTranslations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
