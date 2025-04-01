import React from 'react';
import './About_Infotext.scss';

const About_Infotext = ({ isBlurred }) => {
  return (
    <div className="about-infotext">
      <p className={`about-infotext-text ${isBlurred ? 'blurred' : ''}`}>
        Je suis actuellement en fin de formation RNCP Niveau 5 en développement web chez OpenClassrooms, et je poursuis mon apprentissage avec une formation en développement d'application Python (RNCP Niveau 6).
        <br />
        Fort d'un parcours diversifié et de compétences acquises en gestion forestière et en soins, j'ai su développer une forte capacité d'adaptation et de résilience face à des environnements variés.
        <br />
        Mon objectif est de renforcer mes compétences en développement web, API et gestion de bases de données, et de contribuer à des projets concrets et innovants.
        <br />
        Passionné par l'apprentissage et la résolution de problèmes, je recherche une alternance qui me permettra de mettre en pratique mes connaissances tout en continuant à évoluer techniquement.
        <br />
        Compétences clés : Développement web (HTML, CSS, JavaScript, React), Développement Python et gestion des API, Maîtrise des bases de données (SQL, NoSQL), Résolution de problèmes complexes et approche analytique, Collaboration efficace au sein d’équipes pluridisciplinaires.
        <br />
        Mon expérience dans des secteurs variés m'a permis de développer une rigueur organisationnelle et une communication fluide, atouts précieux dans mon évolution en tant que développeur.
      </p>
    </div>
  );
};

export default About_Infotext;
