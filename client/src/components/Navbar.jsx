import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { HiMenu, HiX } from 'react-icons/hi';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-20 transition-all duration-300 ${
        isScrolled ? '' : 'bg-transparent'
      }`}
    >
      <div
        className={`max-w-7xl mx-auto px-4 ${
          isScrolled ? 'py-3' : 'py-5'
        } flex justify-between items-center transition-all duration-300`}
      >
        {/* Logo */}
        <div
          className={`text-xl dancing-script-navbar font-bold transition-all duration-300 ${
            isScrolled
              ? 'text-white bg-gray-900 border-2 rounded-4xl px-2 hover:text-black hover:bg-white'
              : 'text-gray-400'
          }`}
        >
          {isScrolled ? 'TANMOY' : ''}
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {['HOME', 'BIO', 'PROJECTS', 'CONTACT'].map((section) => (
            <Link
              key={section}
              to={section}
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              activeClass="active"
              className={`cursor-pointer nav-link font-medium transition-colors duration-300 hover:text-red-600 ${
                isScrolled ? 'text-gray-800' : 'text-white'
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
            className={`transition-colors duration-300 ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}
          >
            {isOpen ? <HiX className="h-6 w-6 text-white" /> : <HiMenu className="h-6 w-6 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu (with animation) */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out transform origin-top ${
          isOpen ? 'max-h-96 opacity-100 scale-y-100' : 'max-h-0 opacity-0 scale-y-95'
        } ${isScrolled ? 'bg-white/90' : 'bg-gray-900/90'} backdrop-blur-sm px-4`}
      >
        {['HOME', 'BIO', 'PROJECTS', 'CONTACT'].map((section) => (
          <Link
            key={section}
            to={section}
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            onClick={() => setIsOpen(false)}
            className={`block py-2 text-lg font-medium transition-colors duration-300 ${
              isScrolled
                ? 'text-gray-800 hover:text-blue-600'
                : 'text-white hover:text-yellow-300'
            }`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
