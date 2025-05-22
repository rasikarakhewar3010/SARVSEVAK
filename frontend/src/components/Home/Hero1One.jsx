import React from 'react';

const Hero1One = () => {
  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Fireworks Hweo1 Section */}
      <section className="min-h-screen bg-gradient-to-r from-pink-100 to-yellow-100 flex flex-col items-center justify-center text-center px-4 py-20 relative">
        <h1 className="text-5xl md:text-6xl font-extrabold text-rose-700 mb-4 drop-shadow">
          Bringing Humanity Back to AI Support 🇮🇳✨
        </h1>
        <p className="text-xl text-gray-700 max-w-2xl mb-8">
          Multilingual. Emotionally Aware. Culturally Smart.<br />
          Meet <span className="font-semibold text-rose-600">SarvSevak</span> — the AI that truly understands.
        </p>
        <div className="flex gap-4">
          <a href="#demo" className="bg-rose-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-rose-700">
            ✨ Try the Demo
          </a>
          <a href="#watch" className="bg-white border border-rose-500 text-rose-600 px-6 py-3 rounded-full shadow-md hover:bg-rose-100">
            🎥 Watch How It Works
          </a>
        </div>
        {/* Fireworks animation could go here as Lottie or canvas */}
      </section>

      {/* Core Features */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold text-rose-700 mb-6">🧩 Core Features</h2>
        <div className="grid md:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
          {[
            ['🧠 Multilingual NLP', 'Understand context, idioms, and tone in 10+ languages.'],
            ['🌍 Cultural Awareness', 'Respectful, localized communication based on culture.'],
            ['❤️ Emotional Intelligence', 'Detects sentiment: happy, angry, confused. Reacts wisely.'],
            ['🚨 Smart Escalation', 'Escalates with full context and sentiment summary.'],
            ['📲 Omnichannel Support', 'Connect across WhatsApp, FB, Email, Website.'],
          ].map(([emoji, desc], i) => (
            <div key={i} className="bg-rose-50 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-2">{emoji}</h3>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Supported Languages */}
      <section className="py-16 bg-amber-50 text-center">
        <h2 className="text-3xl font-bold text-rose-700 mb-6">🌍 Languages We Speak</h2>
        <p className="text-gray-600 mb-4">Serving users in their native tongue for comfort and clarity.</p>
        <div className="flex flex-wrap justify-center gap-4 px-4">
          {['English 🇬🇧', 'Hindi 🇮🇳', 'Spanish 🇪🇸', 'Arabic 🇸🇦', 'French 🇫🇷', 'Mandarin 🇨🇳', 'German 🇩🇪', 'Portuguese 🇵🇹', 'Japanese 🇯🇵', 'Russian 🇷🇺'].map((lang, i) => (
            <span key={i} className="bg-white px-4 py-2 rounded-full border text-sm shadow-sm">{lang}</span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-tr from-white to-pink-50 text-center">
        <h2 className="text-3xl font-bold text-rose-700 mb-4">Ready to humanize your AI support?</h2>
        <p className="text-gray-600 mb-6">Experience the magic of cultural empathy + AI excellence.</p>
        <a href="#contact" className="bg-rose-600 text-white px-8 py-4 rounded-full font-medium hover:bg-rose-700">
          🚀 Request a Demo
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 bg-white border-t">
        Made with ❤️ in India | सर्वे भवन्तु सुखिनः
      </footer>
    </div>
  );
};

export default Hero1One;
