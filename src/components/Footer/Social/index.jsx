import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const SocialIcons = () => {
  return (
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
  );
};

export default SocialIcons;
