import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

const About_Attachment = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);

  return (
    <div className="about_attachment">
      <img 
        src="/assets/CV_DEV.webp" 
        alt="Voir le CV" 
        className="cv_thumbnail" 
        onClick={() => setIsOpen(true)} 
      />
      {isOpen && (
        <div className="modal_overlay" onClick={closeModal}>
          <div className="modal_content" onClick={(e) => e.stopPropagation()}>
            <button className="close_button" onClick={closeModal}>
              <FaTimes />
            </button>
            <iframe 
              src="/assets/CV_DEV.webp"  
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