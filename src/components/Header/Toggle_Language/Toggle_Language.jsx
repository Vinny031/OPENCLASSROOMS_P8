import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import "./Toggle_Language.scss"

const LanguageToggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEnglish, setIsEnglish] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (lang) => {
    setIsEnglish(lang === "en");
    setIsOpen(false);
    // Insérer ici la logique pour changer la langue de l'application
    console.log("Langue changée en :", lang);
  };

  return (
    <div className="language-toggle">
      <button className="language-icon" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faGlobe} />
      </button>
      {isOpen && (
        <ul className="language-dropdown">
          <li onClick={() => changeLanguage("en")} className={isEnglish ? "active" : ""}>
            EN
          </li>
          <li onClick={() => changeLanguage("fr")} className={!isEnglish ? "active" : ""}>
            FR
          </li>
        </ul>
      )}
    </div>
  );
};

export default LanguageToggle;