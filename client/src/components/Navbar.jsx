import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { HiMenu, HiX } from 'react-icons/hi';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div
        className={`max-w-7xl mx-auto px-4 ${
          isScrolled ? 'py-3' : 'py-5'
        } flex justify-between items-center transition-all duration-300`}
      >
        {/* Logo */}
        <div className={`text-2xl dancing-script-navbar font-bold ${isScrolled ? 'text-yellow-600' : 'text-blue-200'}`}>
          Tanmoy Das 
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {['home', 'about', 'projects', 'contact'].map((section) => (
            <Link
              key={section}
              to={section}
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              activeClass="active"
              className={`cursor-pointer nav-link font-medium transition-colors duration-300 hover:text-blue-600 ${
                isScrolled ? 'text-yellow-400' : 'text-white'
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`${isScrolled ? 'text-gray-800' : 'text-white'}`}
          >
            {isOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className={`md:hidden px-4 pb-4 ${isScrolled ? 'bg-white/90' : 'bg-gray-900/90'} backdrop-blur-sm`}>
          {['home', 'about', 'projects', 'contact'].map((section) => (
            <Link
              key={section}
              to={section}
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setIsOpen(false)}
              className={`block py-2 text-lg font-medium transition-colors ${
                isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-yellow-300'
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
