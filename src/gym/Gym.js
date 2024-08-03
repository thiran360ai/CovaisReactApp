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

function App() {
  const [showBookingForm, setShowBookingForm] = useState(false);

  const handleBookNowClick = () => {
    setShowBookingForm(true);
  };

  const handleBackToHomeClick = () => {
    setShowBookingForm(false);
  };

  if (showBookingForm) {
    return <BookingForm handleBackToHomeClick={handleBackToHomeClick} />;
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
              <Button variant="primary" onClick={handleBookNowClick}>Book Now</Button>
            </Card.Body>
          </Card>
          <Card className="card-style">
            <Card.Img variant="top" src={photo4} className="card-img" />
            <Card.Body>
              <Card.Title>Group Classes</Card.Title>
              <Card.Text>
                Motivating group sessions led by expert instructors. Select classes that align with your fitness level, interests, and goals. The idea behind group personal training is exercise.
              </Card.Text>
              <Button variant="primary" onClick={handleBookNowClick}>Book Now</Button>
            </Card.Body>
          </Card>
          <Card className="card-style">
            <Card.Img variant="top" src={photo6} className="card-img" />
            <Card.Body>
              <Card.Title>Nutritional Guidance</Card.Title>
              <Card.Text>
                Customized diet plans for optimal health and fitness. Encourage a balanced intake of carbohydrates, proteins, fats, vitamins, and minerals to support overall health.
              </Card.Text>
              <Button variant="primary" onClick={handleBookNowClick}>Book Now</Button>
            </Card.Body>
          </Card>
        </div>
      </Container>

      {/* Footer */}
      <footer className="footer bg-dark text-white text-center py-3 mt-5">
        <Container>
          <Row>
            <Col md={4}>
              <h5>About Us</h5>
              <p>We are committed to providing the best fitness experience. Join us to reach your fitness goals.</p>
            </Col>
            <Col md={4}>
              <h5>Contact Us</h5>
              <p>Email: info@mygym.com</p>
              <p>Phone: +123 456 7890</p>
            </Col>
            <Col md={4}>
              <h5>Follow Us</h5>
              <p>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white">Facebook</a><br />
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white">Instagram</a><br />
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white">Twitter</a>
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

const BookingForm = ({ handleBackToHomeClick }) => {
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
  };

  const handleCloseModal = () => {
    setShowConfirmation(false);
  };

  return (
    <div className="form-container">
      <Button variant="secondary" onClick={handleBackToHomeClick}>Back to Home</Button>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
        </Form.Group>
        <Form.Group controlId="formMobile">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control type="tel" name="mobile" value={formData.mobile} onChange={handleChange} required />
        </Form.Group>
        <Form.Group controlId="formAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control as="textarea" name="address" value={formData.address} onChange={handleChange} required />
        </Form.Group>
        <Form.Group controlId="formDate">
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" name="date" value={formData.date} onChange={handleChange} required />
        </Form.Group>
        <Form.Group controlId="formTime">
          <Form.Label>Time</Form.Label>
          <Form.Control type="time" name="time" value={formData.time} onChange={handleChange} required />
        </Form.Group>
        <Form.Group controlId="formPayment">
          <Form.Label>Payment Information</Form.Label>
          <Form.Control type="text" name="payment" value={formData.payment} onChange={handleChange} required />
        </Form.Group>
        <Button variant="primary" type="submit">Book Now</Button>
      </Form>

      {/* Confirmation Modal */}
      <Modal show={showConfirmation} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Booking Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your booking has been confirmed!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default App;
