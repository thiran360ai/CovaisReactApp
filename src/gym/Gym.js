import React, { useState } from 'react';
import { Container, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Gym.css'; // Import your updated CSS file
import photo1 from './asset/imgs/pho1.jpeg';
import photo2 from './asset/imgs/pho2.jpeg';
import photo3 from './asset/imgs/pho3.jpeg';
import photo4 from './asset/imgs/pho4.jpeg';
import photo5 from './asset/imgs/pho5.jpeg';
import photo6 from './asset/imgs/pho6.jpeg';

const Gym = () => {
  const [showBookingPage, setShowBookingPage] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const photos = [photo1, photo2, photo3, photo4];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  };

  return (
    <div>
      {showBookingPage ? (
        <div className="booking-page-container-1">
          <BookingPage handleBackToHomeClick={() => setShowBookingPage(false)} />
        </div>
      ) : (
        <div>
          {/* Image Slider Component */}
          <div className="slider-container">
            <button className="slider-button prev" onClick={prevSlide}>❮</button>
            <img className="slider-img" src={photos[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
            <button className="slider-button next" onClick={nextSlide}>❯</button>
          </div>

          {/* Card Component */}
          <Container className="mt-4-4">
            <div className="d-flex justify-content-around flex-wrap">
              <Card className="card-style-1">
                <Card.Img variant="top" src={photo5} className="card-img-1" />
                <Card.Body>
                  <Card.Title>Personal Training</Card.Title>
                  <Card.Text>
                    Personal training is a personalized approach to fitness that provides tailored guidance, motivation, and accountability to help individuals achieve their specific health goals.
                  </Card.Text>
                  <Button variant="primary" onClick={() => setShowBookingPage(true)}>Book Now</Button>
                </Card.Body>
              </Card>
              <Card className="card-style-2">
                <Card.Img variant="top" src={photo6} className="card-img-2" />
                <Card.Body>
                  <Card.Title>Group Classes</Card.Title>
                  <Card.Text>
                    Motivating group sessions led by expert instructors. Select classes that align with your fitness level, interests, and goals and help individuals to achieve health goals.
                  </Card.Text>
                  <Button variant="primary" onClick={() => setShowBookingPage(true)}>Book Now</Button>
                </Card.Body>
              </Card>
              <Card className="card-style-3">
                <Card.Img variant="top" src={photo4} className="card-img-3" />
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
      )}
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
    <div className="booking-form-1">
      <h1>Gym Booking Page</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group-1">
          <label className='gym-label' htmlFor="date">Date:</label>
          <input 
            type="date" 
            id="date" 
            value={date} 
            onChange={(e) => setDate(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group-2">
          <label className='gym-label' htmlFor="time">Time:</label>
          <input 
            type="time" 
            id="time" 
            value={time} 
            onChange={(e) => setTime(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group-3">
          <label className='gym-label' htmlFor="classType">Class Type:</label>
          <select 
            id="classType" 
            value={classType} 
            onChange={(e) => setClassType(e.target.value)} 
            required
          >
            <option value="">Select a class</option>
            <option value="Personal Training">Personal Training</option>
            <option value="Group Classes">Group Classes</option>
            <option value="Nutritional Guidance">Nutritional Guidance</option>
          </select>
        </div>
        <div className="form-group-4">
          <label className='gym-label' htmlFor="trainer">Trainer:</label>
          <select 
            id="trainer" 
            value={trainer} 
            onChange={(e) => setTrainer(e.target.value)} 
            required
          >
            <option value="">Select a trainer</option>
            <option value="john">John Doe</option>
            <option value="jane">Jane Smith</option>
            <option value="Irfan">Irfan Pathan</option>
          </select>
        </div>
        <div className="form-group-5">
          <label className='gym-label' htmlFor="name">Name:</label>
          <input 
            type="text" 
            id="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group-6">
          <label className='gym-label' htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group-7">
          <label className='gym-label' htmlFor="phone">Phone:</label>
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
      {message && <p className="message-1">{message}</p>}
      <Button variant="secondary" onClick={handleBackToHomeClick} className="back-button-1">Back to Home</Button>
    </div>
  );
};

export default Gym;
