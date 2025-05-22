// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translations
const resources = {
  en: {
    translation: {
      "Seva, Sambandh, Samvaad": "Seva, Sambandh, Samvaad",
      "सेवा, संबंध, संवाद": "Seva, Sambandh, Samvaad",
      "পরিষেবা, সম্পর্ক, যোগাযোগ": "Service, Relationship, Communication",
      "സേവനം, ബന്ധം, സംവാദം": "Service, Relationship, Communication",
      "सेवा, नातेसंबंध, संवाद": "Service, Relationships, Communication",
      "ସେବା, ସମ୍ପର୍କ, ଯୋଗାଯୋଗ": "Service, Relationship, Communication",
      "સેવા, સંબંધો, વાતચીત": "Service, Relationships, Conversation",
      "سروس، تعلقات، مواصلات": "Service, Relationships, Communication",
      "welcome": "Welcome to SARVSEVAK",
      "description": "Empowering communities through service, connection, and dialogue. Join us in building a more connected India.",
      "getStarted": "Get Started",
      "learnMore": "Learn More"
    }
  },
  hi: {
    translation: {
      "Seva, Sambandh, Samvaad": "सेवा, संबंध, संवाद",
      "सेवा, संबंध, संवाद": "सेवा, संबंध, संवाद",
      "welcome": "SARVSEVAK में आपका स्वागत है",
      "description": "सेवा, संबंध और संवाद के माध्यम से समुदायों को सशक्त बनाना। अधिक जुड़े भारत के निर्माण में हमारे साथ जुड़ें।",
      "getStarted": "शुरू करें",
      "learnMore": "अधिक जानें"
    }
  },
  // Add other languages similarly
  bn: {
    translation: {
      "Seva, Sambandh, Samvaad": "পরিষেবা, সম্পর্ক, যোগাযোগ",
      "welcome": "SARVSEVAK-এ স্বাগতম",
      "description": "পরিষেবা, সংযোগ এবং সংলাপের মাধ্যমে সম্প্রদায়গুলিকে ক্ষমতায়ন করা। আরও সংযুক্ত ভারত গড়তে আমাদের সাথে যোগ দিন।",
      "getStarted": "শুরু করুন",
      "learnMore": "আরও জানুন"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;