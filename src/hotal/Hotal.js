import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container, Button, Carousel, Form } from 'react-bootstrap';
import logo from '../img/logo.jpg'; // Import your logo file
import './hotal.css'; // Import your CSS file
import image from './image/image 1.jpg';
import image2 from './image/nkm.jpg';
import image3 from './image/pic.jpg';

function Hotal() {
  const [animationClasses, setAnimationClasses] = useState(['', '', '']);
  const [showBookingForm, setShowBookingForm] = useState(false);

  const handleAnimation = (index) => {
    const newAnimationClasses = [...animationClasses];
    newAnimationClasses[index] = newAnimationClasses[index] === '' ? `animated-card-${index + 1}` : '';
    setAnimationClasses(newAnimationClasses);
  };

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
    <div className="hot">
      {/* Carousel Section */}
      <Container className="mt-4">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={image}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>𝐓𝐚𝐣 𝐋𝐮𝐱𝐮𝐫𝐲 𝐇𝐨𝐭𝐞𝐥</h3>
              <p>The sheer magnificence of the architecture of these palaces transforms even the most casual stroll into an experience encompassing eras.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={image2}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>𝐀𝐛𝐨𝐮𝐭 𝐔𝐬</h3>
              <p>Taj Luxury Hotels is a chain of luxury hotels and a subsidiary of the Indian Hotels Company Limited, headquartered in Mumbai, India.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={image3}
              alt="Third slide"
            />
            <Carousel.Caption>
              <p>The jewel of Muslim art in India and one of the universally admired masterpieces of the world's heritage</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>

      {/* Content Section */}
      <Container className="mt-4">
        <h1 className="text-center">---𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐭𝐨 𝐎𝐮𝐫 𝐇𝐨𝐭𝐞𝐥---</h1>
        <hr />

        <div className="row">
          <div className="col-md-4 mb-4">
            <Card className={`animated-card ${animationClasses[0]}`} onClick={() => handleAnimation(0)}>
              <Card.Img variant="top" src={image2} />
              <Card.Body>
                <Card.Title>𝐒𝐓𝐀𝐍𝐃𝐀𝐑𝐃 𝐑𝐎𝐎𝐌</Card.Title>
                <Card.Text>
                  A standard room is one of the cheapest hotel rooms, and usually includes a double or queen bed.
                </Card.Text>
                <div className="d-flex justify-content-center">
                  <Button variant="primary" onClick={handleBookNowClick}>𝐁𝐨𝐨𝐤 𝐍𝐨𝐰</Button>
                </div>
              </Card.Body>
            </Card>
          </div>

          <div className="col-md-4 mb-4">
            <Card className={`animated-card ${animationClasses[1]}`} onClick={() => handleAnimation(1)}>
              <Card.Img variant="top" src={image} />
              <Card.Body>
                <Card.Title>𝐒𝐔𝐈𝐓𝐄 𝐑𝐎𝐎𝐌</Card.Title>
                <Card.Text>
                  A set of connected rooms, especially in a hotel. The singer was interviewed in his hotel suite room.
                </Card.Text>
                <div className="d-flex justify-content-center">
                  <Button variant="primary" onClick={handleBookNowClick}>𝐁𝐨𝐨𝐤 𝐍𝐨𝐰</Button>
                </div>
              </Card.Body>
            </Card>
          </div>

          <div className="col-md-4 mb-4">
            <Card className={`animated-card ${animationClasses[2]}`} onClick={() => handleAnimation(2)}>
              <Card.Img variant="top" src={image3} />
              <Card.Body>
                <Card.Title>𝐃𝐄𝐋𝐔𝐗𝐄 𝐑𝐎𝐎𝐌</Card.Title>
                <Card.Text>
                  Deluxe rooms are usually larger than their standard counterparts and may include a bathtub and a shower in the bathroom.
                </Card.Text>
                <div className="d-flex justify-content-center">
                  <Button variant="primary" onClick={handleBookNowClick}>𝐁𝐨𝐨𝐤 𝐍𝐨𝐰</Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>

        {/* Room Service Details Section */}
        <div className="row mt-4">
          <div className="col-md-12">
            <Card>
              <Card.Body>
                <Card.Title>𝐑𝐨𝐨𝐦 𝐒𝐞𝐫𝐯𝐢𝐜𝐞 𝐃𝐞𝐚𝐭𝐢𝐥𝐬</Card.Title>
                <Card.Text>
                  𝐎𝐮𝐫 𝐡𝐨𝐭𝐞𝐥 𝐨𝐟𝐟𝐞𝐫𝐬 𝐚 𝐯𝐚𝐫𝐢𝐞𝐭𝐲 𝐨𝐟 𝐫𝐨𝐨𝐦 𝐬𝐞𝐫𝐯𝐢𝐜𝐞𝐬 𝐭𝐨 𝐦𝐚𝐤𝐞 𝐲𝐨𝐮𝐫 𝐬𝐭𝐚𝐲 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐟𝐨𝐫𝐭𝐚𝐛𝐥𝐞:
                  <ul>
                    <li>24/7 Room Service</li>
                    <li>Special Dining Requests</li>
                    <li>Laundry and Dry Cleaning</li>
                    <li>Concierge Services</li>
                  </ul>
                </Card.Text>
                <div className="d-flex justify-content-center">
                  <Button variant="primary">𝐄𝐱𝐩𝐥𝐨𝐫𝐞 𝐌𝐨𝐫𝐞</Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>

        {/* Manager Details Section */}
        <div className="row mt-4">
          <div className="col-md-12">
            <Card>
              <Card.Body>
                <Card.Title>𝐌𝐚𝐧𝐚𝐠𝐞𝐫 𝐃𝐞𝐭𝐚𝐢𝐥𝐬</Card.Title>
                <Card.Text>
                  𝐅𝐨𝐫 𝐚𝐧𝐲 𝐚𝐝𝐝𝐢𝐭𝐢𝐨𝐧𝐚𝐥 𝐢𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧 𝐨𝐫 𝐬𝐩𝐞𝐜𝐢𝐚𝐥 𝐫𝐞𝐪𝐮𝐞𝐬𝐭𝐬, 𝐩𝐥𝐞𝐚𝐬𝐞 𝐜𝐨𝐧𝐭𝐚𝐜𝐭 𝐨𝐮𝐫 𝐡𝐨𝐭𝐞𝐥 𝐦𝐚𝐧𝐚𝐠𝐞𝐫:
                  <ul>
                    <li>John Doe</li>
                    <li>Phone: +123 456 7890</li>
                    <li>Email: manager@luxuryhotel.com</li>
                  </ul>
                </Card.Text>
                <div className="d-flex justify-content-center">
                  <Button variant="primary">𝐂𝐨𝐧𝐭𝐚𝐜𝐭 𝐔𝐬</Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}

function BookingForm({ handleBackToHomeClick }) {
  return (
    <div className="form-container">
      <h2>Book Your Stay</h2>
      <Form>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>

        <Form.Group controlId="formPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text" placeholder="Enter your phone number" />
        </Form.Group>

        <Form.Group controlId="formCheckIn">
          <Form.Label>Check-in Date</Form.Label>
          <Form.Control type="date" />
        </Form.Group>

        <Form.Group controlId="formCheckOut">
          <Form.Label>Check-out Date</Form.Label>
          <Form.Control type="date" />
        </Form.Group>

        <Button variant="primary" type="submit">Submit</Button>
        <Button variant="secondary" onClick={handleBackToHomeClick}>Back to Home</Button>
      </Form>
    </div>
  );
}

export default Hotal;
