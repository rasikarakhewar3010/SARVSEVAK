import React, { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';
import patternImage from './indian-pattern-gold.png';

const Guide = () => {
  const { language } = useContext(LanguageContext);

  // Guide content in multiple languages
  const guideContent = {
    en: {
      title: "How SarvSevak Works",
      steps: [
        {
          title: "Language Selection",
          description: "Choose from 10+ Indian languages to interact in your preferred tongue."
        },
        {
          title: "Cultural Context Understanding",
          description: "Our AI recognizes regional idioms, customs, and communication styles."
        },
        {
          title: "Sentiment Analysis",
          description: "Detects emotional tone and escalates complex issues to human agents."
        },
        {
          title: "Context-Aware Responses",
          description: "Provides solutions considering local practices and regulations."
        }
      ],
      featuresTitle: "Key Features",
      features: [
        "Real-time translation with cultural adaptation",
        "Support for regional dialects and scripts",
        "Privacy-focused data handling",
        "Seamless human agent handoff"
      ]
    },
    hi: {
      title: "सर्वसेवक कैसे काम करता है",
      steps: [
        {
          title: "भाषा चयन",
          description: "अपनी पसंदीदा भाषा में बातचीत करने के लिए 10+ भारतीय भाषाओं में से चुनें।"
        },
        {
          title: "सांस्कृतिक संदर्भ समझ",
          description: "हमारी AI क्षेत्रीय मुहावरों, रीति-रिवाजों और संचार शैलियों को पहचानती है।"
        },
        {
          title: "भावना विश्लेषण",
          description: "भावनात्मक स्वर का पता लगाता है और जटिल मुद्दों को मानव एजेंटों को सौंपता है।"
        },
        {
          title: "संदर्भ-जागरूक प्रतिक्रियाएं",
          description: "स्थानीय प्रथाओं और नियमों को ध्यान में रखते हुए समाधान प्रदान करता है।"
        }
      ],
      featuresTitle: "मुख्य विशेषताएं",
      features: [
        "सांस्कृतिक अनुकूलन के साथ वास्तविक समय अनुवाद",
        "क्षेत्रीय बोलियों और लिपियों के लिए समर्थन",
        "गोपनीयता-केंद्रित डेटा संचालन",
        "मानव एजेंट को सहज हस्तांतरण"
      ]
    }
  };

  const content = guideContent[language] || guideContent['en'];

  return (
    <div className="relative w-full bg-white overflow-hidden py-16 px-4 md:px-10 font-sans">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-10">
        <img
          src={patternImage}
          alt="Indian pattern background"
          className="absolute top-1/2 left-1/2 w-[120vw] h-[120vh] min-w-[120vw] min-h-[120vh] object-cover"
          style={{
            filter: 'sepia(0.4) saturate(1) brightness(1) contrast(1)',
            transform: 'translate(-50%, -50%)'
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-[#FF9933] font-serif">
          {content.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {content.steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white/90 p-6 rounded-xl shadow-lg border border-[#FF9933]/20 hover:border-[#FF9933]/40 transition-all duration-300"
            >
              <div className="flex items-start mb-4">
                <div className="bg-[#FF9933] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mt-1">{step.title}</h3>
              </div>
              <p className="text-gray-600 ml-12">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white/90 p-8 rounded-xl shadow-lg border border-[#FF9933]/20 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-6 text-[#FF9933]">
            {content.featuresTitle}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {content.features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <svg className="w-5 h-5 text-[#FF9933] mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-700">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team information section */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold mb-2 text-gray-800">
            {language === 'hi' ? 'शीकोड टीम द्वारा निर्मित' : 'Built by Team SheCode'}
          </h3>
          <p className="text-gray-600 mb-4">
            {language === 'hi' ? 'टीवाई-ए (सीएसई) के छात्र' : 'Students of TY-A (CSE)'}
          </p>
          <div className="flex flex-wrap justify-center gap-4 max-w-md mx-auto">
            {['Talat Siddiqui', 'Rasika Rakhewar', 'Snehal Savandkar', 'Shruti Pimple'].map((member, index) => (
              <div key={index} className="bg-white/90 px-4 py-2 rounded-full border border-[#FF9933]/30 shadow-sm">
                <p className="text-gray-700">{member}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guide;