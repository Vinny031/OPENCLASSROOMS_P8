import React, { useState, useEffect } from 'react';
import './Section_Skills.scss';

const Skills = () => {
  const [skillsData, setSkillsData] = useState({});
  const [flipped, setFlipped] = useState({});

  useEffect(() => {
    fetch('/OPENCLASSROOMS_P8/data/skills.json')
      .then((response) => response.json())
      .then((data) => setSkillsData(data.skills))
      .catch((error) => console.error("Erreur de chargement des compétences :", error));
  }, []);

  const handleFlip = (id) => {
    setFlipped((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="section_skills" id="skills">
      <div className="section_skills_title">
        <h2>Compétences</h2>
      </div>

      {["Front-End", "Back-End", "Outils"].map((category) => (
        <div key={category} className="skills_section">
          <h3 className="category_title">{category}</h3>
          <div className="skills_grid">
          {skillsData[category]?.map((skill) => (
            <div 
              key={skill.title} 
              className={`skill_card ${flipped[skill.title] ? 'flipped' : ''}`} 
              onClick={() => handleFlip(skill.title)}
            >
              <div className="card_front">
                <img src={skill.icon} alt={skill.title} className="skill_icon" />
                <h4>{skill.title}</h4>
              </div>
              <div className="card_back">
                <p>{skill.description}</p>
              </div>
            </div>
          ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
