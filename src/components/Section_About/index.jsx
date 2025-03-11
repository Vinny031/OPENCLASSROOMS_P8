import React from 'react';
import About_Card from './About_Card'
import About_Infotext from './About_Infotext'
import About_Attachment from './About_Attachment';

const About = () => {
  return (
    <section className="about">
      <h2>À propos</h2>
      <div className="about-content">
        <About_Card />
        <About_Infotext />
        <About_Attachment />
      </div>
    </section>
  );
};

export default About;
