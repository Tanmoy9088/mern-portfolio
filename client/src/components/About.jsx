import React from "react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub, } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import{SiExpress, SiMongodb, SiTailwindcss} from "react-icons/si";

function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-yellow-400 mb-6">
          About Me
        </h2>
        <p className="text-lg mb-10 font-light max-w-xl mx-auto">
          I'm a passionate full-stack MERN developer focused on building
          immersive digital experiences. From crafting responsive UIs to
          optimizing back-end services, I thrive in both ends of the stack.
        </p>
      </div>

      {/* Bio and Professional Introduction */}
      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        <div>
          <h3 className="text-2xl font-bold text-yellow-400 mb-4">My Journey</h3>
          <p className="text-gray-300 text-justify mb-6">
            I started my coding journey 1 year ago and since then have
            developed a passion for web development. I'm proficient in building
            scalable web applications using the MERN stack and have experience
            with cloud platforms, RESTful APIs, and Agile methodologies.
          </p>
          <p className="text-gray-300 text-justify">
            As a developer, I believe in continuous learning and keep myself
            updated with the latest technologies and trends in the web
            development ecosystem.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-yellow-400 mb-4">
            Fun Fact
          </h3>
          <p className="text-gray-300 text-justify mb-2">
            Outside of coding, I'm an avid photographer, love to watch football matches,and enjoy playing chess. I believe in finding the
            balance between work and play to keep the creative juices flowing.
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mt-16 text-center">
        <h3 className="text-3xl font-extrabold text-yellow-400 mb-8">
          My Skills
        </h3>
        <div className="flex justify-center gap-8 flex-wrap">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all transform hover:scale-105">
            <SiMongodb className="text-green-500 text-6xl mx-auto mb-4" />
            <h4 className="text-xl text-black font-semibold">MongoDB</h4>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all transform hover:scale-105">
            <SiExpress className="text-black text-6xl mx-auto mb-4" />
            <h4 className="text-xl text-black font-semibold">Express.js</h4>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all transform hover:scale-105">
            <FaReact className="text-[#61DBFB] text-6xl mx-auto mb-4" />
            <h4 className="text-xl text-black font-semibold">React.js</h4>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all transform hover:scale-105">
            <FaNodeJs className="text-green-500 text-6xl mx-auto mb-4" />
            <h4 className="text-xl text-black font-semibold">Node.js</h4>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all transform hover:scale-105">
            <SiTailwindcss className="text-sky-300 text-6xl mx-auto mb-4" />
            <h4 className="text-xl text-black font-semibold">TailwindCSS</h4>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all transform hover:scale-105">
            <IoLogoJavascript className="text-yellow-500 text-6xl mx-auto mb-4" />
            <h4 className="text-xl text-black font-semibold">JavaScript</h4>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all transform hover:scale-105">
            <FaHtml5 className="text-orange-500 text-6xl mx-auto mb-4" />
            <h4 className="text-xl text-black font-semibold">HTML5</h4>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all transform hover:scale-105">
            <FaCss3Alt className="text-blue-400 text-6xl mx-auto mb-4" />
            <h4 className="text-xl text-black font-semibold">CSS3</h4>
          </div>
        </div>
      </div>

      {/* Download Resume Button */}
      <div className="mt-16 text-center">
        <a
          href="/WebDevResume5.pdf"
          className="inline-block bg-yellow-400 text-black py-3 px-6 rounded-full font-semibold transition hover:bg-yellow-500"
        >
        View My Resume
        </a>
      </div>
    </section>
  );
}

export default About;
