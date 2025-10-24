import React, { useEffect, useState } from "react";
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

function About() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  return (
    <motion.section
      data-scroll-section
      className="relative w-full bg-[#f2f2f2] z-20"
      // initial="hidden"
      // whileInView="visible"
      // viewport={{ once: true, amount: 0.2 }}
      // variants={containerVariants}
    >
      <motion.div
        className=" py-16 w-full"
        data-scroll
        // data-scroll-offset="100%"
        data-scroll-speed=".1"
        // data-scroll-sticky
        id="BIO"
      >
        {/* Primary "About Me" Header and Text */}
        <motion.div
          // id="Header"
          // data-scroll-target="#Header"
          // data-scroll
          // data-scroll-speed="-.2"
          // data-scroll-sticky
          // data-scroll-call="progress-sticky"
          className="max-w-4xl p-6 mx-auto  tracking-tighter md:text-center mb-12"
          variants={slideInVariants}
        >
          <span
            id="Header"
            // data-scroll-target="#Header"
            data-scroll
            // data-scroll-speed=".2"
            // data-scroll-sticky
            className="heading-sec__main font-extrabold tracking-tight text-[#000000] sm:text-5xl"
          >
            About Me
          </span>
          <p
            data-scroll
            // data-scroll-speed=".2"
            className=" mt-6 text-[1.5rem] font-[georgia] font-semibold max-w-3xl mx-auto text-gray-800 leading-relaxed"
          >
            I’m
            {/* <span className="mx-2 relative inline-block before:absolute before:bg-green-600 before:-inset-1 before:block before:-skew-y-3"> */}
              <span className=" text-gray-900 ml-2 font-bold relative">Tanmoy</span>
            {/* </span> */}
            , a performance-focused
            <span className="mx-2 relative inline-block before:absolute before:bg-green-600 before:-inset-1 before:block before:-skew-y-3">
              <span className="font-semibold relative text-gray-100 px-2">
                Full-Stack Engineer
              </span>
            </span>
            specializing in Next.js architecture and modern motion design. I
            transform complex requirements into lightning-fast, visually fluid,
            and highly scalable user experiences.
          </p>
        </motion.div>
        {/* Details Grid - Animated Divs (Unchanged) */}
        <motion.div
          data-scroll
          // data-scroll-speed=".2"
          className="max-w-[80vw] grid grid-cols-1 md:grid-cols-2 mx-auto gap-8 mt-10 "
          variants={containerVariants}
        >
          {/* My Journey Card */}
          <motion.div
            // data-scroll
            // data-scroll-speed="0.2"
            className="p-8 rounded-xl shadow-xl border border-gray-100 backdrop-blur-md bg-gray-100 hover:shadow-2xl hover:shadow-green-500 transition duration-300 transform hover:-translate-y-1"
            variants={slideInVariants}
          >
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">
              My Journey
            </h3>
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

          {/* My Focus Card */}
          <motion.div
            // data-scroll
            // data-scroll-speed="0.2"
            className="p-8 rounded-xl shadow-xl border border-gray-100 backdrop-blur-md bg-gray-100 hover:shadow-2xl hover:shadow-yellow-500 transition duration-300 transform hover:-translate-y-1"
            variants={slideInVariants}
          >
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">
              My Focus
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              I am currently focused on Next.js performance optimization and
              building scalable Node.js backends, ensuring every project
              delivers a great user experience and technical excellence.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default About;
