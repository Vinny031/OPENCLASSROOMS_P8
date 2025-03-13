import React from 'react';
import './projects_card.scss';

const Projects_Card = ({ title, description, video, images }) => {
  return (
    <div className="project_card">
      {/* Titre */}
      <div className="project_card_title">
        <h3>{title || 'No Title'}</h3>
      </div>

      {/* Vidéo */}
      <div className="project_card_media">
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

      {/* Images du projet */}
      {images && images.length > 0 && (
        <div className="project_card_images">
          {images.slice(0, 4).map((image, index) => (
            <img key={index} src={image} alt={`project-img-${index}`} className="project_card_image" />
          ))}
        </div>
      )}

      {/* Description */}
      <div className="project_card_info">
        <p>{description || 'No Description'}</p>
      </div>
    </div>
  );
};

export default Projects_Card;
