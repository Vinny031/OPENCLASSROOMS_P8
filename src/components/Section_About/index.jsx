import React from 'react';
import About_Card from './About_Card'
import About_Infotext from './About_Infotext'

const About = () => {
  return (
    <section className="about">
      <h2>À propos</h2>
      <div className="about-content">
        <About_Card />
        <About_Infotext />
      </div>
    </section>
  );
};

export default About;
