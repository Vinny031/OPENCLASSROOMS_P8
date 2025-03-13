import React, { useState, useEffect } from 'react';
import Projects_Card from './Projects_Card/Projects_Card.jsx';
import './section_projects.scss';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [projects, setProjects] = useState([]);

  // Fonction pour récupérer les projets avec un timeout
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 2000);
        
        const response = await fetch('/data/projects.json', { signal: controller.signal });
        const data = await response.json();

        clearTimeout(timeout);

        if (!data.projects || data.projects.length === 0) return;

        setProjects(data.projects);

        const firstProjectIndex = data.projects.findIndex(project => project.id === "1");
        setCurrentIndex(firstProjectIndex >= 0 ? firstProjectIndex : 0);
      } catch (error) {
        console.error('Error loading the projects:', error);
      }
    };

    fetchProjects();
  }, []);

  // Gérer le passage au projet suivant (décaler d'un index)
  const handleNext = () => {
    if (projects.length === 0) return;
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  // Gérer le retour au projet précédent (décaler d'un index)
  const handlePrev = () => {
    if (projects.length === 0) return;
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <section className="section_projects" id="projects">
      <div className="section_projects_title">
        <h2>Quelques projets</h2>
      </div>

      <div className="section_projects_carousel">
        <button className="section_projects_carousel_button prev" onClick={handlePrev} disabled={projects.length === 0}>
          Prev
        </button>

        <div className="section_projects_carousel_cards">
          {/* Vérifie que projects contient bien au moins 3 éléments */}
          {projects.length > 0 && projects
            .concat(projects)
            .slice(currentIndex, currentIndex + Math.min(3, projects.length))
            .map((project) => (
              <Projects_Card
                key={project.id}
                title={project.title}
                description={project.description}
                images={project.images}
                url={project.url}
                video={project.video}
                tags={project.tags}
                year={project.year}
              />
            ))}
        </div>

        <button className="section_projects_carousel_button next" onClick={handleNext} disabled={projects.length === 0}>
          Next
        </button>
      </div>
    </section>
  );
};

export default Projects;
