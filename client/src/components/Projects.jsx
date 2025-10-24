import React from "react";
import { SiGithub } from "react-icons/si";
import { FaLink } from "react-icons/fa";
import { motion } from "framer-motion"; // Import motion for animations

// NOTE: Ensure these image paths are correct in your local project setup
import TaskManager from "/TaskManager.png";
import MyPortfolio from "/MyPortfolio.png";
import GuessMyNumber from "/GuessMyNumber.png";
import TinDog from "/TinDog.png";
import weatherApp from "/weatherApp2.png";

const projects = [
  // ... (Your projects array remains the same)
  {
    name: "Task Manager App",
    image: TaskManager,
    description:
      "A full-featured task management tool for tracking and organizing work efficiently.",
    link: "https://zidio-task-management-tanmoy9088.vercel.app/",
    github: "YOUR_GITHUB_LINK_HERE", // Added for link consistency
    rotate: "-rotate-3",
    bgcolor: "bg-yellow-400",
    hoverbgcolor: "hover:bg-yellow-400",
  },
  {
    name: "My Portfolio",
    image: MyPortfolio,
    description:
      "A modern simple portfolio website. The technologies used in this project are React.js TailwindCSS and Node.js. ",
    link: "https://tanmoy9088-portfolio-3eym.vercel.app",
    github: "YOUR_GITHUB_LINK_HERE",
    rotate: "rotate-1",
    bgcolor: "bg-purple-400",
    hoverbgcolor: "hover:bg-purple-400",
  },
  {
    name: "Guess My Number",
    image: GuessMyNumber,
    description:
      "A fun number guessing game built with JavaScript for a quick challenge.",
    link: "https://guess-my-number-xlak.onrender.com",
    github: "YOUR_GITHUB_LINK_HERE",
    rotate: "-rotate-2",
    bgcolor: "bg-rose-800",
    hoverbgcolor: "hover:bg-rose-800",
  },
  {
    name: "Tindog",
    image: TinDog,
    description: "A Tinder-style web app for dogs to connect and find friends.",
    link: "https://tingdog-project.onrender.com",
    github: "YOUR_GITHUB_LINK_HERE",
    rotate: "rotate-1",
    bgcolor: "bg-orange-500",
    hoverbgcolor: "hover:bg-orange-400",
  },
  {
    name: "Weather App",
    image: weatherApp,
    description:
      "A weather forecast app providing real-time conditions and updates.",
    link: "https://tanmoy9088.github.io/Weather_App/",
    github: "YOUR_GITHUB_LINK_HERE",
    rotate: "-rotate-3",
    bgcolor: "bg-teal-400",
    hoverbgcolor: "hover:bg-teal-400",
  },
];

// Framer Motion Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Stagger animation for the cards
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80,
    },
  },
};

function Projects() {
  return (
    <motion.section
      id="PROJECTS"
      className="relative w-full px-6 text-[#1E3A8A]" // Using Pale Mist BG
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      {/* Header */}
      <motion.div data-scroll data-scroll-speed=".4">
        <motion.div
          className="max-w-4xl mx-auto text-center mb-20"
          variants={cardVariants} // Animate the header block
        >
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-4 inline-block">
            Featured Projects
          </h1>
          <p className="text-xl font-light text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A showcase of the web applications I've built using the MERN stack
            and other modern technologies.
          </p>
        </motion.div>

        {/* Project Grid */}
        <motion.div
          className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 max-w-5xl mx-auto mb-10"
          variants={containerVariants} // Apply stagger to the grid
        >
          <motion.div>
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="flex flex-col md:flex-row gap-0 md:gap-20 mb-10 md:mb-0 "
              >
                <motion.div
                  className={`group relative max-h-[30rem] max-w-[40rem] mb-10 ${project.rotate} ${project.bgcolor} hover:rotate-0 bg-gray-200 p-6 rounded-xl shadow-2xl overflow-hidden cursor-pointer 
                       border-6 border-[#F1F2F1] hover:border-black transition-all duration-300`}
                  variants={cardVariants} // Apply card animation to each item
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 10px 30px rgba(30, 58, 138, 0.4)", // Stronger, deeper shadow
                  }}
                >
                  <div className="relative max-h-full max-w-full overflow-hidden">
                    <img
                      className="w-full h-full object-cover border-2 border-white rounded-md transition-transform duration-300"
                      src={project.image}
                      alt={project.name}
                    />
                  </div>
                </motion.div>
                <motion.div className="div">
                  <div className="p-6 relative z-10">
                    <h3 className="text-3xl font-extrabold text-[#1E3A8A] mb-2 transition-colors duration-300">
                      {project.name}
                    </h3>

                    <p className="text-gray-600 mb-6 leading-relaxed text-md">
                      {project.description}
                    </p>

                    <div className="flex justify-start gap-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center space-x-2 px-4 py-2 bg-[#1E3A8A] text-white rounded-full 
                             font-semibold shadow-md transition-all duration-300 ${project.hoverbgcolor} hover:text-gray-200`}
                      >
                        <FaLink />
                        <span>Live Demo</span>
                      </a>

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 p-3 bg-gray-800 text-white rounded-full 
                             shadow-md transition-all duration-300 hover:bg-gray-600 hover:text-yellow-500"
                      >
                        <SiGithub size={20} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default Projects;
