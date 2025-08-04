import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "./Hero.css"; // make sure animations are defined here
import ParticlesCanvas from "./ParticlesCanvas";
function Hero() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="HOME"
      className="bg-zoom-hero relative h-screen w-full bg-cover bg-center bg-no-repeat text-white flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/Portfolio(3).png')",
        backgroundColor: "#db188a",
      }}
    >
      {/* 🟡 THREE.JS PARTICLE BACKGROUND */}
      <ParticlesCanvas />

      {/* 🔲 Dark Overlay */}
      <div className="absolute inset-0 bg-opacity-60 z-0"></div>

      {/* 🎨 Grid Background */}
      {/* <div className="absolute inset-0 z-0 grid grid-cols-10 grid-rows-5 gap-1 opacity-20 pointer-events-none">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="w-full h-full transition duration-300 ease-in-out transform hover:scale-125 hover:shadow-md hover:shadow-pink-400 rounded-sm"
            style={{
              backgroundColor: `hsl(${Math.random() * 360}, 70%, 60%)`,
              opacity: `${Math.random() * 0.2 + 0.05}`,
            }}
          ></div>
        ))} */}
      {/* </div> */}

      {/* 🎯 Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold animate-fadeInUp">
          Hello, I'm <span className="text-yellow-400">Tanmoy</span>
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-300 animate-fadeInUp delay-300">
          A passionate developer crafting smooth web experiences.
        </p>
        <Link
          to="PROJECTS"
          smooth={true}
          duration={600}
          className="inline-block mt-8 bg-yellow-400 hover:bg-white hover:text-yellow-300 text-black font-semibold py-3 px-8 rounded-full shadow-xl transition-transform transform hover:scale-105 animate-fadeInUp delay-500 cursor-pointer"
        >
          View My Work
        </Link>
      </div>

      {/* 🌊 Bottom Wave */}
      <svg
        className="absolute bottom-0 left-0 w-full h-24 md:h-32"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#111827"
          d="M0,160L40,149.3C80,139,160,117,240,122.7C320,128,400,160,480,176C560,192,640,192,720,186.7C800,181,880,171,960,170.7C1040,171,1120,181,1200,186.7C1280,192,1360,192,1400,192L1440,192V320H0Z"
        ></path>
      </svg>
    </section>
  );
}

export default Hero;
