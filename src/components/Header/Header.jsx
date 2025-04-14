import { useState } from "react";
import { Link } from "react-scroll";
import "./Header.scss";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <Link to="home" smooth={true} duration={500} className="header_logo">
        <img src="/favicon.webp" alt="Logo" />
      </Link>

      <i
        className={`fa-solid ${menuOpen ? "fa-times" : "fa-bars"} hamburger-icon`}
        onClick={() => setMenuOpen(!menuOpen)}
      ></i>

      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link 
              to="section_about" 
              smooth={true} 
              duration={500} 
              onClick={() => setMenuOpen(false)}
              activeClass="active"
              spy={true}
            >
              À propos
            </Link>
          </li>
          <li>
            <Link 
              to="section_projects" 
              smooth={true} 
              duration={500} 
              onClick={() => setMenuOpen(false)}
              activeClass="active"
              spy={true}
            >
              Projets
            </Link>
          </li>
          <li>
            <Link 
              to="section_skills" 
              smooth={true} 
              duration={500} 
              offset={-50} 
              activeClass="active" 
              spy={true}
              onClick={() => setMenuOpen(false)}
            >
              Compétences
            </Link>
          </li>
          <li>
            <Link 
              to="section_contact" 
              smooth={true} 
              duration={500} 
              onClick={() => setMenuOpen(false)}
              activeClass="active"
              spy={true}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
