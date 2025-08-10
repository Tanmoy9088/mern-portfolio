import React from "react";

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
    <section id="PROJECTS" className="py-24 px-6 bg-[#D4D4D4] text-[#2b2b2b]">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="heading-sec__main uppercase hover:text-[#cdffe7f8] text-xl animate-heading text-gold tracking-wide mb-6">
          Projects
        </h2>
        <p className="text-lg font-clean font-light text-gray-300 max-w-2xl mx-auto leading-relaxed">
          A showcase of the web applications I've built using the MERN stack and
          other modern technologies.
        </p>
      </div>

      {/* Project Grid */}
      <div className=" grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative border border-blue-600/20 rounded-2xl shadow-lg overflow-hidden hover:shadow-yellow-500/40 transition-all duration-300 hover:scale-105 hover:-translate-y-2"
            style={{
              backgroundImage: `url(${project.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-[#B9B7BD] group-hover:bg-[#B3B3B3] transition"></div>

            {/* Content */}
            <div className="relative z-10 p-6 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-2xl text-[#050A30] font-bold text-gold mb-4 group-hover:text-[#fbfbfbe5] transition">
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
                className="inline-block text-[#F9F6F0] bg-[#6F5B3E] py-2 px-6 rounded-full font-semibold tracking-wide shadow-lg hover:bg-[#] hover:shadow-yellow-500/50 transition-all text-center"
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
