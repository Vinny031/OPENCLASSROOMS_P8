import React, { useState, useEffect } from 'react';
import Projects_Card from './Projects_Card/Projects_Card.jsx';
import './Section_Projects.scss';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 2000);

        const response = await fetch('/OPENCLASSROOMS_P8/data/projects.json', { signal: controller.signal });
        const data = await response.json();

        clearTimeout(timeout);

        if (!data.projects || data.projects.length === 0) return;

        setProjects(data.projects);
      } catch (error) {
        console.error('Error loading the projects:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section className="section_projects" id="projects">
      <div className="section_projects_title">
        <h2>Quelques projets</h2>
      </div>

      <div className="section_projects_grid">
        {projects.length > 0 ? (
          projects.map((project) => (
            <Projects_Card
              key={project.id}
              title={project.title}
              description={project.description}
              images={project.images}
              url={project.url}
              video={project.video}
              tags={project.tags}
              types={project.types}
              year={project.year}
            />
          ))
        ) : (
          <p>Aucun projet trouvé.</p>
        )}
      </div>
    </section>
  );
};

export default Projects;
