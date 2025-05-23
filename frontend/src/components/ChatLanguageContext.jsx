'use client';
import { createContext, useContext, useState } from 'react';

const ChatLanguageContext = createContext();

export const ChatLanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('');

  return (
    <ChatLanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </ChatLanguageContext.Provider>
  );
};

export const useChatLanguage = () => useContext(ChatLanguageContext);
