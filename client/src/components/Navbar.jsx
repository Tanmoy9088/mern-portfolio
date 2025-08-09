import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { HiMenu, HiX } from "react-icons/hi";
import AnimatedLink from "./AnimatedLink";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full h-16 z-50 transition-colors duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-sm  hover:bg-[#d7d7f3e6] "
          : "bg-transparent  hover:bg-[#29191bac] "
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="absolute top-1 left-4 space-x-2 p-2 rounded-md ">
          <a
            className="flex items-center"
            href="https://tanmoy9088-portfolio-3eym.vercel.app"
          >
            <div className="w-10 h-10 inline-block rounded-sm overflow-hidden hover:scale-110 transition-transform hover:rotate-12">
              <img src="/tanmoy_das_(3).png" alt="logo" />
            </div>
            <div
              className={`text-2xl inline-block mx-2 font-light tracking-widest relative group cursor-pointer ${
                isScrolled ? "text-gray-800" : "text-[#f8fbf88f]"
              }`}
            >
              {[..."TANMOY"].map((letter, i) => (
                <span
                  key={i}
                  className="inline-block transition-all duration-300 transform group-hover:-translate-y-1 group-hover:opacity-80 "
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  {letter}
                </span>
              ))}

              {/* Underline */}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-current transition-all duration-300 group-hover:w-full"></span>
            </div>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="absolute right-5 top-5 hidden md:flex space-x-10 text-black font-light">
          {["HOME", "BIO", "PROJECTS", "CONTACT"].map((section) => (
            <Link
              key={section}
              to={section}
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              activeClass="active"
              className={`font-medium ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
            >
              <AnimatedLink text={section} />
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="absolute right-0 top-2 md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <HiX className="h-6 w-6" />
          ) : (
            <HiMenu className="h-6 w-6" />
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
          {["BIO", "PROJECTS", "CONTACT"].map((section) => (
            <Link
              key={section}
              to={section}
              spy
              smooth
              duration={500}
              offset={-70}
              onClick={() => setIsOpen(false)}
              className="hover:text-yellow-400 transition-colors duration-200"
            >
              {section}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
