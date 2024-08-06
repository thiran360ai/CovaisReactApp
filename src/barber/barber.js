import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './barber.css';

import slide1 from './images/s7.jpg';
import slide2 from './images/s8.jpg';
import slide3 from './images/s6.jpg';
import image1 from './images/card1.jpg';
import image2 from './images/card2.jpg';
import image3 from './images/card3.jpg';
import node1 from './images/node3.jpg';



const About = () => (
  <section
    id="about"
    className="about"
    style={{ background: `url(${node1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
  >
    <div className="about-content">
      <h2>About Us</h2>
      <p>
        Welcome to our barbershop! Established in 2020, we are committed to providing high-quality haircuts and grooming services in a relaxed and welcoming environment.
      </p>
    </div>
  </section>
);

const Services = () => {
  const servicesList = [
    { title: 'Haircut', description: 'A classic haircut tailored to your style.' },
    { title: 'Shave', description: 'Enjoy a relaxing shave with our premium products.' },
    { title: 'Beard Trim', description: 'Keep your beard in top shape with our trimming services.' },
  ];

  return (
    <section id="services" className="services py-5">
      <div className="container">
        <h2 className="text-center mb-4">OUR SERVICES</h2>
        <div className="row">
          {servicesList.map((service, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card h-100 fade-in">
                <div className="card-body">
                  <h3 className="card-title">{service.title}</h3>
                  <p className="card-text">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactUs = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div id="contact" className="contact-us animate__animated animate__fadeIn">
      <h2 className="animate__animated animate__fadeInDown">ANY FEEDBACK</h2>
      {!isSubmitted ? (
        <form onSubmit={handleSubmit}>
          <div className="animate__animated animate__fadeInLeft">
            <label htmlFor="name">NAME:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="animate__animated animate__fadeInLeft animate__delay-1s">
            <label htmlFor="email">EMAIL:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="animate__animated animate__fadeInLeft animate__delay-2s">
            <label htmlFor="message">MESSAGE:</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit" className="animate__animated animate__fadeInUp animate__delay-3s">Submit</button>
        </form>
      ) : (
        <div className="submission-success animate__animated animate__fadeIn">
          <div className="tick-mark">
            <svg viewBox="0 0 52 52">
              <path d="M14.1 27.2l7.1 7.2 16.7-16.8" />
            </svg>
          </div>
          <h3>Thank you! Your message has been submitted successfully.</h3>
        </div>
      )}
    </div>
  );
};

const Card = ({ title, description, image, buttonText, onBookNow }) => (
  <div className="card">
    <img src={image} alt={title} className="card-image" />
    <div className="card-content">
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <button className="btn-17" onClick={onBookNow}>
        {buttonText}
      </button>
    </div>
  </div>
);

const BookingSlotPopup = ({ onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Construct the confirmation message
    const confirmationMessage = `
      Booking Confirmation
      Date: ${date}
      Time: ${time}
      Name: ${name}
      Email: ${email}
      Thank you for booking with us!
    `;

    // Construct WhatsApp URL
    const whatsappNumber = '918838043691'; // The recipient's number
    const whatsappMessage = encodeURIComponent(`Booking has been confirmed. ${confirmationMessage}`);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    // Open WhatsApp with the message
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="booking-slot-popup">
      <div className="booking-slot-popup-content">
        <button className="booking-slot-popup-close" onClick={onClose}>×</button>
        <h2>Select a Booking Slot</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

          <label htmlFor="date">Date:</label>
          <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} required />

          <label htmlFor="time">Time:</label>
          <input type="time" id="time" value={time} onChange={(e) => setTime(e.target.value)} required />

          <button type="submit">Confirm Booking</button>
        </form>
      </div>
    </div>
  );
};

const CardContainer = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleBookNow = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const cardsData = [
    {
      title: 'Haircut',
      description: 'A classic haircut tailored to your style and premium product.',
      buttonText: 'Book Now',
      image: image1,
    },
    {
      title: 'Shave',
      description: 'Enjoy a relaxing shave with style and our premium products.',
      buttonText: 'Book Now',
      image: image2,
    },
    {
      title: 'Beard Trim',
      description: 'Keep your beard in top shape with our trimming services.',
      buttonText: 'Book Now',
      image: image3,
    },
  ];

  return (
    <section id="card-container" className="card-container">
      <div className="container">
        <div className="row">
          {cardsData.map((card, index) => (
            <div key={index} className="col-md-4">
              <Card
                title={card.title}
                description={card.description}
                buttonText={card.buttonText}
                image={card.image}
                onBookNow={handleBookNow}
              />
            </div>
          ))}
        </div>
      </div>
      {showPopup && <BookingSlotPopup onClose={handleClosePopup} />}
    </section>
  );
};

const slides = [
  {
    title: "HAIR CUT",
    description: "Your go-to place for top-notch grooming services",
    buttonText: "Book an Appointment",
    imageUrl: slide1,
  },
  {
    title: "Experience the Best Cuts",
    description: "Professional barbers for the best experience",
    buttonText: "See Our Services",
    imageUrl: slide2,
  },
  {
    title: "Get the Look You Want",
    description: "We style you the way you desire",
    buttonText: "Contact Us",
    imageUrl: slide3,
  },
];

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="banner">
      {slides.map((slide, index) => (
        <div key={index} className={`slide ${index === currentSlide ? 'slide-in' : ''}`}>
          <img src={slide.imageUrl} alt={slide.title} className="banner-image" />
          <div className="banner-content">
            <h1>{slide.title}</h1>
            <p>{slide.description}</p>
          </div>
        </div>
      ))}
      <div className="navigation">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`nav-button ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

const App = () => (
  <div className="App">
    <div id="home">
     
      <About />
      <CardContainer />
      <Banner />
      <Services />
      <ContactUs />
    </div>
  </div>
);

export default App;
