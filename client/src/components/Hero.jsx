import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import ParticlesCanvas from "./ParticlesCanvas";
import "./Hero.css";
// import ParticlesCanvas from "./ParticlesBackground";
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hue, setHue] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      className="relative h-screen w-full flex items-center justify-center overflow-hidden text-[#1D1D1D] bg-[#868B8E]"
    >
      {/* 🟡 Particle Background */}
      <ParticlesCanvas hue={hue} />

      {/* 🎯 Color-Shifting Spotlight */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          //     background: `radial-gradient(
          //   400px at ${mousePos.x}px ${mousePos.y}px,
          //   hsla(${hue}, 100%, 65%, 0.15),
          //   rgba(255,255,255,0.9)
          // )`,
          transition: "background 0.05s",
        }}
      ></div>

      {/* 🔲 Light Overlay */}
      <div className="absolute inset-0 z-0 bg-[#F9F6F0]"></div>
      <div className="h-32 fixed left-2 flex flex-col justify-evenly z-50 lg:flex md:hidden sm:hidden bg-amber-200 p-4 rounded-2xl">
        <div>
          {" "}
          <a
            className="hover:text-blue-600"
            href="https://www.linkedin.com/in/tanmoy9088"
          >
            <FaLinkedinIn />
          </a>
        </div>
        <div>
          <a
            className="hover:text-white hover:bg-black"
            href="https://www.github.com/Tanmoy9088"
          >
            <FaGithub />
          </a>
        </div>
        <div>
          {" "}
          <a
            className="hover:text-white"
            href="https://twitter.com/Tanmoy105Das"
          >
            <FaXTwitter />
          </a>
        </div>
        <div className="hover:bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] rounded-md">
          <a href="https://www.instagram.com/tanmoy_9088/">
            <FaInstagram />
          </a>
        </div>
      </div>
      {/* 🌟 Hero Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl">
        {/* <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#FF0066" d="M59.5,-40.2C75.1,-27.9,84.4,-3.3,76.4,11.8C68.5,26.9,43.4,32.5,23.2,38.6C2.9,44.7,-12.5,51.3,-29.5,48.2C-46.6,45,-65.3,32.1,-65.7,18.4C-66.1,4.7,-48.3,-9.8,-34.3,-21.8C-20.3,-33.7,-10.1,-43.1,5.9,-47.9C22,-52.6,43.9,-52.6,59.5,-40.2Z" transform="translate(100 100)" />
</svg> */}
        <h1 className="animate-heading text-5xl sm:text-6xl md:text-7xl font-extrabold text-[#1e280d] drop-shadow-lg animate-float">
          Hello, I’m{" "}
          <span className="uppercase paint-effect paint-highlight chonburi-regular text-[#FFFFFF]">
            Tanmoy Das
          </span>
        </h1>

        <p className="animate-heading mt-6 sm:text-xl text-[#0f0a24] max-w-2xl mx-auto animate-fadeInUp delay-200">
          Crafting immersive and futuristic web experiences with precision and
          style.
        </p>

        <Link
          to="PROJECTS"
          smooth={true}
          duration={600}
          className="inline-block mt-10 px-8 py-3 bg-[#1E3A8A] text-[#ffffff] hover:text-[#f9dd51] font-semibold rounded-md hover:shadow-[0_0_10px_#514A00] transition-all hover:scale-105"
        >
          View My Work
        </Link>
      </div>

      {/* 🌊 Cinematic Bottom Shape */}
      <svg
        className="absolute bottom-0 left-0 w-full h-32 z-16"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill={`${isScrolled ? "#C4AE78" : "#6F5B3E"}`}
          fillOpacity="1"
          d="M0,160L40,149.3C80,139,160,117,240,122.7C320,128,400,160,480,176C560,192,640,192,720,186.7C800,181,880,171,960,170.7C1040,171,1120,181,1200,186.7C1280,192,1360,192,1400,192L1440,192V320H0Z"
        ></path>
      </svg>
    </section>
  );
}

export default Hero;
