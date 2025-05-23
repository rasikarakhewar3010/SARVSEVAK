import React, { useState } from 'react';

const LANGUAGES = [
    { code: 'en', label: 'Englisg' },
  { code: 'hi', label: ' Hindi' },
  { code: 'bn', label: 'Bengali' },
  { code: 'ta', label: 'Tamil' },
  { code: 'te', label: 'Telugu' },
  { code: 'kn', label: 'Kannada' },
  { code: 'ur', label: 'Urdu' },
  { code: 'mr', label: 'Marathi' },
  { code: 'or', label: 'Odia' },
  { code: 'gu', label: 'Gujarati' },
  { code: 'ml', label: 'Malayalam' },
  { code: 'es', label: 'Spanish' },
  { code: 'ru', label: 'Russian' }
];


function LanguageSelect({ onLanguageSelected }) {
  const [selectedLang, setSelectedLang] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedLang) {
      onLanguageSelected(selectedLang);
    } else {
      alert('Please select a language!');
    }
  };

  return (
    <div className="relative z-30 min-h-screen flex flex-col items-center justify-center bg-white px-6 py-16 font-sans text-center">
      {/* Background Pattern */}
      <div className="fixed inset-0 -z-10 opacity-30">
        <img
          src="/path-to/indian-pattern-gold.png"
          alt="Background pattern"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-white/90" />
      </div>

      {/* Language Selection Box */}
      <div className="bg-white/90 backdrop-blur-sm border border-[#FF9933]/30 rounded-2xl shadow-xl p-10 max-w-md w-full">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#FF9933] font-serif tracking-wide">
          Select Chatbot Language
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <select
            value={selectedLang}
            onChange={(e) => setSelectedLang(e.target.value)}
            className="w-full p-3 text-base rounded-md border border-[#FF9933]/50 focus:outline-none focus:ring-2 focus:ring-[#FF9933] bg-white text-black"
          >
            <option value="">-- Select Language --</option>
            {LANGUAGES.map(({ code, label }) => (
              <option key={code} value={code}>
                {label}
              </option>
            ))}
          </select>

          <button
            type="submit"
            className="w-full py-3 px-6 rounded-full bg-[#FF9933] text-white font-semibold uppercase tracking-wider shadow-md hover:scale-105 transition-transform duration-300"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}

export default LanguageSelect;
