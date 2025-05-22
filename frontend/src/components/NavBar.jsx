import { useState, useEffect } from 'react';
import axios from 'axios';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);

    const user = localStorage.getItem('user');
    setIsLoggedIn(!!user);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:5000/api/auth/logout');
      localStorage.removeItem('user');
      setIsLoggedIn(false);
      setActiveLink('/');
    } catch (err) {
      console.error('Logout error:', err.message);
    }
  };

  const navLinks = [
    { name: 'AI Chat', path: '#camera' },
    { name: 'Guide', path: '#guide' },
    { name: 'Contact', path: '#contact' }
  ];

  return (
    <>
      <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-sm py-3'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <a 
              href="/home" 
              className="text-2xl font-bold bg-gradient-to-r from-[#FF9933] to-rose-400 bg-clip-text text-transparent hover:from-rose-500 hover:to-[#FF9933] transition-all duration-300"
              onClick={() => setActiveLink('')}
            >
              SARVSEVAK
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="flex space-x-8">
                {navLinks.map((link) => (
                  <a
                    key={link.path}
                    href={link.path}
                    className={`relative group px-1 py-2 transition-all duration-200 ${activeLink === link.path ? 'text-rose-600' : 'text-gray-700 hover:text-[#FF9933]'}`}
                    onClick={() => setActiveLink(link.path)}
                  >
                    {link.name}
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-rose-500 rounded-full transition-all duration-300 ${activeLink === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                  </a>
                ))}
              </div>

              <div className="border-l border-gray-200 h-6 mx-2"></div>

              <div className="flex space-x-4">
                {!isLoggedIn ? (
                  <a
                    href="/"
                    className="bg-gradient-to-r from-[#FF9933] to-pink-400 text-white px-4 py-2 rounded-lg font-medium hover:from-rose-500 hover:to-[#FF9933] transition-all duration-300"
                    onClick={() => setActiveLink('/')}
                  >
                    Login
                  </a>
                ) : (
                  <>
                    <a
                      href="#profile"
                      className="bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:text-rose-600 px-4 py-2 rounded-lg font-medium transition-all duration-300"
                      onClick={() => setActiveLink('#profile')}
                    >
                      Profile
                    </a>
                    <button
                      onClick={handleLogout}
                      className="bg-gradient-to-r from-red-400 to-pink-500 text-white px-4 py-2 rounded-lg font-medium hover:from-pink-500 hover:to-red-500 transition-all duration-300"
                    >
                      Logout
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Mobile Button */}
            <button
              className={`md:hidden p-2 rounded-md focus:outline-none transition-all duration-300 ${mobileMenuOpen ? 'bg-rose-50' : 'hover:bg-rose-50'}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 relative">
                <span className={`block absolute h-0.5 w-6 bg-gray-700 rounded-full transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 top-3' : 'top-2'}`}></span>
                <span className={`block absolute h-0.5 w-6 bg-gray-700 rounded-full transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'top-3'}`}></span>
                <span className={`block absolute h-0.5 w-6 bg-gray-700 rounded-full transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 top-3' : 'top-4'}`}></span>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${mobileMenuOpen ? 'max-h-96 py-3' : 'max-h-0'}`}>
            <div className="flex flex-col space-y-3 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.path}
                  href={link.path}
                  className={`px-4 py-3 rounded-lg font-medium transition-all duration-200 ${activeLink === link.path ? 'bg-rose-50 text-rose-600' : 'text-gray-700 hover:bg-rose-50 hover:text-rose-600'}`}
                  onClick={() => {
                    setActiveLink(link.path);
                    setMobileMenuOpen(false);
                  }}
                >
                  {link.name}
                </a>
              ))}
              {!isLoggedIn ? (
                <a
                  href="/"
                  className="bg-gradient-to-r from-rose-400 to-pink-400 text-white hover:from-rose-500 hover:to-pink-500 px-4 py-3 rounded-lg font-medium"
                  onClick={() => {
                    setActiveLink('/');
                    setMobileMenuOpen(false);
                  }}
                >
                  Login
                </a>
              ) : (
                <>
                  <a
                    href="#profile"
                    className="text-gray-700 hover:bg-gray-100 px-4 py-3 rounded-lg font-medium"
                    onClick={() => {
                      setActiveLink('#profile');
                      setMobileMenuOpen(false);
                    }}
                  >
                    Profile
                  </a>
                  <button
                    onClick={() => {
                      handleLogout();
                      setMobileMenuOpen(false);
                    }}
                    className="bg-gradient-to-r from-red-400 to-pink-500 text-white hover:from-pink-500 hover:to-red-500 px-4 py-3 rounded-lg font-medium"
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </header>
      <div className="h-16 md:h-20"></div>
    </>
  );
};

export default NavBar;
