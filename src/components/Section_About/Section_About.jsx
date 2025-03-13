import React from 'react';
import About_Card from './About_Card/About_Card.jsx'
import About_Infotext from './About_Infotext/About_Infotext.jsx'
import About_Attachment from './About_Attachment/About_Attachment.jsx';
import './Section_About.scss'

const About = () => {
  return (
    <section className="about" id='about'>
      <div className='section_about_title'>
        <h2>À propos</h2>
      </div>
      <div className="about_content">
        <About_Card />
        <About_Infotext />
        <About_Attachment />
      </div>
    </section>
  );
};

export default About;
