import React, { useEffect, useState } from "react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";

function About() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skills = [
    {
      icon: <SiMongodb />,
      color: "text-green-500",
      hover: "hover:bg-green-500",
      label: "MongoDB",
    },
    {
      icon: <SiExpress />,
      color: "text-black",
      hover: "hover:bg-black",
      label: "Express.js",
    },
    {
      icon: <FaReact />,
      color: "text-[#61DBFB]",
      hover: "hover:bg-[#61DBFB]",
      label: "React.js",
    },
    {
      icon: <FaNodeJs />,
      color: "text-green-500",
      hover: "hover:bg-green-500",
      label: "Node.js",
    },
    {
      icon: <SiTailwindcss />,
      color: "text-sky-300",
      hover: "hover:bg-sky-300",
      label: "TailwindCSS",
    },
    {
      icon: <IoLogoJavascript />,
      color: "text-yellow-500",
      hover: "hover:bg-yellow-500",
      label: "JavaScript",
    },
    {
      icon: <FaHtml5 />,
      color: "text-orange-500",
      hover: "hover:bg-orange-500",
      label: "HTML5",
    },
    {
      icon: <FaCss3Alt />,
      color: "text-blue-400",
      hover: "hover:bg-blue-400",
      label: "CSS3",
    },
  ];

  return (
    <section
      id="BIO"
      className={`py-24 px-6 transition-all duration-500 ${
        isScrolled ? "bg-black text-[#0c90dc]" : "bg-black text-[#f4fbff]"
      }`}
    >
      {/* Bio Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <span class="heading-sec__main">About Me</span>
        <p className="text-lg font-clean font-light max-w-2xl mx-auto text-gray-300 leading-relaxed">
          I'm a passionate full-stack MERN developer who loves crafting
          immersive digital experiences. From responsive UIs to optimized
          back-end services, I enjoy both sides of the stack.
        </p>
      </div>

      {/* Bio Details */}
      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-16">
        <div className="p-6 bg-white/5 rounded-xl shadow-lg backdrop-blur-md hover:shadow-gold/30 transition">
          <h3 className="text-2xl text-gold mb-4">
            My Journey
          </h3>

          <p className="text-lg font-clean font-light text-gray-300 leading-relaxed">
            I began my coding journey 1 year ago and quickly grew passionate
            about building scalable web applications using the MERN stack.
          </p>
          <p className="text-lg font-clean font-light text-gray-300 leading-relaxed">
            I stay updated with the latest tech trends to keep delivering
            modern, high-quality solutions.
          </p>
        </div>

        <div className="p-6 bg-white/5 rounded-xl shadow-lg backdrop-blur-md hover:shadow-gold/30 transition">
          <h3 className="text-2xl text-gold mb-4">Fun Fact</h3>
          <p className="text-lg font-clean font-light text-gray-300 leading-relaxed">
            Outside of coding, I'm an avid photographer, love football, and
            enjoy chess. I believe in balancing work and play for creativity.
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="text-center">
        <h3 className="heading-sec__main text-4xl text-gold mb-14 tracking-wide hover:text-amber-600 hover:decoration-blue-600">
          SKILLS
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className={`group p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all transform hover:scale-105 ${skill.hover}`}
            >
              <div
                className={`${skill.color} text-6xl mx-auto mb-4 group-hover:text-white transition-colors duration-300`}
              >
                {skill.icon}
              </div>
              <h4 className="text-xl font-clean font-semibold text-black group-hover:text-white transition-colors duration-300">
                {skill.label}
              </h4>
            </div>
          ))}
        </div>
      </div>

      {/* Resume Button */}
      <div className="mt-16 text-center">
        <a
          href="/WebDevResume5.pdf"
          className="inline-block bg-gold bg-amber-500 text-white py-3 px-8 rounded-full font-semibold tracking-wide shadow-lg hover:bg-yellow-500 hover:shadow-gold/50 transition-all"
        >
          View My Resume
        </a>
      </div>
    </section>
  );
}

export default About;
