import React from "react";
import "./Projects.css";
import tanmoyImg from "/tanmoy_das_(2).png";
import TaskManager from "/TaskManager.png";
import MyPortfolio from "/MyPortfolio.png";
import GuessMyNumber from "/GuessMyNumber.png";
import TinDog from "/TinDog.png";
import weatherApp from "/weatherApp2.png";
import { SiGithub, SiLinkfire } from "react-icons/si";
import { FaLink } from "react-icons/fa";
import { FaLinkSlash } from "react-icons/fa6";

const projects = [
  {
    name: "Task Manager App",
    image: TaskManager,
    description:
      "A full-featured task management tool for tracking and organizing work efficiently.",
    link: "https://zidio-task-management-tanmoy9088.vercel.app/",
  },
  {
    name: "My Portfolio",
    image: MyPortfolio,
    description:
      "A modern simple portfolio website. The technologies used in this project are React.js TailwindCSS and Node.js. ",
    link: "https://tanmoy9088-portfolio-3eym.vercel.app",
  },
  {
    name: "Guess My Number",
    image: GuessMyNumber,
    description:
      "A fun number guessing game built with JavaScript for a quick challenge.",
    link: "https://guess-my-number-xlak.onrender.com",
  },
  {
    name: "Tindog",
    image: TinDog,
    description: "A Tinder-style web app for dogs to connect and find friends.",
    link: "https://tingdog-project.onrender.com",
  },
  {
    name: "Weather App",
    image: weatherApp,
    description:
      "A weather forecast app providing real-time conditions and updates.",
    link: "https://tanmoy9088.github.io/Weather_App/",
  },
];

function Projects() {
  return (
    <section id="PROJECTS" className="py-24 px-6 bg-[#f2f1ec] text-[#2b2b2b]">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <span className="heading-sec__main text-4xl font-extrabold tracking-tight text-gray-900 mb-12 inline-block">
          Projects
        </span>
        <p className="text-lg font-clean font-light text-gray-600 max-w-2xl mx-auto leading-relaxed">
          A showcase of the web applications I've built using the MERN stack and
          other modern technologies.
        </p>
      </div>

      {/* Project Grid */}
      <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group min-w-[150px] grid grid-col-1 relative border-2 border-blue-600/20 rounded-xl mb-8 shadow-lg overflow-hidden hover:shadow-yellow-400 transition-all duration-300 hover:scale-110 hover:z-5000 "
            // style={{
            //   backgroundImage: `url(${project.image})`,
            //   backgroundSize: "cover",
            //   backgroundPosition: "center",
            // }}
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-[#f3f3f7] group-hover:bg-[#f3f3f6] transition"></div>

            {/* Content */}
            <div className="relative pb-6 z-10 flex flex-col justify-between">
              <div className="">
                <div className="">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-block relative text-white mb-2 text-center font-semibold tracking-wide h-48 overflow-hidden shadow-lg transition-all"
                  >
                    {" "}
                    <img
                      className=" mb-0 "
                      src={project.image}
                      alt={project.name}
                    />
                  </a>
                </div>

                <div>
                  <h3 className="projecth3 text-center text-2xl px-6 pt-6 text-[#050A30] font-extrabold text-gold mb-4 group-hover:text-[#0c10effd] transition hover:translate-1">
                    {project.name}
                  </h3>

                  <p className="text-[#122620] px-6 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
              <div className="mx-auto w-full flex justify-between px-4 gap-8">
                <div className="flex gap-4 justify-between items-center relative text-white bg-[#1E3A8A] w-32 text-center py-2 px-2  rounded-md font-semibold tracking-wide shadow-lg group-hover:bg-[#0c10effd] hover:shadow-orange-400/50 transition-all">
                  <div>
                    {" "}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="after-"
                    >
                      Live Link
                    </a>
                  </div>
                  <div className="">
                    {" "}
                    <a href={project.link}>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        class="inline text-xs"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="flex justify-between">
                  {" "}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block relative text-white bg-[#121213] w-8 m-auto text-center py-2 px-2 rounded-full font-semibold tracking-wide shadow-lg group-hover:bg-[#88898cfd] hover:shadow-orange-400/50 transition-all"
                  >
                    <SiGithub />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
