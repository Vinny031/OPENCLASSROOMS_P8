import React from 'react';

const Projects_Card = ({ title, description, image }) => {
  return (
    <div className="project_card">
      <div className="project_card_image">
        {image ? <img src={image} alt={title} /> : <div className="empty_image">Image</div>}
      </div>
      <div className="project_card_info">
        <h3>{title || 'No Title'}</h3>
        <p>{description || 'No Description'}</p>
      </div>
    </div>
  );
};

export default Projects_Card;
