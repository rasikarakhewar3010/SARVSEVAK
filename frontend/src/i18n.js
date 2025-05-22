// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translations
import en from './locales/en.json';
import hi from './locales/hi.json';
import bn from './locales/bn.json';
import te from './locales/te.json';
import ml from './locales/ml.json';
import mr from './locales/mr.json';
import or from './locales/or.json';
import gu from './locales/gu.json';
import ur from './locales/ur.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      hi: { translation: hi },
      bn: { translation: bn },
      te: { translation: te },
      ml: { translation: ml },
      mr: { translation: mr },
      or: { translation: or },
      gu: { translation: gu },
      ur: { translation: ur },
    },
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
