import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './hotal.css'; 
import image1 from './image/nk.jpg';
import image2 from './image/image 1.jpg';
import image3 from './image/image 3.jpg'; // New image
import image4 from './image/nkm.jpg';
import image5 from './image/pic.jpg';
import image6 from './image/background.jpg';
import image7 from './image/pic4.jpg'; // New image

// Sample data for hotels with images
const hotelsData = [
  { id: 1, name: 'Hotel A', location: 'City A', price: 50, rating: 2.5, image: image1, latitude: 51.505, longitude: -0.09 },
  { id: 2, name: 'Hotel B', location: 'City B', price: 150, rating: 3.0, image: image2, latitude: 51.515, longitude: -0.1 },
  { id: 3, name: 'Hotel C', location: 'City C', price: 300, rating: 3.8, image: image3, latitude: 51.525, longitude: -0.11 }, // New hotel
  { id: 4, name: 'Hotel D', location: 'City D', price: 450, rating: 3.2, image: image4, latitude: 51.535, longitude: -0.12 },
  { id: 5, name: 'Hotel E', location: 'City E', price: 550, rating: 4.0, image: image5, latitude: 51.565, longitude: -0.12 },
  { id: 4, name: 'Hotel A', location: 'City A', price: 650, rating: 4.3, image: image6, latitude: 51.535, longitude: -0.12 },
  { id: 5, name: 'Hotel E', location: 'City E', price: 700, rating: 4.5, image: image7, latitude: 51.565, longitude: -0.12 }, // New hotel
];

function HotelWebsite() {
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
      location: e.target.location.value.toLowerCase(), // Convert to lower case for case-insensitive search
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
    window.$('#hotelDetailsModal').modal('show');
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
    // You can add more logic here to handle the booking submission
    setSelectedHotel(null);
  };

  const filteredAndSearchedHotels = hotelsData
    .filter(hotel =>
      // Filter by price range
      hotel.price >= filterCriteria.priceRange[0] &&
      hotel.price <= filterCriteria.priceRange[1] &&
      // Filter by rating
      hotel.rating >= filterCriteria.rating &&
      // Filter by search criteria
      (hotel.location.toLowerCase().includes(searchCriteria.location) || hotel.name.toLowerCase().includes(searchCriteria.location))
    );

  return (
    <div className="hotel-website-container">
      <section className="search-section">
        <h1 className="text-center title">Hotel</h1>
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
              <div className="box hotel-box-body">
                <img src={hotel.image} className="box-img-top hotel-image" alt={hotel.name} />
                <div className="box-body">
                  <h5 className="box-title hotel-name">{hotel.name}</h5>
                  <p className="box-text"><strong>Location:</strong> {hotel.location}</p>
                  <p className="box-text"><strong>Price:</strong> ${hotel.price}</p>
                  <p className="box-text"><strong>Rating:</strong> {hotel.rating}</p>
                  <button className="btn btn-primary view-details-button" onClick={() => handleShowModal(hotel)}>View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedHotel && (
        <div className="modal fade" id="hotelDetailsModal" tabIndex="-1" role="dialog" aria-labelledby="hotelDetailsModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="hotelDetailsModalLabel">{selectedHotel.name}</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <img src={selectedHotel.image} className="img-fluid mb-3" alt={selectedHotel.name} />
                <p><strong>Location:</strong> {selectedHotel.location}</p>
                <p><strong>Price:</strong> ${selectedHotel.price}</p>
                <p><strong>Rating:</strong> {selectedHotel.rating}</p>
                <form onSubmit={handleBookingSubmit}>
                  <div className="form-group">
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
                  <div className="form-group">
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
                  <div className="form-group">
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
                  <div className="form-group">
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
                  <button type="submit" className="btn btn-primary">Confirm Booking</button>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HotelWebsite;
