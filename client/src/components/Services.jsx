import React from "react";
import { motion } from "framer-motion";
import { Zap, Code, Database, Layout, Send } from "lucide-react"; // Modern Lucide icons

// Define the services offered
const serviceList = [
  {
    icon: <Code size={30} />,
    title: "Full-Stack Development",
    description:
      "Expertise in the MERN stack (MongoDB, Express, React, Node) to build robust and scalable end-to-end applications.",
  },
  {
    icon: <Database size={30} />,
    title: "Backend & API Design",
    description:
      "Designing and implementing clean, RESTful APIs and optimizing database performance using MongoDB and PostgreSQL.",
  },
  {
    icon: <Layout size={30} />,
    title: "Modern UI/UX Integration",
    description:
      "Translating wireframes into beautiful, responsive user interfaces using React, Next.js, and advanced Tailwind CSS styling.",
  },
  {
    icon: <Zap size={30} />,
    title: "Performance Optimization",
    description:
      "Focusing on fast load times, efficient resource management, and delivering high-performance web experiences.",
  },
];

// Framer Motion Variants for Staggered Entrance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100 },
  },
};

function Services() {
  // Define the background color for this section
  const sectionBg = "#1E3A8A";
  // Define the text/accent color
  const accentColor = "#FFD700"; // Vibrant Gold accent

  return (
    <motion.section
      data-scroll-section
      data-scroll-speed=".5"
      id="SERVICES"
      className="relative z-10 bg-[#0a62fb] text-[#f2f2f2] overflow-hidden"
      style={{ backgroundColor: "" }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      {/* Content */}
      <motion.div
        data-scroll
        data-scroll-speed=".5"
        className="max-w-6xl mx-auto pt-16 mb-18 relative z-20"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-6xl font-extrabold tracking-tight mb-10">
            My Core{" "}
            <span className="shadow-black text-yellow-400">Services</span>
          </h2>
          <p className="md:text-[2rem] text-gray-100 max-w-3xl mx-auto p-2">
            Leveraging the MERN stack and modern development practices to
            deliver high-quality web solutions.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceList.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-[hsl(0,0%,100%)] p-6 rounded-xl border-t-4 border-b-4 border-transparent hover:border-yellow-500 transition-all duration-300 shadow-2xl backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
            >
              <div style={{ color: accentColor }} className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-2xl text-black font-bold mb-2">
                {service.title}
              </h3>
              <p className="text-gray-800 text-xl tracking-tight font-[georgia]">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}

export default Services;
