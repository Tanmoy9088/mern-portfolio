// src/components/Skills.jsx
import React from "react";
// import { FaReact, FaNodeJs, FaCss3Alt, FaHtml5 } from 'react-icons/fa';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaAws } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiBootstrap,
  SiExpress,
  SiGit,
  SiGithub,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiPostman,
  SiPycharm,
  SiPython,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { motion } from "motion/react";
import { Download } from "lucide-react";

function Skills() {
  // const [isScrolled, setIsScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => setIsScrolled(window.scrollY > 500);
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // Skill data (remains the same)
  const skills = [
    {
      icon: <SiMongodb />,
      color: "text-green-500",
      hover: "hover:bg-green-500",
      label: "MongoDB",
    },
    {
      icon: <SiExpress />,
      color: "text-gray-900",
      hover: "hover:bg-gray-900",
      label: "Express.js",
    },
    {
      icon: <FaReact />,
      color: "text-[#61DBFB]",
      hover: "hover:bg-[#61DBFB]",
      label: "React.js",
    },
    {
      icon: <SiNextdotjs />,
      color: "text-gray-900",
      hover: "hover:bg-gray-900",
      label: "NEXT.JS",
    },
    {
      icon: <FaNodeJs />,
      color: "text-green-500",
      hover: "hover:bg-green-500",
      label: "Node.js",
    },
    {
      icon: <SiTailwindcss />,
      color: "text-sky-400",
      hover: "hover:bg-sky-400",
      label: "TailwindCSS",
    },
    {
      icon: <SiBootstrap />,
      color: "text-violet-600",
      hover: "hover:bg-violet-600",
      label: "BootStrap",
    },
    {
      icon: <IoLogoJavascript />,
      color: "text-yellow-500",
      hover: "hover:bg-yellow-500",
      label: "JavaScript",
    },
    {
      icon: <SiTypescript />,
      color: "text-blue-500",
      hover: "hover:bg-blue-500",
      label: "TypeScript",
    },
    {
      icon: <FaHtml5 />,
      color: "text-orange-600",
      hover: "hover:bg-orange-600",
      label: "HTML5",
    },
    {
      icon: <FaCss3Alt />,
      color: "text-blue-600",
      hover: "hover:bg-blue-600",
      label: "CSS3",
    },
    {
      icon: <SiPostgresql />,
      color: "text-blue-800",
      hover: "hover:bg-blue-800",
      label: "PostgreSQL",
    },
    {
      icon: <SiPostman />,
      color: "text-orange-500",
      hover: "hover:bg-orange-500",
      label: "Postman",
    },
    {
      icon: <FaAws />,
      color: "text-orange-400",
      hover: "hover:bg-orange-400",
      label: "AWS",
    },
    {
      icon: <SiGit />,
      color: "text-orange-700",
      hover: "hover:bg-orange-700",
      label: "Git",
    },
    {
      icon: <SiGithub />,
      color: "text-gray-800",
      hover: "hover:bg-gray-800",
      label: "GitHub",
    },
    {
      icon: <SiPycharm />,
      color: "text-yellow-600",
      hover: "hover:bg-yellow-600",
      label: "PyCharm",
    },
    {
      icon: <SiPython />,
      color: "text-blue-700",
      hover: "hover:bg-blue-700",
      label: "Python",
    },
  ];

  // --- Animation Variants (Unchanged) ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const slideInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const skillsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3,
      },
    },
  };

  const skillItemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 12,
      },
    },
  };

  return (
    <section id="skills" data-scroll-section className="z-[-10] bg-[#FFFFFF]">
      {/* Skills Section */}
      <motion.div
        data-scroll
        data-scroll-speed="-.3"
        className="text-center py-32 z-[-10]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={skillsContainerVariants}
      >
        <span
          // data-scroll
          // data-scroll-speed="-.3"
          className="heading-sec__main mb-20 text-4xl z-[-10] font-extrabold tracking-tight text-gray-900 inline-block"
        >
          Skills
        </span>

        <motion.div
          data-scroll
          // data-scroll-speed="-0.1"
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 p-10 max-w-4xl mx-auto"
          variants={skillsContainerVariants}
        >
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              className={`group relative p-4 pt-10 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform 
                bg-white/95 border border-gray-100 backdrop-blur-sm 
                ${skill.hover} `}
              variants={skillItemVariants}
              whileHover={{
                scale: 1.05,
                rotate: 1,
                transition: { duration: 0.2 },
              }}
              style={{
                borderRadius: "30% 20% 40% 15% / 20% 35% 15% 40%",
              }}
            >
              <div
                className={`${skill.color} text-5xl sm:text-6xl mx-auto mb-3 transition-all duration-300 group-hover:text-white group-hover:scale-110`}
              >
                {skill.icon}
              </div>
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 transition-colors duration-300 group-hover:text-white">
                {skill.label}
              </h4>
            </motion.div>
          ))}
        </motion.div>

        {/* Resume Button - Unchanged */}
        <motion.a
          data-scroll
          // data-scroll-offset="100%"
          // data-scroll-speed="-0.1"
          href="/Tanmoy_Das_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center my-10 space-x-3 bg-[#1E3A8A] text-white py-4 px-10 rounded-full font-bold text-lg tracking-wide shadow-xl transition-all duration-300 cursor-pointer 
              hover:bg-[#0f214f] hover:text-yellow-400 hover:shadow-2xl hover:shadow-[#1E3A8A]/50`}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 25px rgba(30, 58, 138, 0.4)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          <Download size={22} />
          <span>View My Resume</span>
        </motion.a>
      </motion.div>
    </section>
  );
}

export default Skills;
