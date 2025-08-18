import React from "react";
import "./Projects.css"

const projects = [
  {
    name: "Tindog",
    description: "A Tinder-style web app for dogs to connect and find friends.",
    link: "https://tingdog-project.onrender.com",
  },
  {
    name: "Task Manager App",
    description:
      "A full-featured task management tool for tracking and organizing work efficiently.",
    link: "https://zidio-task-management-tanmoy9088.vercel.app/",
  },
  {
    name: "Guess My Number",
    description:
      "A fun number guessing game built with JavaScript for a quick challenge.",
    link: "https://guess-my-number-xlak.onrender.com",
  },
  {
    name: "Weather App",
    image: "/tanmoy_das_(2).png",
    description:
      "A weather forecast app providing real-time conditions and updates.",
    link: "https://your-weather-app-link.com",
  },
];

function Projects() {
  return (
    <section id="PROJECTS" className="py-24 px-6 bg-[#f2f1ec] text-[#2b2b2b]">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <span className="heading-sec__main uppercase hover:text-[#cdffe7f8] text-xl animate-heading text-gold tracking-wide mb-6">
          Projects
        </span>
        <p className="text-lg font-clean font-light text-gray-600 max-w-2xl mx-auto leading-relaxed">
          A showcase of the web applications I've built using the MERN stack and
          other modern technologies.
        </p>
      </div>

      {/* Project Grid */}
      <div className=" grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative border-3 border-blue-600/20 rounded-2xl shadow-lg overflow-hidden hover:shadow-yellow-400 transition-all duration-300 hover:scale-105"
            style={{
              backgroundImage: `url(${project.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-[#f3f3f7] group-hover:bg-[#f3f3f6] transition"></div>

            {/* Content */}
            <div className="relative z-10 p-6 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-2xl text-[#050A30] font-bold text-gold mb-4 group-hover:text-[#e36b6be5] transition hover:translate-1">
                  {project.name}
                </h3>
                <p className="text-[#122620] mb-6 leading-relaxed">
                  {project.description}
                </p>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block relative text-white bg-[#1E3A8A] w-48 m-auto text-center py-2 px-6 rounded-md font-semibold tracking-wide shadow-lg group-hover:bg-[#E64A19] hover:shadow-orange-400/50 transition-all"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
