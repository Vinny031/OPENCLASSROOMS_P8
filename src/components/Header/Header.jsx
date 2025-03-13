import ThemeToggle from "./Toggle_DarkMode/Toggle_DarkMode.jsx";
import LanguageToggle from "./Toggle_Language/Toggle_Language.jsx";
import { Link } from "react-scroll";
import "./Header.scss"

const Header = () => {
  return (
    <header className="header">
      <LanguageToggle />
      <Link to="home" smooth={true} duration={500} className="header_logo">
        <img src="/public/favicon.webp" alt="Logo" />
      </Link>
      <nav className="nav">
        <ul>
          <li>
            <Link to="about" smooth={true} duration={500} offset={-50} activeClass="active" spy={true}>
              À propos
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500} offset={-50} activeClass="active" spy={true}>
              Projets
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500} offset={-50} activeClass="active" spy={true}>
              Compétences
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} offset={-50} activeClass="active" spy={true}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <ThemeToggle />
    </header>
  );
};

export default Header;
