import React, { useState } from "react";
import { FaTimes, FaDownload } from "react-icons/fa";
import './About_Attachment.scss'

const About_Attachment = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const downloadCV = () => {
    const cvUrl = "@/assets/CV_DEV.pdf";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "CV_DEV_VINCENT_FUSEAU.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

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
            <button className="download_button" onClick={downloadCV}>
              <FaDownload />
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