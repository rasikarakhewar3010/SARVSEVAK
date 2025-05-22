import React, { useState, useEffect, useRef } from 'react';
import patternImage from './indian-pattern-gold.png'; // Your Indian motif image

const rotatingSubtitles = [
  { text: 'Seva, Sambandh, Samvaad', lang: 'English' },
  { text: 'सेवा, संबंध, संवाद', lang: 'Hindi' },
  { text: 'পরিষেবা, সম্পর্ক, যোগাযোগ', lang: 'Bengali' },
  { text: 'సేవ, సంబంధం, సంభాషణ', lang: 'Telugu' },
  { text: 'സേവനം, ബന്ധം, സംവാദം', lang: 'Malayalam' },
  { text: 'सेवा, नातेसंबंध, संवाद ', lang: 'Marathi' },
  { text: 'ସେବା, ସମ୍ପର୍କ, ଯୋଗାଯୋଗ ', lang: 'odia' },
  { text: 'સેવા, સંબંધો, વાતચીત ', lang: 'Gujarati' },
  { text: 'سروس، تعلقات، مواصلات', lang: 'Urdu' },
];

const Hero = () => {
  const [hoveredText, setHoveredText] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [currentSubtitleIndex, setCurrentSubtitleIndex] = useState(0);
  const [patternHover, setPatternHover] = useState(false);
  const patternRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      
      // Parallax effect for pattern
      if (patternRef.current) {
        const speed = 0.02;
        const x = (window.innerWidth - e.pageX) * speed;
        const y = (window.innerHeight - e.pageY) * speed;
        patternRef.current.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSubtitleIndex((prev) => (prev + 1) % rotatingSubtitles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleTextHover = (text) => setHoveredText(text);
  const handleTextLeave = () => setHoveredText(null);

  return (
    <div className="relative min-h-screen w-full bg-white overflow-hidden flex items-center justify-center px-4 md:px-10 font-sans">

      {/* Fullscreen Indian pattern background with parallax */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
        onMouseEnter={() => setPatternHover(true)}
        onMouseLeave={() => setPatternHover(false)}
      >
        <img
          ref={patternRef}
          src={patternImage}
          alt="Indian pattern background"
          className={`absolute top-1/2 left-1/2 w-[120vw] h-[120vh] min-w-[120vw] min-h-[120vh] object-cover transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] 
            ${patternHover ? 'opacity-40 scale-105' : 'opacity-20 scale-100'}`}
          style={{ 
            filter: patternHover 
              ? 'sepia(0.8) saturate(2.5) brightness(1.05) contrast(1.1)' 
              : 'sepia(0.4) saturate(1) brightness(1) contrast(1)',
            transformOrigin: 'center center',
            willChange: 'transform, filter, opacity'
          }}
        />
        <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-white/80 transition-opacity duration-1000 ${patternHover ? 'opacity-40' : 'opacity-60'}`} />
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-white/90" />
      </div>

      {/* Enhanced saffron cursor glow with dynamic size */}
      <div
        className="pointer-events-none fixed top-0 left-0 w-full h-full z-20 transition-all duration-300 ease-out"
        style={{
          background: `radial-gradient(circle at ${cursorPos.x}px ${cursorPos.y}px, 
            rgba(255, 153, 51, ${patternHover ? 0.3 : 0.2}) 0%, 
            transparent ${patternHover ? '80%' : '70%'})`,
          opacity: patternHover ? 0.8 : 0.6,
          transform: patternHover ? 'scale(1.1)' : 'scale(1)'
        }}
      />

      {/* Content */}
      <div className="relative z-30 text-center max-w-5xl w-full py-20">
        {/* Language indicator */}
        <div className="mb-6">
          <span className="inline-block px-3 py-1 rounded-full bg-white/80 text-xs font-medium text-[#FF9933] border border-[#FF9933]/30 shadow-sm">
            {rotatingSubtitles[currentSubtitleIndex].lang}
          </span>
        </div>

        <h1
          className={`font-bold mb-6 leading-tight text-4xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl transition-all duration-700 ease-in-out
            ${hoveredText === 'title' ? 'text-[#FF9933]' : 'text-black'} font-serif`}
          style={{ 
            textShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            fontVariationSettings: hoveredText === 'title' ? '"wght" 700' : '"wght" 600',
            transform: hoveredText === 'title' ? 'translateY(-2px)' : 'translateY(0)'
          }}
          onMouseEnter={() => handleTextHover('title')}
          onMouseLeave={handleTextLeave}
        >
          SARVSEVAK
        </h1>

        <p
          className={`uppercase mb-8 text-sm sm:text-base md:text-lg tracking-widest transition-all duration-700 ease-in-out
            ${hoveredText === 'subtitle' ? 'text-[#FF9933]' : 'text-black/70'} font-medium`}
          onMouseEnter={() => handleTextHover('subtitle')}
          onMouseLeave={handleTextLeave}
        >
          {rotatingSubtitles[currentSubtitleIndex].text}
        </p>

        <p className="max-w-2xl mx-auto mb-10 text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed px-2 sm:px-0">
          Empowering communities through service, connection, and dialogue. Join us in building a more connected India.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 px-2 sm:px-0">
          <button
            className={`relative px-8 py-4 md:px-10 md:py-4 rounded-full font-semibold tracking-wider text-sm sm:text-base uppercase overflow-hidden transition-all duration-500 ease-in-out shadow-lg group
              ${hoveredText === 'primaryButton' ? 'bg-[#FF9933] text-white border-[#FF9933]' : 'bg-white text-black border-black'}
              border-2 hover:scale-105 active:scale-95`}
            onMouseEnter={() => handleTextHover('primaryButton')}
            onMouseLeave={handleTextLeave}
          >
            <span className="relative z-10">Get Started</span>
            <span className="absolute inset-0 rounded-full group-hover:bg-[#FF9933]/10 transition-all duration-500 ease-out z-0 pointer-events-none"></span>
          </button>
          
          <button
            className={`relative px-8 py-4 md:px-10 md:py-4 rounded-full font-semibold tracking-wider text-sm sm:text-base uppercase overflow-hidden transition-all duration-500 ease-in-out shadow-lg group
              ${hoveredText === 'secondaryButton' ? 'text-[#FF9933] border-[#FF9933]' : 'text-black border-black/30'}
              border-2 hover:scale-105 active:scale-95 bg-white/80`}
            onMouseEnter={() => handleTextHover('secondaryButton')}
            onMouseLeave={handleTextLeave}
          >
            <span className="relative z-10">Learn More</span>
            <span className="absolute inset-0 rounded-full group-hover:bg-[#FF9933]/5 transition-all duration-500 ease-out z-0 pointer-events-none"></span>
          </button>
        </div>

        {/* Stats or quick facts
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto px-2 sm:px-0">
          {[
            { value: '10K+', label: 'Volunteers' },
            { value: '500+', label: 'Communities' },
            { value: '100+', label: 'Languages' },
            { value: '24/7', label: 'Support' }
          ].map((stat, index) => (
            <div 
              key={index} 
              className="bg-white/80 backdrop-blur-sm p-3 rounded-lg border border-[#FF9933]/20 shadow-sm transition-all hover:scale-105 hover:border-[#FF9933]/40"
              onMouseEnter={() => handleTextHover(`stat${index}`)}
              onMouseLeave={handleTextLeave}
            >
              <div className="text-2xl font-bold text-[#FF9933]">{stat.value}</div>
              <div className="text-xs uppercase tracking-wider text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div> */}
      </div>
      
    </div>
  );
};

export default Hero;
