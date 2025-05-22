'use client';

import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#FF9933]/10 to-[#FF9933]/20 border-t border-[#FF9933]/30">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and brief info */}
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start">
              <div className="w-10 h-10 rounded-full bg-[#FF9933] flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <h3 className="text-2xl font-bold text-[#05445E] font-serif">SARVSEVAK</h3>
            </div>
            <p className="mt-3 text-gray-600 max-w-xs">
              Building connections through service and dialogue.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-end">
            <h4 className="text-sm font-semibold text-[#05445E] mb-4 uppercase tracking-wider">
              Connect With Us
            </h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-[#FF9933] transition-colors" aria-label="Instagram">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#189AB4] transition-colors" aria-label="Twitter">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#05445E] transition-colors" aria-label="LinkedIn">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors" aria-label="GitHub">
                <FaGithub size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-[#FF9933]/20 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Sarvsevak. Made with ❤️ by students.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
