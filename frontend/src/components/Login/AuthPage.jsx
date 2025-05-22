'use client';
import { useState, useEffect } from 'react';
import { FaGoogle, FaGithub, FaTwitter } from 'react-icons/fa';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [taglines, setTaglines] = useState([]);
  const [hoveredTagline, setHoveredTagline] = useState(null);

  const taglineTexts = [
    { text: 'Seva, Sambandh, Samvaad', lang: 'English' },
    { text: 'सेवा, संबंध, संवाद', lang: 'Hindi' },
    { text: 'পরিষেবা, সম্পর্ক, যোগাযোগ', lang: 'Bengali' },
    { text: 'సేవ, సంబంధం, సంభాషణ', lang: 'Telugu' },
    { text: 'സേവനം, ബന്ധം, സംവാദം', lang: 'Malayalam' },
    { text: 'सेवा, संबंध, संवाद', lang: 'Marathi' },
    { text: 'ਸੇਵਾ, ਸੰਬੰਧ, ਸੰਵਾਦ', lang: 'Punjabi' },
    { text: 'ସେବା, ସମ୍ପର୍କ, ଯୋଗାଯୋଗ', lang: 'Odia' },
    { text: 'સેવા, સંબંધો, વાતચીત', lang: 'Gujarati' },
    { text: 'سروس، تعلقات، مواصلات', lang: 'Urdu' },
  ];

  useEffect(() => {
    const generateTaglines = () => {
      const generatedTaglines = [];
      const rows = 8; // Number of horizontal rows
      const itemsPerRow = 4; // Number of items per row
      
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < itemsPerRow; col++) {
          const taglineIndex = (row + col) % taglineTexts.length;
          generatedTaglines.push({
            ...taglineTexts[taglineIndex],
            id: `${row}-${col}`,
            top: 5 + row * 12, // vertical spacing
            left: 5 + col * 25, // horizontal spacing
            size: 16 + Math.random() * 6, // size between 16 and 22
            opacity: 0.15 + Math.random() * 0.2, // subtle random opacity
            delay: Math.random() * 0.5 // random animation delay
          });
        }
      }
      return generatedTaglines;
    };
    setTaglines(generateTaglines());
  }, []);

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log('Login attempt:', formData.username, formData.password);
    } else {
      console.log('Signup attempt:', formData);
    }
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

      {/* Auth container */}
      <div className="relative z-10 w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden border border-[#FF9933]/20">
        <div className="flex border-b border-[#FF9933]/20">
          <button
            className={`flex-1 py-4 font-medium ${isLogin ? 'bg-[#FF9933]/10 text-[#FF9933]' : 'text-gray-500'}`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`flex-1 py-4 font-medium ${!isLogin ? 'bg-[#FF9933]/10 text-[#FF9933]' : 'text-gray-500'}`}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>
        <div className="p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-[#05445E] mb-2">SARVSEVAK</h1>
            <p className="text-gray-600">
              {isLogin ? 'Welcome back! Please login to continue' : 'Join our community of volunteers'}
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF9933] focus:border-[#FF9933] outline-none transition"
                  required
                />
              </div>
            )}
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="username">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF9933] focus:border-[#FF9933] outline-none transition"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF9933] focus:border-[#FF9933] outline-none transition"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#FF9933] to-[#FF6699] text-white py-3 rounded-lg font-medium hover:opacity-90 transition mb-6"
            >
              {isLogin ? 'Login' : 'Create Account'}
            </button>
            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="px-2 bg-white text-gray-500 text-sm">
                  Or continue with
                </span>
              </div>
            </div>
            {/* Social login options */}
            <div className="flex justify-center space-x-4 mb-6">
              <button
                type="button"
                className="p-3 rounded-full border border-gray-300 hover:bg-[#FF9933]/10 hover:border-[#FF9933]/50 transition"
              >
                <FaGoogle size={24} className="text-[#DB4437]" />
              </button>
              <button
                type="button"
                className="p-3 rounded-full border border-gray-300 hover:bg-[#FF9933]/10 hover:border-[#FF9933]/50 transition"
              >
                <FaTwitter size={24} className="text-[#1DA1F2]" />
              </button>
              <button
                type="button"
                className="p-3 rounded-full border border-gray-300 hover:bg-[#FF9933]/10 hover:border-[#FF9933]/50 transition"
              >
                <FaGithub size={24} className="text-gray-800" />
              </button>
            </div>
            <div className="text-center text-sm text-gray-600">
              {isLogin ? (
                <>
                  Don't have an account?{' '}
                  <button
                    type="button"
                    className="text-[#FF9933] hover:underline"
                    onClick={() => setIsLogin(false)}
                  >
                    Sign up
                  </button>
                </>
              ) : (
                <>
                  Already have an account?{' '}
                  <button
                    type="button"
                    className="text-[#FF9933] hover:underline"
                    onClick={() => setIsLogin(true)}
                  >
                    Login
                  </button>
                </>
              )}
            </div>
          </form>
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

export default AuthPage;