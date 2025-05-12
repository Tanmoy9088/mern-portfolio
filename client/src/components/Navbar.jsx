import React from 'react';
import { Link } from 'react-scroll';

function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-gray-300 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800">MyPortfolio</div>
        <div className="space-x-6">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            activeClass="active"
            className="cursor-pointer nav-link"
          >
            Home
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            activeClass="active"
            className="cursor-pointer nav-link"
          >
            About
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            activeClass="active"
            className="cursor-pointer nav-link"
          >
            Projects
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            activeClass="active"
            className="cursor-pointer nav-link"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
