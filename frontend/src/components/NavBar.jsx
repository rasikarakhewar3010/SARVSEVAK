import { useState, useEffect } from 'react';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'AI Camera', path: '#camera' },
    { name: 'Guide', path: '#guide' },
    { name: 'Contact', path: '#contact' }
  ];

  const authLinks = [
    { name: 'Login', path: '/' },
    { name: 'Profile', path: '#profile' }
  ];

  return (
    <>
      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-sm py-3'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
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
                {authLinks.map((link, index) => (
                  <a
                    key={link.path}
                    href={link.path}
                    className={`relative overflow-hidden px-4 py-2 rounded-lg font-medium transition-all duration-300 ${activeLink === link.path 
                      ? index === 0 
                        ? 'bg-gradient-to-r from-[#FF9933] to-pink-500 text-white shadow-lg shadow-rose-200'
                        : 'bg-gradient-to-r from-gray-100 to-gray-50 text-[#FF9933] border border-gray-200 shadow-sm'
                      : index === 0 
                        ? 'bg-gradient-to-r from-[#FF9933] to-pink-400 text-white hover:shadow-lg hover:shadow-rose-200 hover:from-rose-500 hover:to-[#FF9933]'
                        : 'bg-white text-gray-700 hover:bg-gray-50 hover:text-rose-600 border border-gray-200 hover:border-rose-200'}`}
                    onClick={() => setActiveLink(link.path)}
                  >
                    <span className="relative z-10">{link.name}</span>
                    {index === 0 && (
                      <span className="absolute inset-0 bg-gradient-to-r from-[#FF9933] to-pink-600 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg"></span>
                    )}
                  </a>
                ))}
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
              {[...navLinks, ...authLinks].map((link, index) => (
                <a
                  key={link.path}
                  href={link.path}
                  className={`px-4 py-3 rounded-lg font-medium transition-all duration-200 ${activeLink === link.path 
                    ? index < navLinks.length 
                      ? 'bg-rose-50 text-rose-600'
                      : index === navLinks.length 
                        ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white'
                        : 'bg-gray-100 text-rose-600'
                    : index < navLinks.length 
                      ? 'text-gray-700 hover:bg-rose-50 hover:text-rose-600'
                      : index === navLinks.length 
                        ? 'bg-gradient-to-r from-rose-400 to-pink-400 text-white hover:from-rose-500 hover:to-pink-500'
                        : 'text-gray-700 hover:bg-gray-100'}`}
                  onClick={() => {
                    setActiveLink(link.path);
                    setMobileMenuOpen(false);
                  }}
                >
                  <div className="flex items-center">
                    {index === navLinks.length && (
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                      </svg>
                    )}
                    {index === navLinks.length + 1 && (
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    )}
                    {link.name}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Spacer to prevent content overlap */}
      <div className="h-16 md:h-20"></div>
    </>
  );
};

export default NavBar;
