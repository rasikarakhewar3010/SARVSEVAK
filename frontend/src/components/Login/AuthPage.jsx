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
      const generated = [];
      const rows = 8, cols = 4;

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const i = (row + col) % taglineTexts.length;
          generated.push({
            ...taglineTexts[i],
            id: `${row}-${col}`,
            top: 5 + row * 12,
            left: 5 + col * 25,
            size: 16 + Math.random() * 6,
            opacity: 0.15 + Math.random() * 0.2,
            delay: Math.random() * 0.5,
          });
        }
      }
      return generated;
    };

    setTaglines(generateTaglines());
  }, []);

  const [formData, setFormData] = useState({ email: '', username: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isLogin ? '/api/auth/login' : '/api/auth/signup';

    try {
      const res = await fetch(`http://localhost:5000${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      alert(data.message || 'Success');

      if (res.ok) {
        router.push('/language');  // <-- Redirect here on success
      }
    } catch (err) {
      console.error(err);
      alert('An error occurred during authentication.');
    }
  };


  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 relative overflow-hidden">
      {/* Taglines Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {taglines.map((tl) => (
          <div
            key={tl.id}
            className={`absolute transition-all duration-500 ease-in-out cursor-default ${
              hoveredTagline === tl.id ? 'text-gradient opacity-100 scale-105' : 'text-gray-300'
            }`}
            style={{
              top: `${tl.top}%`,
              left: `${tl.left}%`,
              fontSize: `${tl.size}px`,
              whiteSpace: 'nowrap',
              userSelect: 'none',
              opacity: hoveredTagline === tl.id ? 1 : tl.opacity,
              transition: `all 0.3s ease-in-out ${tl.delay}s`,
              transform: hoveredTagline === tl.id ? 'scale(1.05)' : 'scale(1)',
            }}
            onMouseEnter={() => setHoveredTagline(tl.id)}
            onMouseLeave={() => setHoveredTagline(null)}
          >
            {tl.text}
          </div>
        ))}
      </div>

      {/* Auth Form */}
      <div className="relative z-10 w-full max-w-md bg-white rounded-2xl shadow-xl border border-[#FF9933]/30">
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
            <h1 className="text-3xl font-bold text-[#05445E]">SARVSEVAK</h1>
            <p className="text-gray-600 text-sm">
              {isLogin ? 'Welcome back! Please login to continue' : 'Join our community of volunteers'}
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-1 text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF9933] focus:border-[#FF9933] outline-none"
              />
            </div>

            {/* Username (only for Sign Up) */}
            {!isLogin && (
              <div className="mb-4">
                <label htmlFor="username" className="block text-gray-700 mb-1 text-sm font-medium">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  required
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF9933] focus:border-[#FF9933] outline-none"
                />
              </div>
            )}

            {/* Password */}
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 mb-1 text-sm font-medium">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF9933] focus:border-[#FF9933] outline-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#FF9933] to-[#FF6699] text-white py-3 rounded-lg font-medium hover:opacity-90 transition"
            >
              {isLogin ? 'Login' : 'Create Account'}
            </button>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-gray-500">or continue with</span>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="flex justify-center gap-4">
              <button type="button" className="p-3 border border-gray-300 rounded-full hover:bg-[#FF9933]/10">
                <FaGoogle className="text-[#DB4437]" size={22} />
              </button>
              <button type="button" className="p-3 border border-gray-300 rounded-full hover:bg-[#FF9933]/10">
                <FaTwitter className="text-[#1DA1F2]" size={22} />
              </button>
              <button type="button" className="p-3 border border-gray-300 rounded-full hover:bg-[#FF9933]/10">
                <FaGithub className="text-black" size={22} />
              </button>
            </div>

            {/* Switch Link */}
            <div className="mt-6 text-center text-sm text-gray-600">
              {isLogin ? (
                <>
                  Don&apos;t have an account?{' '}
                  <button onClick={() => setIsLogin(false)} className="text-[#FF9933] hover:underline">
                    Sign up
                  </button>
                </>
              ) : (
                <>
                  Already have an account?{' '}
                  <button onClick={() => setIsLogin(true)} className="text-[#FF9933] hover:underline">
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
          text-shadow: 0 0 10px rgba(255, 153, 51, 0.2);
          font-weight: 600;
        }
      `}</style>
    </div>
  );
};

export default AuthPage;
