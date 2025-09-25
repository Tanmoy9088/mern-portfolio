import React, { useEffect, useState, useMemo } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

function Footer() {
  const [showTopButton, setShowTopButton] = useState(false);

  // Show button when scrollY > 300px
  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Generate floating dots once (to avoid re-randomizing)
  const dots = useMemo(
    () =>
      Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 10}s`,
        duration: `${4 + Math.random() * 6}s`,
      })),
    []
  );

  // Scroll smoothly to top
  const scrollToTop = () => {
    document.getElementById("HOME")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#003786] text-white pt-12 pb-10 overflow-hidden">
      {/* ✨ Floating Dots Animation */}
      <ul className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        {dots.map((dot) => (
          <li
            key={dot.id}
            className="absolute w-3 h-3 bg-yellow-400 rounded-full opacity-20 animate-float"
            style={{
              top: dot.top,
              left: dot.left,
              animationDelay: dot.delay,
              animationDuration: dot.duration,
            }}
          />
        ))}
      </ul>

      {/* Brand / About */}
      <div className="text-left relative z-10 max-w-6xl mx-auto px-6">
        <h4 className="text-3xl font-bold mb-4">TANMOY DAS</h4>
        <p className="text-gray-300 mb-10 max-w-xl">
          Passionate MERN Stack Developer 🚀. Building scalable apps and
          interactive UIs with React, Node.js, MongoDB, and more.
        </p>

        {/* Social Links */}
        <h3 className="font-medium text-lg text-right mb-6">SOCIAL MEDIA</h3>
        <div className="flex justify-end gap-6 text-2xl mb-8">
          <a
            href="https://github.com/Tanmoy9088"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-black bg-gray-200/20 p-4 rounded-full hover:bg-white/40 transition-transform transform hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/tanmoy9088"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-600 bg-gray-200/20 p-4 rounded-full hover:bg-white/40 transition-transform transform hover:scale-110"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://twitter.com/Tanmoy105Das"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-black bg-gray-200/20 p-4 rounded-full hover:bg-white/40 transition-transform transform hover:scale-110"
          >
            <FaXTwitter />
          </a>
          <a
            href="mailto:tanmoyd9088@gmail.com"
            aria-label="Email"
            className="hover:text-red-500 bg-gray-200/20 p-4 hover:bg-white/40 rounded-full transition-transform transform hover:scale-110"
          >
            <SiGmail />
          </a>
        </div>

        <hr className="mb-6 h-px bg-gray-600 border-0" />

        {/* Footer Content */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2 text-yellow-400">
            Let’s Connect
          </h2>
          <p className="text-gray-300 max-w-md mx-auto mb-6">
            Open to opportunities, collaborations, or just a friendly chat 👋.
          </p>
        </div>

        {/* Copyright */}
        <p className="text-center text-gray-400 text-sm">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-white">Tanmoy9088</span>. Built
          with ❤️ using React & Tailwind CSS.
        </p>
      </div>

      {/* Back to Top Button */}
      {showTopButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-2 right-2 z-50 bg-yellow-400 hover:bg-yellow-500 text-black p-3 rounded-full shadow-xl transition-transform transform hover:scale-110"
          aria-label="Back to top"
        >
          <svg
            className="w-2 h-2 transition-transform duration-300 group-hover:-translate-y-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
    </footer>
  );
}

export default Footer;
