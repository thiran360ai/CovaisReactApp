import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './barber.css';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

import slide1 from './images/s7.jpg';
import slide2 from './images/s8.jpg';
import slide3 from './images/s6.jpg';
import image1 from './images/card1.jpg';
import image2 from './images/card2.jpg';
import image3 from './images/card3.jpg';
import node1 from './images/node3.jpg';

import team1 from './images/team1.jpg';
import team2 from './images/team2.jpg';
import team3 from './images/team3.jpg';
import testimonial1 from './images/testimonial1.jpg';
import testimonial2 from './images/testimonial2.jpg';
import testimonial3 from './images/testimonial3.jpg';
import gallery1 from './images/gallery1.jpg';
import gallery2 from './images/gallery2.jpg';
import gallery3 from './images/gallery3.jpg';
import gallery4 from './images/gallery4.jpg';
import gallery5 from './images/gallery5.jpg';
import gallery6 from './images/gallery6.jpg';

const About = () => (
  <section id="about" className="about" style={{ background: `url(${node1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
    <div className="about-content">
      <h2>About Us</h2>
      <p>  Welcome to our Barber Shop! We are committed to providing top-notch grooming
    services for men. Our team of skilled barbers is here to give you the best
    experience possible.</p>
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
      <button className="btn-17" onClick={onBookNow}>{buttonText}</button>
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

    const confirmationMessage = `
      Booking Confirmation
      Date: ${date}
      Time: ${time}
      Name: ${name}
      Email: ${email}
      Thank you for booking with us!
    `;

    const whatsappNumber = '918838043691';
    const whatsappMessage = encodeURIComponent(`Booking has been confirmed. ${confirmationMessage}`);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

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
      buttonText: 'Groom Now',
      image: image1,
    },
    {
      title: 'Shave',
      description: 'Enjoy a relaxing shave with style and our premium.',
      buttonText: 'Groom Now',
      image: image2,
    },
    {
      title: 'Beard Trim',
      description: 'Keep your beard in top shape with our trimming services.',
      buttonText: 'Groom Now',
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
  
const Team = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'Master Barber',
      image: team3,
      bio: 'John has over 15 years of experience and specializes in modern and classic cuts.',
      specialty: 'Fade Expert',
      socialMedia: { instagram: 'https://instagram.com/johndoe', linkedin: 'https://linkedin.com/in/johndoe' },
    },
    {
      name: 'Jane Smith',
      role: 'Senior Barber',
      image: team2,
      bio: 'Jane is known for her precision and attention to detail, especially in beard.',
      specialty: 'Beard Specialist',
      socialMedia: { instagram: 'https://instagram.com/janesmith', linkedin: 'https://linkedin.com/in/janesmith' },
    },
    {
      name: 'Mike Johnson',
      role: 'Junior Barber',
      image: team1,
      bio: 'Mike brings fresh ideas and modern styles to the team with a focus on trendy cuts.',
      specialty: 'Stylist',
      socialMedia: { instagram: 'https://instagram.com/mikejohnson', linkedin: 'https://linkedin.com/in/mikejohnson' },
    },
   
  ];

  return (
    <section id="team" className="team py-5">
      <div className="container">
        <h2 className="text-center mb-4">Meet Our Team</h2>
        <div className="row">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="team-member">
                <img src={member.image} alt={member.name} className="team-image" />
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-bio">{member.bio}</p>
                <p className="team-specialty">Specialty: {member.specialty}</p>
                <div className="team-social">
                  <a href={member.socialMedia.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
                  <a href={member.socialMedia.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


const Testimonials = () => {
  const testimonials = [
    {
      name: 'Client One',
      feedback: 'Best haircut ever! The staff was amazing.',
      image: testimonial1,
      rating: 5,
    },
    {
      name: 'Client Two',
      feedback: 'Great atmosphere and fantastic service.',
      image: testimonial2,
      rating: 4.5,
    },
    {
      name: 'Client Three',
      feedback: 'Highly recommended! Will come back sure.',
      image: testimonial3,
      rating: 4,
    },
  ];

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {Array(fullStars).fill(<FaStar className="star" />)}
        {halfStar && <FaStarHalfAlt className="star" />}
        {Array(emptyStars).fill(<FaRegStar className="star" />)}
      </>
    );
  };

  return (
    <section id="testimonials" className="testimonials py-5">
      <div className="container">
        <h2 className="text-center mb-4">Client Testimonials</h2>
        <div className="row">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="testimonial-card">
                <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
                <p className="testimonial-feedback">"{testimonial.feedback}"</p>
                <h3 className="testimonial-name">{testimonial.name}</h3>
                <div className="testimonial-rating">
                  {renderStars(testimonial.rating)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


const Pricing = () => {
  const pricingList = [
    { service: 'Haircut', price: '$30', description: 'A classic haircut tailored to your style of our services.' },
    { service: 'Shave', price: '$20', description: 'Enjoy a relaxing shave with our premium products.' },
    { service: 'Beard Trim', price: '$15', description: 'Keep your beard in top shape with our trimming.' },
  ];

  return (
    <section id="pricing" className="pricing py-5">
      <div className="container">
        <h2 className="text-center mb-4">Our Pricing</h2>
        <div className="row">
          {pricingList.map((item, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="pricing-card shadow-sm">
                <div className="pricing-header">
                  <h3 className="pricing-service">{item.service}</h3>
                  <p className="pricing-price">{item.price}</p>
                </div>
                <div className="pricing-body">
                  <p className="pricing-description">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



const Gallery = () => {
  const galleryImages = [
    gallery1, gallery2, gallery3, gallery4, gallery5, gallery6,
  ];

  return (
    <section id="gallery" className="gallery py-5">
      <div className="container">
        <h2 className="text-center mb-4">Gallery</h2>
        <div className="row">
          {galleryImages.map((image, index) => (
            <div key={index} className="col-md-4 mb-4">
              <img src={image} alt={`Gallery ${index + 1}`} className="gallery-image" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


const Location = () => {
  const handleGetDirections = () => {
    const address = encodeURIComponent("123 Barber Shop St., Barber City, BC 12345");
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${address}`;
    window.open(googleMapsUrl, "_blank");
  };

  return (
    <section id="location" className="location py-5">
      <div className="container">
        <h2 className="text-center mb-4">Our Location</h2>
        <div className="row">
          <div className="col-md-6 mb-4">
            <h3>Address</h3>
            <address>
              123 Barber Shop St.<br />
              Barber City, BC 12345<br />
              Phone: (123) 456-7890<br />
              Email: contact@barbershop.com
            </address>
            <button className="btn" onClick={handleGetDirections}>Get Directions</button>
          </div>
          <div className="col-md-6 mb-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345086203!2d144.953736315318!3d-37.81720997975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577c8b42a5efb0!2sMelbourne%20CBD%2C%20Victoria%2C%20Australia!5e0!3m2!1sen!2sus!4v1605190123456!5m2!1sen!2sus"
              width="100%"
              height="300"
              frameBorder="0"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              title="Google Maps Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

const App = () => (
  <div className="App">
    <div id="home">
      <About />
      <CardContainer />
      <Banner />
      <Services />
      <Pricing />
      <Team />
      <Gallery />
      <Testimonials />
      <Location />
      <ContactUs />
    </div>
  </div>
);

export default App;
