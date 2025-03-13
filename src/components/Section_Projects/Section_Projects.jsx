import React, { useState, useEffect } from 'react';
import Projects_Card from './Projects_Card/Projects_Card.jsx';
import './section_projects.scss';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [projects, setProjects] = useState([]);

  // Charger les données JSON depuis le dossier public
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/data/projects.json');
        const data = await response.json();
  
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
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  // Gérer le retour au projet précédent (décaler d'un index)
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <section className="section_projects" id="projects">
      <div className="section_projects_title">
        <h2>Quelques projets</h2>
      </div>
      <div className="section_projects_carousel">
        <button className="section_projects_carousel_button prev" onClick={handlePrev}>
          Prev
        </button>

        <div className="section_projects_carousel_cards">
          {/* Affiche 3 projets à la fois avec un décalage circulaire */}
          {projects
            .concat(projects)
            .slice(currentIndex, currentIndex + 3)
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

        <button className="section_projects_carousel_button next" onClick={handleNext}>
          Next
        </button>
      </div>
    </section>
  );
};

export default Projects;
