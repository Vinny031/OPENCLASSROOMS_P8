import React, { useState, useEffect } from 'react';
import About_Card from './About_Card/About_Card.jsx';
import About_Infotext from './About_Infotext/About_Infotext.jsx';
import About_Attachment from './About_Attachment/About_Attachment.jsx';
import './Section_About.scss';

const About = () => {
  // Initialiser isBlurred à true pour flouter le texte au départ
  const [isBlurred, setIsBlurred] = useState(true);

  // Fonction pour basculer l'état du flou
  const toggleBlur = () => {
    setIsBlurred((prevState) => !prevState);
  };

  // Appliquer un effet au premier chargement (pour s'assurer que le texte est flouté dès le début)
  useEffect(() => {
    setIsBlurred(true);
  }, []);

  return (
    <section className="section_about" id="about">
      <div className="section_about_title">
        <h2>À propos</h2>
      </div>
      <div className="about_content">
        <About_Card toggleBlur={toggleBlur} />
        <About_Infotext isBlurred={isBlurred} />
        <About_Attachment />
      </div>
    </section>
  );
};

export default About;
