import ThemeToggle from "./Toggle_DarkMode";
import LanguageToggle from "./Toggle_Language";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="header">
      <LanguageToggle />
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
