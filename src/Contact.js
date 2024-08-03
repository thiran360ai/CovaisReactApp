import React from 'react';
import './Contact.css'; // Import CSS file for styling if needed

const Contact = () => {
  return (
    <div className="container">
      <div className="logo">
        <img 
          src="C:\Users\rohit\my-app\src\img\logo.jpg" 
          alt="MediaBoom Logo" 
        />
        <h1>MEDIABOOM</h1>
      </div>
      <div className="contact">
      <h1>TEAM MEMBERS</h1>
        <p>ROHITH</p>
        <p>LIBIN</p>
        <p>SIBI</p>
        <p>GOTHAM</p>
        <p>KAVIARASU</p>
        <p>NAVEEN KUMAR .M</p>
        <p>NAVEEN KUMAR .C</p>
        <p>GOKULAKANNAN</p>
        <p>GUNA SAGARAN</p>
        <p>SURIYA</p>
      </div>
      <div className="social">
        <h2>FOLLOW US</h2>
        <a 
          href="https://www.facebook.com" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a 
          href="https://twitter.com" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a 
          href="https://www.linkedin.com" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a 
          href="https://www.instagram.com" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <i className="fab fa-instagram"></i>
        </a>
      </div>
      <div className="team">
        <h2>JOIN THE TEAM</h2>
        <a 
          href="" 
          target="_blank" 
          rel="noopener noreferrer"
        >
        
        </a>
      </div>
    </div>
  );
};

export default Contact;
