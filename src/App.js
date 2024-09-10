// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import img1 from './img/img (1).jpeg';
import img2 from './img/img (2).jpeg';
import img3 from './img/img (3).jpeg';
import img4 from './img/img (4).jpeg';
import logo from './img/logo.jpg';
import About from './About';

import Barber from './barber/barber'; // Ensure the file name matches
import Hotel from './hotal/Hotal'; // Ensure the file name matches
import Gym from './gym/Gym'; // Ensure the file name matches
import Spa from './beaut spa/Spa';
import Subscr from './comp/subscr'; // Ensure the component name starts with uppercase

// Loading Component
const Loading = () => (
  <div className="loading">
    <div className="loader"></div>
    <h2>Loading...</h2>
  </div>
);

// Header Component
const Header = ({ onLoginClick }) => (
  <header className="header">
    <div className="header-left">
      <img src={logo} alt="Logo" className="logo" />
      <span className="company-name">COVAIS</span>
    </div>
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/subscr">Booking</Link> {/* Link to Subscr page */}
    </nav>
    <button className="login-button" onClick={onLoginClick}>Login</button>
  </header>
);

// Login Popup Component
const LoginPopup = ({ isOpen, onClose }) => (
  isOpen ? (
    <div className="login-popup">
      <div className="card">
        <div className="login-card">
          <button className="close-button" onClick={onClose}>×</button>
          <h2>Login</h2>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  ) : null
);

const cardData = [
  {
    img: img1,
    description: "Hotel",
    price: 100,
    duration: 1,
    creator: "Creator",
    creatorImg: logo,
    link: "/hotel" // Unique route for this card
  },
  {
    img: img2,
    description: "Spa & Beauty salon",
    price: 150,
    duration: 1,
    creator: "Creator",
    creatorImg: logo,
    link: "/spa" // Unique route for this card
  },
  {
    img: img3,
    description: "Barber Shop",
    price: 200,
    duration: 10,
    creator: "Creator",
    creatorImg: logo,
    link: "/barber" // Unique route for this card
  },
  {
    img: img4,
    description: "Gym",
    price: 250,
    duration: 48,
    creator: "Creator",
    creatorImg: logo,
    link: "/gym" // Unique route for this card
  }
];

const MainContent = () => (
  <main className="main-content">
    {cardData.map((card, index) => (
      <div key={index} className="nft-card">
        <div className="main">
          <img src={card.img} alt={`Card ${index + 1}`} className="tokenImage" />
          <div className="description">{card.description}</div>
          <div className="tokenInfo">
            <div className="price"><ins>${card.price}</ins></div>
            <div className="duration"><ins>{card.duration}</ins> Days</div>
          </div>
          <div className="creator">
            <div className="wrapper">
              <img src={card.creatorImg} alt="Creator" />
            </div>
            <ins>{card.creator}</ins>
          </div>
          <Link to={card.link}>
            <button className="card-button">View Details</button>
          </Link>
        </div>
      </div>
    ))}
  </main>
);

// Footer Component
const Footer = () => (
  <footer className="footer">
    <p>&copy; 2024 COVAIS. All rights reserved.</p>
  </footer>
);

const App = () => {
  const [isLoginPopupOpen, setLoginPopupOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleLoginClick = () => setLoginPopupOpen(true);
  const handleClosePopup = () => setLoginPopupOpen(false);

  useEffect(() => {
    // Simulate a loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the delay as needed
  }, []);

  return (
    <Router>
      <div className="app">
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <Header onLoginClick={handleLoginClick} />
            <LoginPopup isOpen={isLoginPopupOpen} onClose={handleClosePopup} />
            <Routes>
              <Route path="/" element={<MainContent />} />
              <Route path="/about" element={<About />} />
              <Route path="/barber" element={<Barber />} />
              <Route path="/hotel" element={<Hotel />} />
              <Route path="/gym" element={<Gym />} />
              <Route path="/spa" element={<Spa />} />
              <Route path="/subscr" element={<Subscr />} /> {/* Route for Subscr component */}
            </Routes>
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
};

export default App;
