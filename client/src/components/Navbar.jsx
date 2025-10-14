import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { HiMenu, HiX } from "react-icons/hi";
import ToogleDarkMode from "./ToogleDarkMode";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);



  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const menuItems = ["HOME", "BIO", "PROJECTS", "CONTACT"];

  return (
    <nav
      className={`fixed scroll-smooth top-0 w-full h-18 z-50 transition-colors duration-300 ${
        isScrolled
          ? "bg-[#1E3A8A] backdrop-blur-sm text-[white]"
          : "bg-transparent text-gray-900"
      }`}
    >
      <div className="mx-auto px-2 md:px-8 py-2 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          className={`flex items-center space-x-2 p-2 rounded-md ${isScrolled?'bg-transparent':'bg-white shadow-md'} Hero `}
        >
          <div
            className={`w-10 h-10 rounded-sm overflow-hidden hover:scale-110 transition-transform hover:rotate-12 ${
              isScrolled ? "rounded-lg" : ""
            }`}
          >
            <img
              className={`${isScrolled ? "rounded-4xl" : ""}`}
              src="/tanmoy_das_(3).png"
              alt="logo"
            />
          </div>
          <div
            className={`text-2xl mx-2 font-light tracking-widest relative group cursor-pointer ${
              isScrolled ? "text-[white]" : "text-[#1E3A8A] "
            }`}
          >
            {[..."TANMOY"].map((letter, i) => (
              <span
                key={i}
                className="inline-block transition-all duration-300 transform group-hover:-translate-y-1 group-hover:opacity-80"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                {letter}
              </span>
            ))}
            <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-0 h-[2px] bg-current transition-all duration-300 group-hover:w-full"></span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 font-light">
          {menuItems.map((section) => (
            <Link
              key={section}
              to={section}
              spy={true}
              smooth={true}
              duration={300}
              offset={-70}
              activeClass="active-link"
              className={`relative font-medium cursor-pointer after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 hover:after:w-full ${
                isScrolled
                  ? "text-[#C2CAD0] hover:text-yellow-400"
                  : "text-[#1E3A8A]"
              }`}
            >
              {section}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <HiX className="h-6 w-6 text-white" />
          ) : (
            <HiMenu className="h-6 w-6 text-white hover:text-[#cca43b]" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden bg-black/80 backdrop-blur-sm transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-60 py-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-center space-y-4 text-white font-light">
          {menuItems.slice(1).map((section) => (
            <Link
              key={section}
              to={section}
              spy
              smooth
              duration={500}
              offset={-70}
              onClick={() => setIsOpen(false)}
              activeClass="active-link"
              className="relative cursor-pointer after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              {section}
            </Link>
          ))}
        </div>
      </div>
      {/* <ToogleDarkMode /> */}
    </nav>
  );
}

export default Navbar;
