import { useState } from "react";

const LanguageToggle = () => {
  const [isEnglish, setIsEnglish] = useState(true);

  const handleToggle = () => {
    setIsEnglish(!isEnglish);
// Insérer ici la logique pour changer la langue de l'application
  };

  return (
    <label className="language-toggle">
      <input
        type="checkbox"
        className="language-checkbox"
        checked={isEnglish}
        onChange={handleToggle}
      />
      <span className="slider">
        <span className="lang-en">EN</span>
        <span className="lang-fr">FR</span>
      </span>
    </label>
  );
};

export default LanguageToggle;