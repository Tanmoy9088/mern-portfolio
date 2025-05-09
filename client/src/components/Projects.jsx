import { useEffect, useState } from 'react';
import { getProjects } from '../api';

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects().then(setProjects);
  }, []);

  return (
    <div className="grid gap-4">
      {projects.map((proj, i) => (
        <div key={i} className="p-4 shadow-lg rounded bg-white">
          <h2 className="text-xl font-bold">{proj.title}</h2>
          <p>{proj.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Projects;
