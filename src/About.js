import React from 'react';
import './about.css';

function About() {
  return (
    <div className="about-container">
      <div className="about-contact-section">
        <h2 className="about-heading">CONTACT US</h2>
        <div className="about-address">
          <i className="about-icon fas fa-map-marker-alt"></i>
          <p className="about-text">The Paul Bangalore, 139/28, Domlur Layout, Opp. Embassy Golf Links, Off Intermediate Ring Road, Bangalore - 560 071</p>
        </div>
        <div className="about-phone">
          <i className="about-icon fas fa-phone-alt"></i>
          <p className="about-text">+91 80 40477777</p>
        </div>
        <div className="about-email">
          <i className="about-icon fas fa-envelope"></i>
          <p className="about-text">reservationstpb@thepaul.in</p>
        </div>
        <p className="about-info-text">If you would prefer to have your travel arrangements made for you by your travel professionals, they will be familiar with the Global Distribution System (GDS) which routes your enquiry directly to the global reservation system.</p>
      </div>
      <div className="about-email-section">
        <h2 className="about-heading">SEND AN EMAIL</h2>
        <p className="about-required-text">* Required field.</p>
        <form className="about-form">
          <div className="about-input-group">
            <label htmlFor="first-name" className="about-label">First Name *</label>
            <input type="text" id="first-name" className="about-input" required />
          </div>
          <div className="about-input-group">
            <label htmlFor="last-name" className="about-label">Last Name *</label>
            <input type="text" id="last-name" className="about-input" required />
          </div>
          <div className="about-input-group">
            <label htmlFor="email" className="about-label">Email *</label>
            <input type="email" id="email" className="about-input" required />
          </div>
          <div className="about-input-group">
            <label htmlFor="phone" className="about-label">Phone *</label>
            <input type="tel" id="phone" className="about-input" required />
          </div>
          <div className="about-input-group">
            <label htmlFor="city" className="about-label">City *</label>
            <input type="text" id="city" className="about-input" required />
          </div>
          <div className="about-input-group">
            <label htmlFor="country" className="about-label">Country *</label>
            <input type="text" id="country" className="about-input" required />
          </div>
          <div className="about-input-group">
            <label htmlFor="subject" className="about-label">Subject *</label>
            <input type="text" id="subject" className="about-input" required />
          </div>
          <div className="about-input-group">
            <label htmlFor="accomodation" className="about-label">Select type of Accommodation *</label>
            <select id="accomodation" className="about-select" required>
              <option value="">Select an option</option>
              <option value="hotel">Hotel</option>
              <option value="resort">Spa</option>
              <option value="villa">Baber shop</option>
              <option value="villa1">Gym</option>
            </select>
          </div>
          <div className="about-input-group">
            <label htmlFor="message" className="about-label">Message *</label>
            <textarea id="message" className="about-textarea" required></textarea>
          </div>
          <button type="submit" className="about-button">Send</button>
        </form>
      </div>
    </div>
  );
}

export default About;
