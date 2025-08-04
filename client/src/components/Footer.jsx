import React, { useEffect, useState } from "react";

import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
  const [showTopButton, setShowTopButton] = useState(false);
  // Show the button when the user scrolls down 300px
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTopButton(true);
      } else {
        setShowTopButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="relative bg-gray-900 text-white pt-24 pb-10 overflow-hidden">
      {/* 🌊 Wavy Top Divider */}
      {/* <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          className="relative block w-full h-20"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#111827"
            fillOpacity="1"
            d="M0,224L48,202.7C96,181,192,139,288,149.3C384,160,480,224,576,229.3C672,235,768,181,864,144C960,107,1056,85,1152,96C1248,107,1344,149,1392,170.7L1440,192V0H0Z"
          ></path>
        </svg>
      </div>  */}

      {/* ✨ Floating Dots Animation */}
      <ul className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <li
            key={i}
            className="absolute w-3 h-3 bg-yellow-400 rounded-full opacity-20 animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${4 + Math.random() * 6}s`,
            }}
          ></li>
        ))}
      </ul>

      {/* Footer Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-4 text-yellow-400">
          Let's Connect
        </h2>
        <p className="text-gray-300 max-w-xl mx-auto mb-6">
          I’m open to new opportunities, collaborations, or just a friendly
          chat. Reach out!
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-3xl mb-8">
          <a
            href="https://github.com/Tanmoy9088"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-black hover:bg-white hover:rounded-4xl transition-transform transform hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/tanmoy9088"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-white transition-transform transform hover:scale-110"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://twitter.com/Tanmoy105Das"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-400 hover:text-white transition-transform transform hover:scale-110"
          >
            <FaTwitter />
          </a>
          <a
            href="mailto:tanmoyd9088@gmail.com"
            className="text-red-500 hover:text-white hover:bg-red-500 hover:margin-0 hover:p-0 transition-transform transform hover:scale-110"
          >
            < MdEmail />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-white">Tanmoy9088</span>. Built
          with ❤️ using React & Tailwind CSS.
        </p>
      </div>
      {/* Back to Top Button */}
      {showTopButton && (
        <div className="fixed bottom-6 right-6 z-50">
          <a
            href="#home"
            className="group bg-yellow-400 hover:bg-yellow-500 text-black p-3 rounded-full shadow-xl transition-transform transform hover:scale-110"
            aria-label="Back to top"
          >
            <svg
              className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 15l7-7 7 7"
              />
            </svg>
          </a>
        </div>
      )}
    </footer>
  );
}

export default Footer;
