import React, { useEffect, useState } from 'react';
import './About_Infotext.scss';

const About_Infotext = ({ isBlurred }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/OPENCLASSROOMS_P8/data/infotext.json')
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error('Erreur de chargement du JSON :', error));
  }, []);

  if (!data) {
    return <p>Chargement...</p>;
  }

  return (
    <div className="about-infotext">
      <div className={`about-infotext-text ${isBlurred ? 'blurred' : ''}`}>
        <p>
          Je suis actuellement en fin de formation {data.formation_actuelle.titre} chez {data.formation_actuelle.ecole}, et je poursuis mon apprentissage avec une formation en {data.formation_actuelle.formation_suivante.titre}.
          <br />
          Fort d'un parcours diversifié en {data.parcours.domaines.join(', ')}, j'ai su développer une forte capacité d'adaptation et de résilience.
          <br />
          Mon objectif est de {data.objectifs.join(' et ')}.
          <br />
          Passionné par l'apprentissage et la résolution de problèmes, je recherche une {data.recherche.type} qui me permettra de {data.recherche.objectif}.
          <br />
          Mon expérience dans des secteurs variés m'a permis de développer {data.atouts.join(' et ')}, atouts précieux dans mon évolution en tant que développeur.
        </p>
      <h3>Compétences clés :</h3>
      <ul>
        {data.competences_cles.map((competence, index) => (
          <li key={index}>{competence}</li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default About_Infotext;
