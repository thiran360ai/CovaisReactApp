import React, { useState, memo } from 'react';
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
        <div className="overlay">
          <div className="booking-form-container">
            <BookingForm onClose={handleCloseBookingForm} />
          </div>
        </div>
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
      <div className="services-container">
        {services.map((service, index) => (
          <ServiceItem 
            key={index}
            service={service}
            onBookNowClick={onBookNowClick}
          />
        ))}
      </div>
    </section>
  );
}

// ServiceItem Component
const ServiceItem = memo(({ service, onBookNowClick }) => {
  return (
    <div className="service">
      <img src={service.image} alt={service.name} className="service-image" />
      <h3 className="service-name">{service.name}</h3>
      <p className="service-description">{service.description}</p>
      <button onClick={onBookNowClick} className="service-button">
        Book Now
      </button>
    </div>
  );
});

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
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

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
        <p>Company : THE BOYZ</p>
        <p>Email: theboyz@gmail.com</p>
        <p>Address: Gobichettipalayam,Tamilnadu</p>
      </div>
    </section>
  );
}

// BookingForm Component
const BookingForm = ({ onClose }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [classType, setClassType] = useState('');
  const [trainer, setTrainer] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct the confirmation message
    const confirmationMessage = `
      Booking Confirmation
      Date: ${date}
      Time: ${time}
      Class Type: ${classType}
      Trainer: ${trainer}
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Thank you for booking with us!
    `;

    // Construct WhatsApp URL
    const whatsappNumber = '9894039885'; // The recipient's number
    const whatsappMessage = encodeURIComponent(`Booking has been confirmed. ${confirmationMessage}`);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    // Open WhatsApp with the message
    window.open(whatsappURL, '_blank');

    setMessage('Booking Successful! A confirmation message has been prepared for WhatsApp.');
  };

  return (
    <div className="booking-form">
      <h1>Spa Booking Page</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input 
            type="date" 
            id="date" 
            value={date} 
            onChange={(e) => setDate(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Time:</label>
          <input 
            type="time" 
            id="time" 
            value={time} 
            onChange={(e) => setTime(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="classType">Class Type:</label>
          <select 
            id="classType" 
            value={classType} 
            onChange={(e) => setClassType(e.target.value)} 
            required
          >
            <option value="">Select a class</option>
            <option value="facial">Facial</option>
            <option value="headmassage">Head Massage</option>
            <option value="bodymassage">Body Massage</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="trainer">Trainer:</label>
          <select 
            id="trainer" 
            value={trainer} 
            onChange={(e) => setTrainer(e.target.value)} 
            required
          >
            <option value="">Select a trainer</option>
            <option value="john">John Doe</option>
            <option value="jane">Jane Smith</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input 
            type="text" 
            id="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input 
            type="tel" 
            id="phone" 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Confirm Booking</button>
      </form>
      {message && <p className="success-message">{message}</p>}
      <button onClick={onClose} className="close-button">X</button>
    </div>
  );
};

export default App;
