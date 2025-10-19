import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import ParticlesCanvas from "./ParticlesCanvas";
import "./Hero.css";
// import ParticlesCanvas from "./ParticlesBackground";
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Hero() {
  const texts = [
    // "Hello, I’m Tanmoy Das",
    // "A Full Stack Web Developer",
    // "A Designer",
    // "A Programmer",
  ]; // cycle between these
  const [index, setIndex] = useState(0);
  // const [fade, setFade] = useState(false);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     // fade out first
  //     setFade(false);
  //     setTimeout(() => {
  //       setIndex((prev) => (prev + 1) % texts.length);
  //       setFade(true);
  //     }, 500); // fade duration
  //   }, 3000); // change every 3s

  //   return () => clearInterval(interval);
  // }, [texts.length]);
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
      className="relative h-screen w-full flex items-center justify-center overflow-hidden text-[#1D1D1D] bg-[#F9FAFB]"
    >
      {/* 🟡 Particle Background */}
      {/* <ParticlesCanvas hue={hue} /> */}

      {/* 🎯 Color-Shifting Spotlight */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: `radial-gradient(
            400px at ${mousePos.x}px ${mousePos.y}px,
            hsla(${hue}, 100%, 65%, 0.15),
            rgba(255,255,255,0.9)
          )`,
          transition: "background 0.05s",
        }}
      ></div>

      {/* 🔲 Light Overlay */}
      {/* <div className="absolute inset-0 z-0 bg-[#F9FAFB]"></div> */}
      <div className="h-32 invisible md:visible  md:absolute left-2 flex flex-col justify-evenly z-50 bg-white/80 p-4 rounded-xl shadow-lg">
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
      <div className="relative z-20 text-center px-6 max-w-5xl">
        {/* <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#FF0066" d="M59.5,-40.2C75.1,-27.9,84.4,-3.3,76.4,11.8C68.5,26.9,43.4,32.5,23.2,38.6C2.9,44.7,-12.5,51.3,-29.5,48.2C-46.6,45,-65.3,32.1,-65.7,18.4C-66.1,4.7,-48.3,-9.8,-34.3,-21.8C-20.3,-33.7,-10.1,-43.1,5.9,-47.9C22,-52.6,43.9,-52.6,59.5,-40.2Z" transform="translate(100 100)" />
</svg> */}
        <h1 className="hero-h1 chonburi-regular sm:text-2xl md:text-6xl font-extrabold text-[#111827] drop-shadow-lg animate-float">
          <div
            className={`text-2xl inline-block mx-2 font-light tracking-widest relative group cursor-pointer ${
              isScrolled ? "text-[#0f0a24]" : "text-[#1E3A8A]"
            }`}
          >
            <h1> Hi, I'M</h1>

            <span class="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-yellow-400">
              {[..."TANMOY DAS"].map((letter, i) => (
                <span
                  key={i}
                  className={`relative inline w-full transition-all duration-500
        ${letter === " " ? "w-2" : "opacity-100 animate-drop"}`}
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  {letter}
                </span>
              ))}
            </span>

            {/* Underline effect */}
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-current transition-all duration-500 group-hover:w-full"></span>
          </div>
        </h1>

        <p className="animate-heading mt-6 sm:text-xl text-[#374151] max-w-2xl mx-auto animate-fadeInUp delay-200">
          Crafting immersive and futuristic web experiences with precision and
          style.
        </p>

        <Link
          to="PROJECTS"
          smooth={true}
          duration={600}
          className="inline-block mt-10 px-8 py-3 bg-[#1E3A8A] text-[#ffffff] hover:text-yellow-400 font-semibold rounded-md hover:shadow-lg hover:shadow-yellow-400/50 transition-all hover:scale-105"
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
          fill={`${isScrolled ? "#3B82F6" : "#1E3A8A"}`}
          fillOpacity="1"
          d="M0,160L40,149.3C80,139,160,117,240,122.7C320,128,400,160,480,176C560,192,640,192,720,186.7C800,181,880,171,960,170.7C1040,171,1120,181,1200,186.7C1280,192,1360,192,1400,192L1440,192V320H0Z"
        ></path>
      </svg>
    </section>
  );
}

export default Hero;
