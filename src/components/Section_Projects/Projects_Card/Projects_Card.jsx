import React from 'react';
import './Projects_Card.scss';

const Projects_Card = ({ title, video, images, types, description, url }) => {
  return (
    <div className="project_card">
      <div className="project_card_media">
        {/* Vidéo */}
        {video ? (
          <div className="project_card_video_container">
            <video loop muted autoPlay>
              <source src={video} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
        ) : (
          <div className="empty_image">No Video</div>
        )}
      </div>

      <div className="project_card_images">
        {/* Images du projet */}
        {images && images.length > 0 && (
          <div className="project_card_images_container">
            {images.map((image, index) => (
              <img key={index} src={image} alt={`project-img-${index}`} className="project_card_image" />
            ))}
          </div>
        )}
      </div>

      <div className="project_card_right">
        {/* Types du projet */}
        {types && types.length > 0 && (
          <div className="project_card_types">
            {types.map((type, index) => (
              <span key={index} className="project_card_type">
                {type}
              </span>
            ))}
          </div>
        )}

        {/* Titre */}
        <div className="project_card_title">
          <h3>{title || 'No Title'}</h3>
        </div>

        {/* Description */}
        {description && <div className="project_card_description">{description}</div>}

        {/* URL cliquable avec texte personnalisé */}
        {url && (
          <div className="project_card_url">
            <a href={url} target="_blank" rel="noopener noreferrer">
              Lien vers le GitHub du projet
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects_Card;
