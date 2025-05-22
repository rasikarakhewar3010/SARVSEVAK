'use client';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LanguageSelector = () => {
  const [taglines, setTaglines] = useState([]);
  const [hoveredTagline, setHoveredTagline] = useState(null);
  const navigate = useNavigate();

  const languages = [
    { code: 'en', name: 'English', text: 'Seva, Sambandh, Samvaad' },
    { code: 'hi', name: 'Hindi', text: 'सेवा, संबंध, संवाद' },
    { code: 'bn', name: 'Bengali', text: 'পরিষেবা, সম্পর্ক, যোগাযোগ' },
    { code: 'ta', name: 'Tamil', text: 'சேவை, உறவுகள், தொடர்பு' },
    { code: 'te', name: 'Telugu', text: 'సేవ, సంబంధం, సంభాషణ' },
    { code: 'ur', name: 'Urdu', text: 'سروس، تعلقات، مواصلات' },
    { code: 'or', name: 'Odia', text: 'ସେବା, ସମ୍ପର୍କ, ଯୋଗାଯୋଗ' },
    { code: 'kn', name: 'Kannada', text: 'ಸೇವೆ, ಸಂಬಂಧಗಳು, ಸಂವಹನ' },
    { code: 'mr', name: 'Marathi', text: 'सेवा, नातेसंबंध, संवाद' },
    { code: 'gu', name: 'Gujarati', text: 'સેવા, સંબંધો, વાતચીત' },
    { code: 'ml', name: 'Malayalam', text: 'സേവനം, ബന്ധം, സംവാദം' },
    { code: 'es', name: 'Spanish', text: 'Servicio, Relaciones, Comunicación' },
    { code: 'ru', name: 'Russian', text: 'Служение, Отношения, Общение' }
  ];

  useEffect(() => {
    const generateTaglines = () => {
      const generatedTaglines = [];
      const rows = 8;
      const itemsPerRow = 4;
      
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < itemsPerRow; col++) {
          const langIndex = (row + col) % languages.length;
          generatedTaglines.push({
            ...languages[langIndex],
            id: `${row}-${col}`,
            top: 5 + row * 12,
            left: 5 + col * 25,
            size: 16 + Math.random() * 6,
            opacity: 0.15 + Math.random() * 0.2,
            delay: Math.random() * 0.5
          });
        }
      }
      return generatedTaglines;
    };
    setTaglines(generateTaglines());
  }, []);

  const handleLanguageSelect = (languageCode) => {
    console.log('Selected language:', languageCode);
    navigate('/home'); // Use navigate from react-router-dom
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background taglines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {taglines.map((tl) => (
          <div
            key={tl.id}
            className={`absolute transition-all duration-500 ease-in-out cursor-default
              ${hoveredTagline === tl.id ? 
                'text-gradient opacity-100 scale-105' : 
                'text-gray-300'}`}
            style={{
              top: `${tl.top}%`,
              left: `${tl.left}%`,
              fontSize: `${tl.size}px`,
              whiteSpace: 'nowrap',
              userSelect: 'none',
              opacity: hoveredTagline === tl.id ? 1 : tl.opacity,
              transition: `all 0.3s ease-in-out ${tl.delay}s`,
              transform: hoveredTagline === tl.id ? 'scale(1.05)' : 'scale(1)'
            }}
            onMouseEnter={() => setHoveredTagline(tl.id)}
            onMouseLeave={() => setHoveredTagline(null)}
          >
            {tl.text}
          </div>
        ))}
      </div>

      {/* Language selection container */}
      <div className="relative z-10 w-full max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden border border-[#FF9933]/20 p-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-[#05445E] mb-4">SARVSEVAK</h1>
          <h2 className="text-2xl font-semibold text-[#FF9933]">
            Choose Your Language
          </h2>
          <p className="text-gray-600 mt-2">
            Select your preferred language to continue
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageSelect(language.code)}
              className="p-4 rounded-lg border border-[#FF9933]/30 hover:border-[#FF9933]/70 bg-white hover:bg-[#FF9933]/10 transition-all duration-300 group"
            >
              <div className="font-medium text-[#05445E] group-hover:text-[#FF6699] transition-colors">
                {language.name}
              </div>
              <div className="text-sm text-gray-600 group-hover:text-[#FF9933] transition-colors">
                {language.text}
              </div>
            </button>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button 
            onClick={() => navigate(-1)} // Go back in history
            className="text-[#FF9933] hover:text-[#FF6699] font-medium transition-colors"
          >
            ← Back to Login
          </button>
        </div>
      </div>

      <style jsx>{`
        .text-gradient {
          background: linear-gradient(90deg, #FF9933, #FF6699);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
          font-weight: 600;
          text-shadow: 0 0 10px rgba(255, 102, 153, 0.3);
          transition: all 0.3s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default LanguageSelector;