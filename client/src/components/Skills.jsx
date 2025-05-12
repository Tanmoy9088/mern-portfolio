// src/components/Skills.jsx
import React from 'react';
import { FaReact, FaNodeJs, FaCss3Alt, FaHtml5 } from 'react-icons/fa';

function Skills() {
  const skills = [
    { name: 'React', icon: <FaReact size={40} className="text-blue-500" /> },
    { name: 'Node.js', icon: <FaNodeJs size={40} className="text-green-500" /> },
    { name: 'CSS3', icon: <FaCss3Alt size={40} className="text-blue-600" /> },
    { name: 'HTML5', icon: <FaHtml5 size={40} className="text-orange-500" /> },
    // Add more skills as needed
  ];

  return (
    <section id="skills" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Skills</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              {skill.icon}
              <p className="mt-2 text-gray-800 dark:text-gray-200">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
