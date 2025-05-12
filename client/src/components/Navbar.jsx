import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { HiMenu, HiX } from 'react-icons/hi';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-gray-300 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-800">Tanmoy9088</div>

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
              className="cursor-pointer nav-link hover:text-blue-700 transition"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none"
          >
            {isOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 bg-gray-300 space-y-3">
          {['home', 'about', 'projects', 'contact'].map((section) => (
            <Link
              key={section}
              to={section}
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setIsOpen(false)}
              className="block text-gray-800 font-medium cursor-pointer hover:text-blue-700 transition"
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
