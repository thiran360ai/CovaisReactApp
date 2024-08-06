import React from 'react';
import './about.css';

function About() {
  return (
    <div className="container">
      <div className="contact-section">
        <h2>CONTACT US</h2>
        <div className="address">
          <i className="fas fa-map-marker-alt"></i>
          <p>The Paul Bangalore, 139/28, Domlur Layout, Opp. Embassy Golf Links, Off Intermediate Ring Road, Bangalore - 560 071</p>
        </div>
        <div className="phone">
          <i className="fas fa-phone-alt"></i>
          <p>+91 80 40477777</p>
        </div>
        <div className="email">
          <i className="fas fa-envelope"></i>
          <p>reservationstpb@thepaul.in</p>
        </div>
        <p>If you would prefer to have your travel arrangements made for you by your travel professionals, they will be familiar with the Global Distribution System (GDS) which routes your enquiry directly to the global reservation system.</p>
      </div>
      <div className="email-section">
        <h2>SEND AN EMAIL</h2>
        <p>* Required field.</p>
        <form>
          <div className="input-group">
            <label htmlFor="first-name">First Name *</label>
            <input type="text" id="first-name" required />
          </div>
          <div className="input-group">
            <label htmlFor="last-name">Last Name *</label>
            <input type="text" id="last-name" required />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email *</label>
            <input type="email" id="email" required />
          </div>
          <div className="input-group">
            <label htmlFor="phone">Phone *</label>
            <input type="tel" id="phone" required />
          </div>
          <div className="input-group">
            <label htmlFor="city">City *</label>
            <input type="text" id="city" required />
          </div>
          <div className="input-group">
            <label htmlFor="country">Country *</label>
            <input type="text" id="country" required />
          </div>
          <div className="input-group">
            <label htmlFor="subject">Subject *</label>
            <input type="text" id="subject" required />
          </div>
          <div className="input-group">
            <label htmlFor="accomodation">Select type of Accommodation *</label>
            <select id="accomodation" required>
              <option value="">Select an option</option>
              <option value="hotel">Hotel</option>
              <option value="resort">Spa</option>
              <option value="villa">Baber shop</option>
              <option value="villa1">Gym</option>
            </select>
          </div>
          <div className="input-group">
            <label htmlFor="message">Message *</label>
            <textarea id="message" required></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default About;