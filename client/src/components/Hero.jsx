import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "motion/react";

function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hue, setHue] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  // ... (Hooks remain unchanged)
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    let frame;
    const animateHue = () => {
      setHue((prev) => (prev + 0.05) % 360);
      frame = requestAnimationFrame(animateHue);
    };
    animateHue();
    return () => cancelAnimationFrame(frame);
  }, []);

  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      data-scroll-section
      id="HOME"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden text-[#1D1D1D] bg-[#FFFFFF] p-1"
    >
      {/* 🎯 Optimized Color-Shifting Spotlight */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: `radial-gradient(
            500px at ${mousePos.x}px ${mousePos.y}px,
            hsla(${hue}, 80%, 65%, 0.1),
            rgba(249, 250, 251, 0.5)
          )`,
          transition: "background 0.05s",
        }}
      ></div>

      {/* 📱 Fixed Social Sidebar (Layer 2) */}
      <div
        data-scroll-speed=".1"
        data-scroll
        data-scroll-sticky
        data-scroll-target="#social"
        id="social"
        className="absolute md:fixed left-2 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-4 z-50"
      >
        {/* Line separator for visual grounding */}
        <div className="w-px h-16 bg-gray-400"></div>

        <a
          className="text-2xl text-gray-700 hover:text-blue-600 transition-colors duration-300 transform hover:scale-110"
          href="https://www.linkedin.com/in/tanmoy9088"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn />
        </a>
        <a
          className="text-2xl text-gray-700 hover:text-black transition-colors duration-300 transform hover:scale-110"
          href="https://www.github.com/Tanmoy9088"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          className="text-2xl text-gray-700 hover:text-gray-900 transition-colors duration-300 transform hover:scale-110"
          href="https://twitter.com/Tanmoy105Das"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X (Twitter)"
        >
          <FaXTwitter />
        </a>
        <a
          className="text-2xl text-gray-700 hover:text-pink-500 transition-colors duration-300 transform hover:scale-110"
          href="https://www.instagram.com/tanmoy_9088/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <div className="w-px h-16 bg-gray-400"></div>
      </div>

      {/* 🌟 Hero Content (Layer 3) */}
      <div
        data-scroll
        // data-scroll-section
        data-scroll-speed="-0.7"
        className="relative z-20 text-center px-6 max-w-5xl"
      >
        {/* Animated Heading (TANMOY DAS) */}
        <motion.h1
          className="text-6xl md:text-8xl font-bold text-[#111827]"
          // initial="hidden"
          // animate="visible"
          // variants={contentVariants}
          // transition={{ duration: 0.8 }}
        >
          <span className="text-xl md:text-3xl font-light text-gray-600 block mb-2">
            Hi, I'm
          </span>
          <span className="relative inline-block">
            <span
              className={`text-6xl md:text-8xl font-[inter] font-black tracking-wide transition-colors duration-500 ${
                isScrolled ? "text-[#0f0a24]" : "text-[#1E3A8A]"
              }`}
            >
              TANMOY DAS
            </span>
          </span>
        </motion.h1>

        {/* BOLD HEADLINE (Replaces old subtitle) */}
        <motion.h2
          className="mt-6 text-2xl sm:text-4xl font-extrabold text-[#374151] max-w-4xl mx-auto tracking-tight"
          initial="hidden"
          animate="visible"
          variants={contentVariants}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          I transform complex problems into
          <span className="text-[#1E3A8A] border-b-4 border-yellow-400 pl-2">
            SIMPLE
          </span>
          ,<span className="text-[#1E3A8A]"> PERFORMANT CODE.</span>
        </motion.h2>

        {/* Animated CTA Button */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={contentVariants}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link
            to="PROJECTS"
            smooth={true}
            duration={600}
            className="inline-block mt-12 px-10 py-4 bg-[#1E3A8A] text-[#ffffff] font-semibold rounded-full 
                      shadow-xl hover:bg-[#0f214f] hover:shadow-2xl hover:shadow-[#1E3A8A]/50 transition-all cursor-pointer hover:scale-[1.03]"
          >
            View My Work
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
