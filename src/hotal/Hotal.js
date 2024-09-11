import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './hotel.css'; 
import image1 from './image/nk.jpg';
import image2 from './image/image 1.jpg';
import image3 from './image/image 3.jpg'; 
import image4 from './image/nkm.jpg';
import image5 from './image/image 2.webp';
import image6 from './image/navin.jpg';

// Carousel images
import carouselImg1 from './image/background.jpg';
import carouselImg2 from './image/navin (2).jpg';
import carouselImg3 from './image/bg1.jpg';
import carouselImg4 from './image/pic1.jpg'; // Placeholder for an additional carousel image

const hotelsData = [
  { id: 1, name: 'Hotel A', location: 'City A', price: 50, rating: 2.5, image: image1, latitude: 51.505, longitude: -0.09 },
  { id: 2, name: 'Hotel B', location: 'City B', price: 150, rating: 3.0, image: image2, latitude: 51.515, longitude: -0.1 },
  { id: 3, name: 'Hotel C', location: 'City C', price: 300, rating: 3.8, image: image3, latitude: 51.525, longitude: -0.11 },
  { id: 4, name: 'Hotel D', location: 'City D', price: 450, rating: 4.2, image: image4, latitude: 51.535, longitude: -0.12 },
  { id: 5, name: 'Hotel E', location: 'City E', price: 550, rating: 4.4, image: image5, latitude: 51.565, longitude: -0.12 },
  { id: 6, name: 'Hotel F', location: 'City F', price: 700, rating: 5.0, image: image6, latitude: 51.565, longitude: -0.12 },
];

function HotelWebsite() {

  const [showBookingPage, setShowBookingPage] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const photos = [carouselImg4,carouselImg3,carouselImg2,carouselImg1];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  }
  const [searchCriteria, setSearchCriteria] = useState({
    location: '',
  });
  const [filterCriteria, setFilterCriteria] = useState({
    priceRange: [0, 1000],
    rating: 0,
  });
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [bookingDetails, setBookingDetails] = useState({
    checkInDate: '',
    checkOutDate: '',
    numberOfGuests: 1,
    numberOfRooms: 1,
    location: '',
  });

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchCriteria({
      location: e.target.location.value.toLowerCase(),
    });
  };

  const handleFilter = (criteria) => {
    setFilterCriteria(criteria);
  };

  const handleShowModal = (hotel) => {
    setSelectedHotel(hotel);
    setBookingDetails({
      ...bookingDetails,
      location: hotel.location,
    });
  };

  const handleCloseModal = () => {
    setSelectedHotel(null);
  };

  const handleBookingChange = (e) => {
    setBookingDetails({
      ...bookingDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    alert('Booking confirmed!');
    setSelectedHotel(null);
  };

  const filteredAndSearchedHotels = hotelsData
    .filter(hotel =>
      hotel.price >= filterCriteria.priceRange[0] &&
      hotel.price <= filterCriteria.priceRange[1] &&
      hotel.rating >= filterCriteria.rating &&
      (hotel.location.toLowerCase().includes(searchCriteria.location) || hotel.name.toLowerCase().includes(searchCriteria.location))
    );

  return (
    <div className="hotel-website-container">
      <h1 className="text-center title">Hotel</h1>
      {/* Image Slider Component */}
      <div className="slider-container">
            <button className="slider-button prev" onClick={prevSlide}>❮</button>
            <img className="slider-img" src={photos[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
            <button className="slider-button next" onClick={nextSlide}>❯</button>
          </div>

      <section className="search-section">
        <div className="form-and-filter-container">
          <form className='hotel-form' onSubmit={handleSearch}>
            <div className="form-row search-form">
              <div className="col-md-3 form-group">
                <label htmlFor="location" className="form-label">Location</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  className="form-control search-input"
                  placeholder="Enter city or hotel name"
                  required
                />
              </div>
              <div className="col-md-3 form-group">
                <label htmlFor="checkInDate" className="form-label">Check-in Date</label>
                <input
                  type="date"
                  id="checkInDate"
                  name="checkInDate"
                  className="form-control search-input"
                  placeholder="Select check-in date"
                  required
                />
              </div>
              <div className="col-md-3 form-group">
                <label htmlFor="checkOutDate" className="form-label">Check-out Date</label>
                <input
                  type="date"
                  id="checkOutDate"
                  name="checkOutDate"
                  className="form-control search-input"
                  placeholder="Select check-out date"
                  required
                />
              </div>
              <div className="col-md-2 form-group">
                <label htmlFor="guests" className="form-label">Guests</label>
                <input
                  type="number"
                  id="guests"
                  name="guests"
                  className="form-control search-input"
                  placeholder="Number of guests"
                  min="1"
                  defaultValue={1}
                  required
                />
              </div>
              <div className="col-md-2 form-group">
                <label htmlFor="rooms" className="form-label">Rooms</label>
                <input
                  type="number"
                  id="rooms"
                  name="rooms"
                  className="form-control search-input"
                  placeholder="Number of rooms"
                  min="1"
                  defaultValue={1}
                  required
                />
              </div>
              <div className="col-md-2 form-group">
                <button type="submit" className="btn btn-primary search-button btn-block">
                  Search
                </button>
              </div>
            </div>
          </form>

          <section className="filter-section">
            <h3 className="filter-title">Filter Results</h3>
            <div className="form-group filter-price">
              <label htmlFor="priceRange">Price Range</label>
              <input
                type="range"
                id="priceRange"
                min="0"
                max="1000"
                className="form-control-range filter-price-range"
                value={filterCriteria.priceRange[1]}
                onChange={(e) => handleFilter({ ...filterCriteria, priceRange: [0, parseInt(e.target.value)] })}
              />
              <div className="d-flex justify-content-between">
                <span>Price: ${filterCriteria.priceRange[0]}</span>
                <span>${filterCriteria.priceRange[1]}</span>
              </div>
            </div>
            <div className="form-group filter-rating">
              <label htmlFor="rating">Rating</label>
              <input
                type="number"
                id="rating"
                min="0"
                max="5"
                className="form-control filter-rating-input"
                value={filterCriteria.rating}
                onChange={(e) => handleFilter({ ...filterCriteria, rating: parseFloat(e.target.value) })}
                placeholder="Rating"
              />
            </div>
          </section>
        </div>
      </section>

      <section className="hotel-results-section">
        <div className="row hotel-boxes">
          {filteredAndSearchedHotels.map(hotel => (
            <div className="col-md-4 hotel-box" key={hotel.id}>
              <div className="hotel-image-container">
                <img src={hotel.image} alt={hotel.name} className="hotel-image" />
              </div>
              <div className="hotel-info">
                <h3 className="hotel-name">{hotel.name}</h3>
                <p className="hotel-location">{hotel.location}</p>
                <p className="hotel-price">Price: ${hotel.price}</p>
                <p className="hotel-rating">Rating: {hotel.rating} Stars</p>
                <button className="btn btn-primary book-now-button" onClick={() => handleShowModal(hotel)}>Book Now</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedHotel && (
        <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedHotel.name}</h5>
                <button type="button" className="close" aria-label="Close" onClick={handleCloseModal}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleBookingSubmit}>
                  <div className="form-row">
                    <div className="col-md-6 form-group">
                      <label htmlFor="location">Location</label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        className="form-control"
                        value={bookingDetails.location}
                        readOnly
                      />
                    </div>
                    <div className="col-md-6 form-group">
                      <label htmlFor="checkInDate">Check-in Date</label>
                      <input
                        type="date"
                        id="checkInDate"
                        name="checkInDate"
                        className="form-control"
                        value={bookingDetails.checkInDate}
                        onChange={handleBookingChange}
                        required
                      />
                    </div>
                    <div className="col-md-6 form-group">
                      <label htmlFor="checkOutDate">Check-out Date</label>
                      <input
                        type="date"
                        id="checkOutDate"
                        name="checkOutDate"
                        className="form-control"
                        value={bookingDetails.checkOutDate}
                        onChange={handleBookingChange}
                        required
                      />
                    </div>
                    <div className="col-md-6 form-group">
                      <label htmlFor="numberOfGuests">Number of Guests</label>
                      <input
                        type="number"
                        id="numberOfGuests"
                        name="numberOfGuests"
                        className="form-control"
                        value={bookingDetails.numberOfGuests}
                        onChange={handleBookingChange}
                        min="1"
                        required
                      />
                    </div>
                    <div className="col-md-6 form-group">
                      <label htmlFor="numberOfRooms">Number of Rooms</label>
                      <input
                        type="number"
                        id="numberOfRooms"
                        name="numberOfRooms"
                        className="form-control"
                        value={bookingDetails.numberOfRooms}
                        onChange={handleBookingChange}
                        min="1"
                        required
                      />
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary">Confirm Booking</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HotelWebsite;
