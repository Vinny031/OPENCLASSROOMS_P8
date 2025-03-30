import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import './About_Attachment.scss';

const About_Attachment = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Gérer l'ajout/suppression de la classe "modal_open" sur le body
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("modal_open");
    } else {
      document.body.classList.remove("modal_open");
    }
    return () => document.body.classList.remove("modal_open");
  }, [isOpen]);

  const closeModal = () => setIsOpen(false);

  return (
    <div className="about_attachment">
      {/* Image affichée uniquement si la modale est fermée */}
      {!isOpen && (
        <img 
          src="/assets/CV_DEV.webp" 
          alt="Voir le CV" 
          className="cv_thumbnail" 
          onClick={() => setIsOpen(true)} 
        />
      )}

      {/* Modale qui prend 50vw/90vh de l'écran */}
      {isOpen && (
        <div className="modal_overlay" onClick={closeModal}>
          <div className="modal_content" onClick={(e) => e.stopPropagation()}>
            <button className="close_button" onClick={closeModal}>
              <FaTimes />
            </button>
            <iframe 
              src="/assets/CV_DEV.pdf"  
              title="CV" 
              className="cv_viewer"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default About_Attachment;
