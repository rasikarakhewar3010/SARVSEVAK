import React, { createContext, useState, useEffect } from 'react';

// Create context
export const LanguageContext = createContext();

// Provider component
export const LanguageProvider = ({ children }) => {
  // Try to load saved language from localStorage, fallback to 'en'
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('selectedLanguage') || 'en';
  });

  // Save language in localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('selectedLanguage', language);
  }, [language]);

  // Determine font class based on selected language
  const fontClass = language === 'hi' ? 'font-devanagari' : 'font-sans';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, fontClass }}>
      <div className={fontClass}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};
