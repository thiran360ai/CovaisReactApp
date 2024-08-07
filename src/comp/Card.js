import React, { useState } from 'react';
import './Card.css';

const Card = ({ title, description, image, onClick }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const message = `Your booking has been done successfully.\n\nName: ${name}\nAddress: ${address}\nEmail: ${email}`;
    const phoneNumber = '9894039885';
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        {/* Button is added here */}
        <button className="card-button" onClick={() => setIsFormVisible(!isFormVisible)}>
          {isFormVisible ? 'Close Form' : 'Book Now'}
        </button>

        {isFormVisible && (
          <form onSubmit={handleFormSubmit} className="booking-form">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="form-submit-button">Submit</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Card;
