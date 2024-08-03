// src/Card.js
import React from 'react';
import './Card.css';

const Card = ({ title, description, image, onClick }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        {/* Button is added here */}
        <button className="card-button" onClick={onClick}>Learn More</button>
      </div>
    </div>
  );
};

export default Card;
