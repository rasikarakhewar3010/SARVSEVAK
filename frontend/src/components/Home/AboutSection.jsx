'use client';

import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { FiUsers, FiMessageSquare } from 'react-icons/fi';
import { FaHandsHelping } from 'react-icons/fa';
import { LanguageContext } from '../LanguageContext'; // Adjust path if needed

const icons = {
  service: <FaHandsHelping size={28} />,
  connection: <FiUsers size={28} />,
  dialogue: <FiMessageSquare size={28} />,
};

const AboutSection = () => {
  // Consume language from context
  const { language } = useContext(LanguageContext);

  const texts = {
    en: {
      heading: 'About Sarvsevak',
      mission1:
        'Sarvsevak is a student-led initiative aiming to promote service, human connection, and open conversations. Built with dedication and heart, we use technology to connect citizens and communities.',
      mission2:
        'Our goal is to empower local action, strengthen community ties, and encourage dialogue — all starting from the grassroots.',
      pillars: [
        {
          title: 'Seva (Service)',
          desc: 'Join hands with us in small acts of service that bring real change. We connect volunteers with local causes and student-run drives.',
          stats: '1,000+ volunteer hours logged',
          color: '#FF9933',
          iconKey: 'service',
        },
        {
          title: 'Sambandh (Connection)',
          desc: 'We help students and citizens connect through projects, events, and shared causes, building genuine community bonds.',
          stats: '20+ student communities engaged',
          color: '#FB7185',
          iconKey: 'connection',
        },
        {
          title: 'Samvaad (Dialogue)',
          desc: 'We encourage meaningful discussions through forums, blogs, and meetups in 10+ Indian languages.',
          stats: '10+ languages supported',
          color: '#F43F5E',
          iconKey: 'dialogue',
        },
      ],
      ctaText: 'Want to contribute and grow with us?',
      ctaButton: 'Join the Sarvsevak Community',
    },

    hi: {
      heading: 'सर्वसेवक के बारे में',
      mission1:
        'सर्वसेवक एक छात्र-नेतृत्व वाली पहल है जिसका उद्देश्य सेवा, मानव संबंध, और खुले संवाद को बढ़ावा देना है। समर्पण और दिल से निर्मित, हम प्रौद्योगिकी का उपयोग नागरिकों और समुदायों को जोड़ने के लिए करते हैं।',
      mission2:
        'हमारा लक्ष्य स्थानीय क्रियाओं को सशक्त बनाना, सामुदायिक संबंधों को मजबूत करना, और संवाद को प्रोत्साहित करना है — यह सब जमीनी स्तर से शुरू होता है।',
      pillars: [
        {
          title: 'सेवा (Service)',
          desc: 'छोटे-छोटे सेवा कार्यों में हमारे साथ हाथ मिलाएं जो वास्तविक बदलाव लाते हैं। हम स्वयंसेवकों को स्थानीय कारणों और छात्र-चालित अभियानों से जोड़ते हैं।',
          stats: '1,000+ स्वयंसेवी घंटे दर्ज',
          color: '#FF9933',
          iconKey: 'service',
        },
        {
          title: 'संबंध (Connection)',
          desc: 'हम छात्रों और नागरिकों को परियोजनाओं, कार्यक्रमों, और साझा कारणों के माध्यम से जोड़ते हैं, जिससे सच्चे सामुदायिक बंधन बनते हैं।',
          stats: '20+ छात्र समुदाय जुड़े',
          color: '#FB7185',
          iconKey: 'connection',
        },
        {
          title: 'संवाद (Dialogue)',
          desc: 'हम मंचों, ब्लॉगों, और 10+ भारतीय भाषाओं में मिलनों के माध्यम से सार्थक चर्चाओं को प्रोत्साहित करते हैं।',
          stats: '10+ भाषाएं समर्थित',
          color: '#F43F5E',
          iconKey: 'dialogue',
        },
      ],
      ctaText: 'क्या आप योगदान देना और हमारे साथ बढ़ना चाहते हैं?',
      ctaButton: 'सर्वसेवक समुदाय में शामिल हों',
    },

    // Add more languages here if needed
  };

  const t = texts[language] || texts.en;

  return (
    <section className="relative py-18 px-6 md:px-12 bg-gradient-to-b from-white to-rose-50 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-16 left-10 w-36 h-36 rounded-full bg-rose-100 blur-3xl"></div>
        <div className="absolute bottom-8 right-12 w-48 h-48 rounded-full bg-[#FF9933]/20 blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 rounded-full bg-[#FF9933]/10 blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FF9933] via-rose-500 to-[#FF9933] font-serif text-center">
            {t.heading}
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-[#FF9933] to-rose-500 rounded-full mt-4 mb-8"></div>
        </motion.div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-6 max-w-3xl mx-auto"
        >
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed text-center">
            <span className="font-bold text-[#FF9933]">Sarvsevak</span> {t.mission1}
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center mt-6">{t.mission2}</p>
        </motion.div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {t.pillars.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              style={{ borderTop: `5px solid ${item.color}` }}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full" style={{ backgroundColor: `${item.color}20` }}>
                  {icons[item.iconKey]}
                </div>
                <h3 className="text-xl font-bold ml-4" style={{ color: item.color }}>
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">{item.desc}</p>
              <p className="text-sm font-medium" style={{ color: item.color }}>
                {item.stats}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-xl md:text-2xl text-gray-800 mb-6 font-medium">{t.ctaText}</p>
          <button className="px-8 py-4 bg-gradient-to-r from-[#FF9933] to-rose-500 text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
            {t.ctaButton}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
