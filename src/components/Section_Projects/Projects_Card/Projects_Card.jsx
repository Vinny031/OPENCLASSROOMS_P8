import React, { useState } from 'react';
import './Projects_Card.scss';

const Projects_Card = ({ title, video, tags, description, url, images }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fonction pour ouvrir la modale
  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  // Fonction pour fermer la modale
  const closeModal = (e) => {
    e.stopPropagation();
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Fermer la modale en cliquant à l'extérieur
  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal(e);
    }
  };

  return (
    <div className="project_card" onClick={openModal}>
      {/* Vidéo en arrière-plan */}
      <div className="project_card_video_container">
        {video ? (
          <video loop muted autoPlay>
            <source src={video} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div className="empty_video">No Video</div>
        )}
      </div>

      {/* Tags en haut */}
      <div className="project_card_tags">
        {tags && tags.length > 0 && tags.map((tag, index) => (
          <span key={index} className="project_card_tag">{tag}</span>
        ))}
      </div>

      {/* Titre en bas */}
      <div className="project_card_title">{title}</div>

      {/* Modale */}
      {isModalOpen && (
        <div className="modal" onClick={handleModalClick}>
          <div className="modal_content">
            <div className="modal_video_container">
              <video loop muted autoPlay>
                <source src={video} type="video/webm" />
                Your browser does not support the video tag.
              </video>
              <div className="modal_tags">
                {tags && tags.length > 0 && tags.map((tag, index) => (
                  <span key={index} className="modal_tag">{tag}</span>
                ))}
              </div>
              <div className="modal_title">{title}</div>
            </div>

            {/* Pellicule d'images scrollable */}
            {images && images.length > 0 && (
              <div className="modal_images_carousel">
                <div className="images_wrapper">
                  <div className="images_carousel">
                    {images.map((image, index) => (
                      <img key={index} src={image} alt={`project-img-${index}`} className="modal_image" />
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Description */}
            {description && <div className="modal_description">{description}</div>}

            {/* Lien vers GitHub */}
            {url && (
              <div className="modal_url">
                <a href={url} target="_blank" rel="noopener noreferrer">
                  Lien vers le GitHub du projet
                </a>
              </div>
            )}

            {/* Bouton Close */}
            <button className="close_modal_button" onClick={(e) => closeModal(e)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects_Card;
