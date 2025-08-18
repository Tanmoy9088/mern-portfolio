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
      color: "text-white",
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
        isScrolled
          ? "bg-[#F9F6F0] text-[#171515]"
          : "bg-[#cfcece] text-[#B3B3B3]"
      }`}
    >
      {/* Bio Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <span className="heading-sec__main">About Me</span>
        <p className={`text-lg font-light max-w-2xl mx-auto text-gray-900 leading-relaxed animate-fadeInUp${isScrolled? "": ""}`}>
          I’m <span className="font-semibold">Tanmoy</span>, a passionate{" "}
          <span className="font-semibold">Full-Stack MERN Developer</span> who
          thrives on building fast, scalable, and visually appealing web
          applications. I love transforming ideas into functional products that
          balance clean design with efficient, maintainable code.
        </p>
      </div>

      {/* Details */}
      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-16">
        <div className="p-6 rounded-xl shadow-lg backdrop-blur-md hover:shadow-yellow-500/30 transition text-[#122620] bg-[#E9EAEC]">
          <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
          <p className="text-lg text-[#000000] leading-relaxed">
            My coding journey began with small experiments—simple websites,
            interactive games, and tools that made daily life easier. That
            curiosity evolved into a deep focus on{" "}
            <span className="font-semibold">
              modern, high-performance web experiences
            </span>
            .
          </p>
        </div>

        <div className="p-6 rounded-xl shadow-lg backdrop-blur-md hover:shadow-yellow-500/30 transition bg-[#E9EAEC]">
          <h3 className="text-2xl font-semibold mb-4">Beyond Coding</h3>
          <p className="text-lg text-black leading-relaxed">
            When I’m not coding, I’m capturing moments through{" "}
            <span className="font-semibold">photography</span>, playing{" "}
            <span className="font-semibold">football</span>, or strategizing
            over <span className="font-semibold">chess</span>. Creativity comes
            from exploring beyond the screen.
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="text-center">
        <span className="heading-sec__main">
          Skills
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className={`group p-6 bg-[#6699CC] rounded-lg shadow-md hover:shadow-xl transition-all transform hover:scale-105 ${skill.hover}`}
            >
              <div
                className={`${skill.color} text-6xl mx-auto mb-4 group-hover:text-white transition-colors duration-300`}
              >
                {skill.icon}
              </div>
              <h4 className="text-xl font-clean font-semibold text-[#F9F6F0] group-hover:text-white transition-colors duration-300">
                {skill.label}
              </h4>
            </div>
          ))}
        </div>
        {/* Resume Button */}
        <div className="mt-16 text-center">
          <a
            href="/WebDevResume5.pdf"
            className="inline-block bg-gold bg-[#DC2626] text-white py-3 px-8 rounded-xl font-semibold tracking-wide shadow-lg hover:bg-[#171515]/70 hover:text-[#f9f6f0] hover:shadow-gold/50 transition-all"
          >
            View My Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
