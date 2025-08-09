import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import ParticlesCanvas from "./ParticlesCanvas";
import "./Hero.css";

function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hue, setHue] = useState(0);

  // Mouse Tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Hue Rotation Animation
  useEffect(() => {
    let frame;
    const animateHue = () => {
      setHue((prev) => (prev + 0.3) % 360); // slow smooth rotation
      frame = requestAnimationFrame(animateHue);
    };
    animateHue();
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section
      id="HOME"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden text-white bg-black"
    >
      {/* 🟡 Particle Background */}
      <ParticlesCanvas hue={hue} />

      {/* 🎯 Color-Shifting Spotlight */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: `radial-gradient(
            400px at ${mousePos.x}px ${mousePos.y}px,
            hsla(${hue}, 100%, 65%, 0.15),
            rgba(0,0,0,0.9)
          )`,
          transition: "background 0.05s",
        }}
      ></div>

      {/* 🔲 Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black/90 z-0"></div>

      {/* 🌟 Hero Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl">
        <h1
          className="font-classy animate-heading text-5xl sm:text-6xl md:text-7xl font-extrabold bg-clip-text text-transparent drop-shadow-lg animate-float"
          style={{
            backgroundImage: `linear-gradient(90deg,
              hsl(${(hue + 0) % 360}, 100%, 65%),
              hsl(${(hue + 60) % 360}, 100%, 65%),
              hsl(${(hue + 120) % 360}, 100%, 65%)
            )`,
          }}
        >
          Hello, I’m <span className="uppercase">Tanmoy das</span>
        </h1>

        <p className="font-classy animate-heading mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto animate-fadeInUp delay-200">
          Crafting immersive and futuristic web experiences with precision and
          style.
        </p>

        <Link
          to="PROJECTS"
          smooth={true}
          duration={600}
          className="inline-block mt-10 px-8 py-3 bg-yellow-400 text-black font-semibold rounded-full hover:shadow-[0_0_20px_#facc15] transition-all hover:scale-105 animate-bounce"
        >
          View My Work
        </Link>
      </div>

      {/* 🌊 Cinematic Bottom Shape */}
      <svg
        className="absolute bottom-0 left-0 w-full h-32"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#000000"
          fillOpacity="1"
          d="M0,160L40,149.3C80,139,160,117,240,122.7C320,128,400,160,480,176C560,192,640,192,720,186.7C800,181,880,171,960,170.7C1040,171,1120,181,1200,186.7C1280,192,1360,192,1400,192L1440,192V320H0Z"
        ></path>
      </svg>
    </section>
  );
}

export default Hero;
