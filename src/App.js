import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import img1 from './img/img (1).jpeg';
import img2 from './img/img (2).jpeg';
import img3 from './img/img (3).jpeg';
import img4 from './img/img (4).jpeg';
import logo from './img/logo.jpg';
import About from './About';
import Barber from './barber/barber';
import Hotel from './hotal/Hotal';
import Gym from './gym/Gym';
import Spa from './beaut spa/Spa';
import Subscr from './comp/subscr';

// Define the card data here
const cardData = [
  {
    img: img1,
    description: "Hotel",
    price: 100,
    duration: 1,
    creator: "Creator",
    creatorImg: logo,
    link: "/hotel"
  },
  {
    img: img2,
    description: "Spa & Beauty salon",
    price: 150,
    duration: 1,
    creator: "Creator",
    creatorImg: logo,
    link: "/spa"
  },
  {
    img: img3,
    description: "Barber Shop",
    price: 200,
    duration: 10,
    creator: "Creator",
    creatorImg: logo,
    link: "/barber"
  },
  {
    img: img4,
    description: "Gym",
    price: 250,
    duration: 48,
    creator: "Creator",
    creatorImg: logo,
    link: "/gym"
  }
];

// Loading Component
const Loading = () => (
  <div className="loading">
    <div className="loader"></div>
    <h2>Loading...</h2>
  </div>
);

// Header Component
const Header = ({ onLoginClick, user, onLogout }) => (
  <header className="header">
    <div className="header-left">
      <img src={logo} alt="Logo" className="logo" />
      <span className="company-name">THE BOYZ</span>
    </div>
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/subscr">Booking</Link>
      {user ? (
        <ProfileContainer user={user} onLogout={onLogout} />
      ) : (
        <button className="login-button" onClick={onLoginClick}>Login</button>
      )}
    </nav>
  </header>
);

// ProfileContainer Component
const ProfileContainer = ({ user, onLogout }) => (
  <div className="profile-container-wrapper">
    <div className="profile-container">
      <div className="profile-bar">
        <div className="profile-info">
          <img src={user.avatar || logo} alt="User Avatar" className="user-avatar" />
          <span className="username">{user.username}</span>
        </div>
        <nav className="profile-nav">
          <Link to="/gym">Gym</Link>
          <Link to="/spa">Spa</Link>
          <Link to="/barber">Barber Shop</Link>
          <Link to="/hotel">Hotel</Link>
        </nav>
        <button className="profile-button" onClick={onLogout}>Logout</button>
      </div>
    </div>
  </div>
);

// Login Popup Component
const LoginPopup = ({ isOpen, onClose, onLogin }) => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleToggle = () => {
    setIsSignIn(!isSignIn);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the onLogin prop with the username
    onLogin({ username, avatar: '' }); // You can add avatar URL here if needed
    onClose();
  };

  return isOpen ? (
    <div className="login-popup">
      <div className="card">
        <div className="login-card">
          <button className="close-button" onClick={onClose}>×</button>
          <h2>{isSignIn ? 'Sign In' : 'Sign Up'}</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {!isSignIn && (
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            )}
            <button type="submit">{isSignIn ? 'Sign In' : 'Sign Up'}</button>
          </form>
          <button onClick={handleToggle} className="toggle-button">
            {isSignIn ? 'Need an account? Sign Up' : 'Already have an account? Sign In'}
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

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
    <p>&copy; 2024 THE BOYZ. All rights reserved.</p>
  </footer>
);

const App = () => {
  const [isLoginPopupOpen, setLoginPopupOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null); // State for user information

  const handleLoginClick = () => setLoginPopupOpen(true);
  const handleClosePopup = () => setLoginPopupOpen(false);
  const handleLogin = (userInfo) => setUser(userInfo);
  const handleLogout = () => setUser(null);

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
            <Header
              onLoginClick={handleLoginClick}
              user={user}
              onLogout={handleLogout}
            />
            <LoginPopup
              isOpen={isLoginPopupOpen}
              onClose={handleClosePopup}
              onLogin={handleLogin}
            />
            <Routes>
              <Route path="/" element={<MainContent />} />
              <Route path="/about" element={<About />} />
              <Route path="/barber" element={<Barber />} />
              <Route path="/hotel" element={<Hotel />} />
              <Route path="/gym" element={<Gym />} />
              <Route path="/spa" element={<Spa />} />
              <Route path="/subscr" element={<Subscr />} />
            </Routes>
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
};

export default App;
