import React from "react";
import "./Projects.css"; // We'll write the animation CSS here
function Projects() {
  const projects = [
    {
      name: "Project 1",
      description: "A cool project",
      link: "https://tingdog-project.onrender.com",
    },
    {
      name: "Project 2",
      description: "Another cool project",
      link: "https://zidio-task-management-tanmoy9088.vercel.app/",
    },
    {
      name: "Project 3",
      description: "Yet another cool project",
      link: "https://guess-my-number-xlak.onrender.com",
    },
  ];

  return (
    <section
      id="projects"
      className="projects-section relative py-24 px-6 text-white"
    >
      <div className="h-screen max-w-7xl mx-auto text-center relative z-10">
        <h2 className="text-5xl font-extrabold mb-20">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.name}
              className="bg-white/10 backdrop-blur-md p-8 rounded-3xl shadow-2xl transition-transform transform hover:scale-105 duration-300 hover:shadow-xl border border-white/20"
            >
              <h3 className="text-2xl font-semibold text-white mb-4">
                {project.name}
              </h3>
              <p className="text-gray-200 mb-6">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 text-black font-semibold bg-yellow-400 rounded-full transition duration-300 hover:bg-yellow-500"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
