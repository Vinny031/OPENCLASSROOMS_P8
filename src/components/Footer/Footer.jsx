import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Footer.scss';

const Footer = () => {
  const [isBottom, setIsBottom] = useState(false);

  // Fonction pour vérifier si l'utilisateur est arrivé en bas de la page
  const checkIfBottom = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollPosition = window.innerHeight + window.scrollY;
    if (scrollHeight === scrollPosition) {
      setIsBottom(true); // L'utilisateur est en bas de la page
    } else {
      setIsBottom(false); // L'utilisateur n'est pas encore en bas
    }
  };

  // Utilisation de useEffect pour ajouter un écouteur d'événement de défilement
  useEffect(() => {
    // Force l'affichage si la page est petite et ne fait pas défiler
    if (document.documentElement.scrollHeight === document.documentElement.clientHeight) {
      setIsBottom(true); // Cela permet d'afficher le footer même sans défilement
    }

    window.addEventListener('scroll', checkIfBottom); // Ajoute l'événement de défilement
    return () => window.removeEventListener('scroll', checkIfBottom); // Nettoyage de l'écouteur
  }, []);

  return (
    <footer className={`footer ${isBottom ? 'show-footer' : ''}`}>
      <p>©2025 Site forgé par Vincent Fuseau | Tous droits réservés</p>
      <ul className="social-icons">
        <li className="icon-content">
          <a
            href="https://www.linkedin.com/in/vincent-fuseau-173795296/"
            aria-label="LinkedIn"
            data-social="linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="filled"></div>
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
          </a>
          <div className="tooltip">LinkedIn</div>
        </li>
        <li className="icon-content">
          <a
            href="https://github.com/Vinny031?tab=repositories"
            aria-label="GitHub"
            data-social="github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="filled"></div>
            <FontAwesomeIcon icon={faGithub} className="icon" />
          </a>
          <div className="tooltip">GitHub</div>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
