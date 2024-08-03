import React, { useState } from 'react';
import './spa.css'; // Import the CSS file
import massageImg from './image/massage.jpg';
import facialImg from './image/facial.jpg';
import headImg from './image/head.jpg';
import HeroSectionImg from './image/background.jpg';

// Main App Component
function App() {
  const [showBookingForm, setShowBookingForm] = useState(false);

  const handleBookNowClick = () => {
    setShowBookingForm(true);
  };

  const handleCloseBookingForm = () => {
    setShowBookingForm(false);
  };

  return (
    <div>
      <HeroSection />
      <Services onBookNowClick={handleBookNowClick} />
      <Testimonials />
      <Feedback />
      <ContactForm />
      {showBookingForm && (
        <BookingForm onClose={handleCloseBookingForm} />
      )}
    </div>
  );
}

// Hero Section Component
function HeroSection() {
  return (
    <section
      id="home"
      className="hero"
      style={{ backgroundImage: `url(${HeroSectionImg})` }}
    >
      <h1 className="hero-title">Welcome to Serenity Spa</h1>
      <p className="hero-subtitle">Your relaxation begins here</p>
    </section>
  );
}

// Services Component with Imported Images
function Services({ onBookNowClick }) {
  const services = [
    { 
      name: 'Massage Therapy', 
      description: 'Relaxing full-body massage',
      image: massageImg,
    },
    { 
      name: 'Facial Treatments', 
      description: 'Revitalize your skin',
      image: facialImg,
    },
    { 
      name: 'Manicure & Pedicure', 
      description: 'Pamper your hands and feet',
      image: headImg,
    },
  ];

  return (
    <section id="services" className="section">
      <h2 className="section-title">Our Services</h2>
      <div className="service-container">
        {services.map((service, index) => (
          <div key={index} className="service">
            <img src={service.image} alt={service.name} className="service-image" />
            <h3 className="service-name">{service.name}</h3>
            <p className="service-description">{service.description}</p>
            <button 
              onClick={onBookNowClick}
              className="service-button"
            >
              Book Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

// Testimonials Component
function Testimonials() {
  const testimonials = [
    { name: 'Alice', text: 'An amazing experience! Highly recommend.' },
    { name: 'Bob', text: 'The best spa in town. I feel rejuvenated!' },
  ];

  return (
    <section id="testimonials" className="section">
      <h2 className="section-title">What Our Clients Say</h2>
      <div className="testimonial-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <p className="testimonial-text">"{testimonial.text}"</p>
            <p className="testimonial-name">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// Feedback Component
function Feedback() {
  const [formData, setFormData] = React.useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent!');
    // Handle form submission here
  };

  return (
    <section className="section">
      <h2 className="section-title">Feedback</h2>
      <form onSubmit={handleSubmit} className="form">
        <label className="label">
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input"
          />
        </label>
        <label className="label">
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input"
          />
        </label>
        <label className="label">
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="textarea"
          />
        </label>
        <button type="submit" className="button">Send</button>
      </form>
    </section>
  );
}

// ContactForm Component
function ContactForm() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Contact Us</h2>
      <p className="contact-description">Get in touch with us to book your spa session.</p>
      <div className="contact-info">
        <p>Phone: [6381343407]</p>
        <p>Email: [gowthamkowsalya20@gmail.com]</p>
        <p>Address: [gobichettipalayam,athani]</p>
      </div>
    </section>
  );
}

// BookingForm Component
function BookingForm({ onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    address: '',
    date: '',
    time: '',
    payment: '',
  });

  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: '',
      email: '',
      mobile: '',
      address: '',
      date: '',
      time: '',
      payment: '',
    });
    setShowConfirmation(true);
    setTimeout(() => {
      setShowConfirmation(false);
    }, 3000);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label className="label">
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input"
            required
          />
        </label>
        <label className="label">
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input"
            required
          />
        </label>
        <label className="label">
          Mobile Number:
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="input"
            required
          />
        </label>
        <label className="label">
          Address:
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="textarea"
            required
          />
        </label>
        <label className="label">
          Date:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="input"
            required
          />
        </label>
        <label className="label">
          Time:
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="input"
            required
          />
        </label>
        <label className="label">
          Payment Information:
          <input
            type="text"
            name="payment"
            value={formData.payment}
            onChange={handleChange}
            className="input"
            required
          />
        </label>
        <button type="submit" className="button">Book Now</button>
      </form>
      {showConfirmation && (
        <div className="confirmation-message">
          <p>Your booking has been confirmed!</p>
        </div>
      )}
      <button onClick={onClose} className="close-button">Close</button>
    </div>
  );
}

export default App;
