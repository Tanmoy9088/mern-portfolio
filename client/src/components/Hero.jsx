import React from "react";
import { Link } from "react-scroll";

function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen w-full flex flex-col justify-center items-center text-white bg-black overflow-hidden"
    >
      {/* 🔄 Animated Gradient Background */}
      <div className="absolute inset-0 animate-gradient bg-gradient-to-r from-purple-700 via-pink-500 to-red-500 opacity-20 blur-2xl"></div>

      {/* Optional Wavy Background using SVG */}
      <svg
        className="absolute bottom-0 w-full h-40"
        viewBox="0 0 1440 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#111827"
          fillOpacity="1"
          d="M0,224L48,202.7C96,181,192,139,288,149.3C384,160,480,224,576,229.3C672,235,768,181,864,144C960,107,1056,85,1152,96C1248,107,1344,149,1392,170.7L1440,192V320H0Z"
        ></path>
      </svg>

      {/* Navbar inside Hero */}
      <div className="absolute top-0 w-full px-6 py-4 flex justify-between items-center bg-black/50 backdrop-blur z-20">
        <div className="text-2xl font-bold text-yellow-300">MyPortfolio</div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 mt-20">
        <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 leading-tight drop-shadow-md animate-fadeIn">
          Welcome to <span className="text-yellow-300">My Portfolio</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 font-light max-w-xl mx-auto tracking-wide animate-fadeIn delay-150">
          I'm a full-stack MERN developer building seamless digital experiences.
        </p>
        <Link
          to="projects"
          smooth={true}
          duration={600}
          className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 hover:scale-105 cursor-pointer"
        >
          View My Work
        </Link>
      </div>
    </section>
  );
}

export default Hero;
