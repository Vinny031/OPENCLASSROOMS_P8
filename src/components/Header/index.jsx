import ThemeToggle from "./Toggle_DarkMode"
import LanguageToggle from "./Toggle_Language"
import { useState } from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <header className="header">
      <LanguageToggle />
      <nav className="nav">
        <ul>
          <li>
            <a
              href="/"
              className={activeLink === "/" ? "active" : ""}
              onClick={() => handleLinkClick("/")}
            >
              Accueil
            </a>
          </li>
          <li>
            <a
              href="/about"
              className={activeLink === "/about" ? "active" : ""}
              onClick={() => handleLinkClick("/about")}
            >
              À propos
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className={activeLink === "/contact" ? "active" : ""}
              onClick={() => handleLinkClick("/contact")}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <ThemeToggle />
    </header>
  );
};

export default Header;
