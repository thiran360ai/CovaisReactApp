import React, { useState } from 'react';
import './Gym.css'; 
import { Container, Row, Col, Button, Card, Carousel, Modal, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import photo1 from './imgs/pho1.jpeg';
import photo2 from './imgs/pho2.jpeg';
import photo3 from './imgs/pho3.jpeg';
import photo4 from './imgs/pho4.jpeg';
import photo5 from './imgs/pho5.jpeg';
import photo6 from './imgs/pho6.jpeg';

const Gym = () => {
  const [showBookingPage, setShowBookingPage] = useState(false);

  if (showBookingPage) {
    return <BookingPage handleBackToHomeClick={() => setShowBookingPage(false)} />;
  }

  return (
    <div>
      {/* Slider Component */}
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100 carousel-img" src={photo1} alt="First slide" />
          <Carousel.Caption>
            <h3>Welcome to Our Gym</h3>
            <p>Get fit with the best equipment and trainers.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 carousel-img" src={photo2} alt="Second slide" />
          <Carousel.Caption>
            <h3>State-of-the-Art Equipment</h3>
            <p>We offer the latest in fitness technology.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 carousel-img" src={photo3} alt="Third slide" />
          <Carousel.Caption>
            <h3>Expert Trainers</h3>
            <p>Our trainers are here to guide you every step of the way.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Card Component */}
      <Container className="mt-4">
        <div className="d-flex justify-content-around flex-wrap">
          <Card className="card-style">
            <Card.Img variant="top" src={photo5} className="card-img" />
            <Card.Body>
              <Card.Title>Personal Training</Card.Title>
              <Card.Text>
                Personal training is a personalized approach to fitness that provides tailored guidance, motivation, and accountability to help individuals achieve their specific health goals.
              </Card.Text>
              <Button variant="primary" onClick={() => setShowBookingPage(true)}>Book Now</Button>
            </Card.Body>
          </Card>
          <Card className="card-style">
            <Card.Img variant="top" src={photo4} className="card-img" />
            <Card.Body>
              <Card.Title>Group Classes</Card.Title>
              <Card.Text>
                Motivating group sessions led by expert instructors. Select classes that align with your fitness level, interests, and goals and help individuals to achieve health goals.
              </Card.Text>
              <Button variant="primary" onClick={() => setShowBookingPage(true)}>Book Now</Button>
            </Card.Body>
          </Card>
          <Card className="card-style">
            <Card.Img variant="top" src={photo6} className="card-img" />
            <Card.Body>
              <Card.Title>Nutritional Guidance</Card.Title>
              <Card.Text>
                Customized diet plans for optimal health and fitness. Encourage a balanced intake of carbohydrates, proteins, fats, vitamins, and minerals to support overall health.
              </Card.Text>
              <Button variant="primary" onClick={() => setShowBookingPage(true)}>Book Now</Button>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
};

const BookingPage = ({ handleBackToHomeClick }) => {
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
      <h1>Gym Booking Page</h1>
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
            <option value="yoga">Yoga</option>
            <option value="pilates">Pilates</option>
            <option value="spinning">Spinning</option>
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
        <button type="submit">Book Now</button>
      </form>
      {message && <p className="message">{message}</p>}
      <Button variant="secondary" onClick={handleBackToHomeClick} className="back-button">Back to Home</Button>
    </div>
  );
};

export default Gym;
