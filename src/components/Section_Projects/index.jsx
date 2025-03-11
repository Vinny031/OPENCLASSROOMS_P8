import React, { useState } from 'react';
import Projects_Card from '../Section_Projects/Projects_Card';  // Assure-toi que ce fichier existe et gère les cartes

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < 2 ? prevIndex + 1 : prevIndex)); // 3 cartes max
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex)); // Empêche de dépasser 0
  };

  // Exemple de 5 cartes vides (tu peux ajouter plus de cartes vides si nécessaire)
  const projects = [
    { title: '', description: '', image: '' },
    { title: '', description: '', image: '' },
    { title: '', description: '', image: '' },
    { title: '', description: '', image: '' },
    { title: '', description: '', image: '' },
  ];

  return (
    <section className="section_projects" id='projects'>
      <div className="section_projects_carousel">
        <button className="section_projects_carousel_button prev" onClick={handlePrev}>
          Prev
        </button>

        <div className="section_projects_carousel_cards">
          {projects.slice(currentIndex, currentIndex + 3).map((project, index) => (
            <Projects_Card
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
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