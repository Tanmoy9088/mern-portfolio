import React, { useEffect, useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGit,
  FaAws,
  FaPooStorm,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiBootstrap,
  SiExpress,
  SiGit,
  SiGithub,
  SiGnubash,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiPostman,
  SiPycharm,
  SiPython,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { motion } from 'framer-motion';
import {Download, ChevronsDown} from 'lucide-react';


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
      icon: <SiNextdotjs />,
      color: "text-black",
      hover: "hover:bg-black",
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
      color: "text-sky-300",
      hover: "hover:bg-sky-300",
      label: "TailwindCSS",
    },
    {
      icon: <SiBootstrap />,
      color: "text-violet-600",
      hover: "hover:bg-black",
      label: "BootStrap",
    },
    {
      icon: <IoLogoJavascript />,
      color: "text-yellow-500",
      hover: "hover:bg-yellow-400",
      label: "JavaScript",
    },
    {
      icon: <SiTypescript />,
      color: "text-blue-500",
      hover: "hover:bg-blue-400",
      label: "TypeScript",
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

    {
      icon: <SiPostgresql />,
      color: "text-blue-900",
      hover: "hover:bg-blue-900",
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
      color: "text-blue-400",
      hover: "hover:bg-blue-400",
      label: "aws",
    },
    {
      icon: <SiGit />,
      color: "text-orange-600",
      hover: "hover:bg-orange-600",
      label: "git",
    },
    {
      icon: <SiGithub />,
      color: "text-black",
      hover: "hover:bg-black",
      label: "Github",
    },
    {
      icon: <SiPycharm />,
      color: "text-black",
      hover: "hover:bg-black",
      label: "Pycharm",
    },
    {
      icon: <SiPython />,
      color: "text-black",
      hover: "hover:bg-black",
      label: "Python",
    },
  ];
  // --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Delay between child animations
    },
  },
};

const slideInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const skillsContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07, // Small delay between each skill tile
      delayChildren: 0.2,    // Delay before the first tile starts
    },
  },
};

const skillItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    },
  },
};


  return (
   <motion.section
  className="w-full mx-auto py-16 px-4 sm:px-6 lg:px-8 bg-[#f2f1ec]"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of section is visible
  variants={containerVariants}
>
  {/* Primary "About Me" Header and Text - Sliding Font Effect */}
  <motion.div 
    className="max-w-4xl mx-auto text-center mb-12"
    variants={slideInVariants} // Animate the header block
  >
    <span className="heading-sec__main text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
      About Me
    </span>
    <p
      className="mt-4 text-xl font-light max-w-2xl mx-auto text-gray-700 leading-relaxed"
    >
      I’m <span className="font-semibold text-blue-800">Tanmoy</span>, a
      passionate{" "}
      <span className="font-semibold text-blue-800">
        Full-Stack MERN Developer
      </span>{" "}
      who thrives on building fast, scalable, and visually appealing web
      applications. I love transforming ideas into functional products that
      balance clean design with efficient, maintainable code.
    </p>
  </motion.div>

  {/* Details Grid - Animated Divs */}
  <motion.div
    className="grid md:grid-cols-2 gap-8 mt-10"
    variants={containerVariants} // Use container to stagger children
  >
    {/* My Journey Card */}
    <motion.div 
      className="p-8 rounded-xl shadow-xl border border-gray-100 backdrop-blur-md bg-white/80 hover:shadow-yellow-500/50 transition duration-300 transform hover:-translate-y-1"
      variants={slideInVariants} // Animate this card
    >
      <h3 className="text-2xl font-semibold mb-4 text-gray-900">My Journey</h3>
      <p className="text-lg text-gray-700 leading-relaxed">
        My coding journey began with small experiments—simple websites,
        interactive games, and tools that made daily life easier. That
        curiosity evolved into a deep focus on{" "}
        <span className="font-semibold text-gray-900">
          modern, high-performance web experiences
        </span>
        .
      </p>
    </motion.div>

    {/* Placeholder Card (You can replace this with "My Stack" or "My Philosophy") */}
    <motion.div 
      className="p-8 rounded-xl shadow-xl border border-gray-100 backdrop-blur-md bg-white/80 hover:shadow-yellow-500/50 transition duration-300 transform hover:-translate-y-1"
      variants={slideInVariants} // Animate this card
    >
      <h3 className="text-2xl font-semibold mb-4 text-gray-900">My Focus</h3>
      <p className="text-lg text-gray-700 leading-relaxed">
        I am currently focused on Next.js performance optimization and building scalable Node.js backends, ensuring every project delivers a great user experience and technical excellence.
      </p>
    </motion.div>
  </motion.div>


      {/* Skills Section */}
     <motion.div 
  className="text-center py-16"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.1 }} // Trigger animation when section scrolls into view
  variants={skillsContainerVariants}
>
  <span className="heading-sec__main text-4xl font-extrabold tracking-tight text-gray-900 mb-12 inline-block">
    Skills
  </span>

  <motion.div 
    className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto"
    variants={skillsContainerVariants} // Apply container variants to the grid
  >
    {skills.map((skill, idx) => (
      <motion.div
        key={idx}
        className={`group p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] 
                    bg-white/95 border border-gray-100 backdrop-blur-sm 
                    ${skill.hover.replace('hover:bg-', 'hover:border-')} `} 
        variants={skillItemVariants} // Apply item variants to each skill tile
        style={{
          // Simplifying the complex border radius for cleaner maintenance
          borderRadius: '30% 20% 40% 15% / 20% 35% 15% 40%', 
        }}
      >
        <div
          className={`${skill.color} text-5xl sm:text-6xl mx-auto mb-3  transition-colors duration-300`}
        >
          {skill.icon} {/* Assume this is an actual icon component or character */}
        </div>
        <h4 className="text-lg sm:text-xl font-semibold text-gray-900  transition-colors duration-300">
          {skill.label}
        </h4>
      </motion.div>
    ))}
  </motion.div>

  {/* Resume Button - Enhanced */}
  <div className="mt-16 text-center">
    <motion.a
      href="/WebDevResume5.pdf"
      target="_blank"
      className="inline-flex items-center space-x-3 bg-[#1E3A8A] text-white py-4 px-10 rounded-full font-bold text-lg 
                 tracking-wide shadow-xl transition-all duration-300 
                 hover:bg-[#0f214f] hover:text-yellow-400 hover:shadow-2xl hover:shadow-[#1E3A8A]/50"
      whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(30, 58, 138, 0.4)' }}
      whileTap={{ scale: 0.95 }}
    >
      <Download size={22} /> {/* Using Lucide icon for download */}
      <span>View My Resume</span>
    </motion.a>
  </div>
</motion.div>
    </motion.section>
  );
}

export default About;
