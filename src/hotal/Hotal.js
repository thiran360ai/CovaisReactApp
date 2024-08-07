import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Card, Container, Button, Carousel, Form } from 'react-bootstrap';
import logo from './image/bg1.jpg'; // Import your logo file
import './hotal.css'; // Import your CSS file
import image from './image/image 1.jpg';
import image2 from './image/nkm.jpg';
import image3 from './image/pic.jpg';

const Hotal = () => {
  const [showBookingPage, setShowBookingPage] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    roomType: 'Standard Room',
    dates: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, roomType, dates } = formData;
    const message = `*Booking Confirmation*\n\nName: ${name}\nEmail: ${email}\nRoom Type: ${roomType}\nDates: ${dates}`;
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const BookingPage = ({ handleBackToHomeClick }) => (
    <div className="booking-form">
      <h1>𝐁𝐨𝐨𝐤 𝐘𝐨𝐮𝐫 𝐒𝐭𝐚𝐲</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Full Name</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter your full name" 
            value={formData.name} 
            onChange={handleChange} 
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
            type="email" 
            placeholder="Enter your email" 
            value={formData.email} 
            onChange={handleChange} 
          />
        </Form.Group>
        <Form.Group controlId="roomType">
          <Form.Label>Room Type</Form.Label>
          <Form.Control 
            as="select" 
            value={formData.roomType} 
            onChange={handleChange}
          >
            <option>Standard Room</option>
            <option>Suite Room</option>
            <option>Deluxe Room</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="dates">
          <Form.Label>Check-in and Check-out Dates</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter check-in and check-out dates" 
            value={formData.dates} 
            onChange={handleChange} 
          />
        </Form.Group>
        <Button type="submit">Submit</Button>
        <Button type="button" onClick={handleBackToHomeClick}>Back to Home</Button>
      </Form>
    </div>
  );

  if (showBookingPage) {
    return <BookingPage handleBackToHomeClick={() => setShowBookingPage(false)} />;
  }

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Hotel Logo"
            />
            {' '}
            𝐋𝐔𝐗𝐔𝐑𝐘 𝐇𝐎𝐓𝐄𝐋
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home">𝐇𝐨𝐦𝐞</Nav.Link>
              <Nav.Link href="#about">𝐀𝐛𝐨𝐮𝐭</Nav.Link>
              <Nav.Link href="#contact">𝐂𝐨𝐧𝐭𝐚𝐜𝐭</Nav.Link>
              <Nav.Link href="#rooms">𝐑𝐨𝐨𝐦𝐬</Nav.Link>
              <Button><span>𝐋𝐎𝐆𝐈𝐍</span></Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Carousel Section */}
      <Container className="mt-4">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={image} alt="First slide" />
            <Carousel.Caption>
              <h3>𝐓𝐚𝐣 𝐋𝐮𝐱𝐮𝐫𝐲 𝐇𝐨𝐭𝐞𝐥</h3>
              <p>The sheer magnificence of the architecture of these palaces transforms even the most casual stroll into an experience encompassing eras.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={image2} alt="Second slide" />
            <Carousel.Caption>
              <h3>𝐀𝐛𝐨𝐮𝐭 𝐔𝐬</h3>
              <p>Taj Luxury Hotels is a chain of luxury hotels and a subsidiary of the Indian Hotels Company Limited, headquartered in Mumbai, India.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={image3} alt="Third slide" />
            <Carousel.Caption>
              <h3></h3>
              <p>The jewel of Muslim art in India and one of the universally admired masterpieces of the world's heritage.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>

      {/* Content Section */}
      <Container className="mt-4">
        <h1>---𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐭𝐨 𝐎𝐮𝐫 𝐇𝐨𝐭𝐞𝐥---</h1>
        <hr />

        <div className="row">
          <div className="col-md-4 mb-4">
            <Card className="animated-card">
              <Card.Img variant="top" src={image2} />
              <Card.Body>
                <Card.Title>𝐒𝐓𝐀𝐍𝐃𝐀𝐑𝐃 𝐑𝐎𝐎𝐌</Card.Title>
                <Card.Text>A standard room is one of the cheapest hotel rooms, and usually includes a double or queen bed.</Card.Text>
                <Button onClick={() => setShowBookingPage(true)}> <span>𝐁𝐨𝐨𝐤 𝐍𝐨𝐰</span></Button>
              </Card.Body>
            </Card>
          </div>

          <div className="col-md-4 mb-4">
            <Card className="animated-card">
              <Card.Img variant="top" src={image} />
              <Card.Body>
                <Card.Title>𝐒𝐔𝐈𝐓𝐄 𝐑𝐎𝐎𝐌</Card.Title>
                <Card.Text>A set of connected rooms, especially in a hotel. The singer was interviewed in his hotel suite Room.</Card.Text>
                <div className="d-flex justify-content-center">
                  <Button onClick={() => setShowBookingPage(true)}><span>𝐁𝐨𝐨𝐤 𝐍𝐨𝐰</span></Button>
                </div>
              </Card.Body>
            </Card>
          </div>

          <div className="col-md-4 mb-4">
            <Card className="animated-card">
              <Card.Img variant="top" src={image3} />
              <Card.Body>
                <Card.Title>𝐃𝐄𝐋𝐔𝐗𝐄 𝐑𝐎𝐎𝐌</Card.Title>
                <Card.Text>Deluxe rooms are usually larger than their standard counterparts, may include a bathtub and a shower in the bathroom.</Card.Text>
                <div className="d-flex justify-content-center">
                  <Button onClick={() => setShowBookingPage(true)}><span>𝐁𝐨𝐨𝐤 𝐍𝐨𝐰</span></Button>
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
                  Our hotel offers a variety of room services to make your stay more comfortable:
                  <ul>
                    <li>24/7 Room Service</li>
                    <li>Special Dining Requests</li>
                    <li>Laundry and Dry Cleaning</li>
                    <li>Concierge Services</li>
                  </ul>
                </Card.Text>
                <div className="d-flex justify-content-center">
                  <Button><span>𝐄𝐱𝐩𝐥𝐨𝐫𝐞 𝐌𝐨𝐫𝐞</span></Button>
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
                  For any inquiries or assistance during your stay, please contact our manager:
                  <ul>
                    <li>Chief Manager: Mathew</li>
                    <li>Email: managermathew@enquiry.com</li>
                    <li>Phone: +91 9876543210</li>
                  </ul>
                </Card.Text>
                <div className="d-flex justify-content-center">
                  <Button><span>𝐂𝐨𝐧𝐭𝐚𝐜𝐭 𝐌𝐚𝐧𝐚𝐠𝐞𝐫</span></Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>

        {/* Footer Section */}
        <footer className="mt-5 pt-5 border-top">
          <Container>
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <h5>𝐂𝐨𝐧𝐭𝐚𝐜𝐭 𝐮𝐬</h5>
                <p>For booking inquiries: <a href="mailto:booking@example.com">booking@tajrooms.com</a></p>
                <p>Phone: +91 7898898654</p>
              </div>
              <div className="col-lg-6 col-md-12">
                <h5>𝐂𝐨𝐧𝐭𝐚𝐜𝐭 𝐮𝐬</h5>
                <p>𝐅𝐨𝐫 𝐛𝐨𝐨𝐤𝐢𝐧𝐠 𝐢𝐧𝐪𝐮𝐢𝐫𝐢𝐞𝐬: <a href="mailto:booking@example.com">booking@tajrooms.com</a></p>
                <p>𝐏𝐡𝐨𝐧𝐞: +91 7898898654</p>
              </div>
              <div className="col-lg-6 col-md-12">
                <h5>𝐀𝐝𝐝𝐫𝐞𝐬𝐬</h5>
                <p>Taj Luxury Hotel, Gabriella Street, Mumbai, India</p>
              </div>
            </div>
          </Container>
        </footer>

        <section id="contact" className="mt-4">
          <h2>𝐂𝐨𝐧𝐭𝐚𝐜𝐭 𝐔𝐬</h2>
          <p>
            𝐅𝐨𝐫 𝐁𝐨𝐨𝐤𝐢𝐧𝐠: 𝐭𝐚𝐣𝐥𝐮𝐱𝐮𝐫𝐲_𝐡𝐨𝐭𝐞𝐥@𝐠𝐦𝐚𝐢𝐥.𝐨𝐫𝐠
          </p>
        </section>
      </Container>
    </div>
  );
}

export default Hotal;
