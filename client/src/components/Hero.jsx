import React from "react";
import { Link } from "react-scroll";
import "./Hero.css"; // custom animation styles

function Hero() {
  return (
    <section
      id="home"
      className="hero-bg relative h-screen w-full flex flex-col justify-center items-center text-black  overflow-hidden"
    >
      {/* 🎨 Stylish Grid Art Overlay */}
      <div className="absolute bg-[#402828] inset-0 z-0 grid grid-cols-10 grid-rows-5 gap-1  pointer-events-none">
        {/* {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="w-full h-full float-art"
            style={{
              backgroundColor: `hsl(${Math.random() * 360}, 70%, 60%)`,
              opacity: `${Math.random() * 0.4 + 0.1}`,
              borderRadius: "2px",
            }}
          ></div> */}
        {/* ))} */}
      </div>

      {/* 🌊 Bottom Wave */}
      {/* <svg
        className="absolute bottom-0 left-0 w-full h-24 md:h-32"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#0f172a"
          d="M0,160L40,149.3C80,139,160,117,240,122.7C320,128,400,160,480,176C560,192,640,192,720,186.7C800,181,880,171,960,170.7C1040,171,1120,181,1200,186.7C1280,192,1360,192,1400,192L1440,192V320H0Z"
        ></path>
      </svg> */}

      {/* 🎯 Hero Content */}
      <div className="relative z-10 text-center px-4 mt-20 animate-fadeInUp">
        <div>
          <img
            className=" w-full h-full object-cover mb-6"
            src="./public/Portfolio.png"
            alt="Tanmoy's Image"
          />
        </div>
      

        {/* <Link
          to="projects"
          smooth={true}
          duration={600}
          className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 hover:scale-105 cursor-pointer"
        >
          View My Work
        </Link> */}
      </div>
    </section>
  );
}

export default Hero;
