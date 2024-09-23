// src/comp/subscr.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './sub.css';

function Subscr() {
  const [tripType, setTripType] = useState('oneWay');
  const [from, setFrom] = useState('Delhi');
  const [to, setTo] = useState('Bengaluru');
  const [departureDate, setDepartureDate] = useState('11 Sep\'24 Wednesday');
  const [returnDate, setReturnDate] = useState('');
  const [travellers, setTravellers] = useState(1);
  const [fareType, setFareType] = useState('regular');

  const handleTripTypeChange = (event) => {
    setTripType(event.target.value);
  };

  const handleFromChange = (event) => {
    setFrom(event.target.value);
  };

  const handleToChange = (event) => {
    setTo(event.target.value);
  };

  const handleDepartureDateChange = (event) => {
    setDepartureDate(event.target.value);
  };

  const handleReturnDateChange = (event) => {
    setReturnDate(event.target.value);
  };

  const handleTravellersChange = (event) => {
    setTravellers(event.target.value);
  };

  const handleFareTypeChange = (event) => {
    setFareType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', {
      tripType,
      from,
      to,
      departureDate,
      returnDate,
      travellers,
      fareType,
    });
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-4">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="trip"
                value="oneWay"
                checked={tripType === 'oneWay'}
                onChange={handleTripTypeChange}
              />
              <span>One Way</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="trip"
                value="roundTrip"
                checked={tripType === 'roundTrip'}
                onChange={handleTripTypeChange}
              />
              <span>Round Trip</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="trip"
                value="multiCity"
                checked={tripType === 'multiCity'}
                onChange={handleTripTypeChange}
              />
              <span>Multi City</span>
            </label>
          </div>
          <div>
            <p>Book International and Domestic Flights</p>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-gray-500">From</p>
              <input
                type="text"
                value={from}
                onChange={handleFromChange}
                className="w-full p-2 text-sm text-gray-700"
              />
            </div>
            <div>
              <p className="text-gray-500">To</p>
              <input
                type="text"
                value={to}
                onChange={handleToChange}
                className="w-full p-2 text-sm text-gray-700"
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div>
              <p className="text-gray-500">Departure</p>
              <input
                type="text"
                value={departureDate}
                onChange={handleDepartureDateChange}
                className="w-full p-2 text-sm text-gray-700"
              />
            </div>
            <div>
              <p className="text-gray-500">Return</p>
              <input
                type="text"
                value={returnDate}
                onChange={handleReturnDateChange}
                className="w-full p-2 text-sm text-gray-700"
              />
            </div>
            <div>
              <p className="text-gray-500">Travellers & Class</p>
              <input
                type="number"
                value={travellers}
                onChange={handleTravellersChange}
                className="w-full p-2 text-sm text-gray-700"
              />
            </div>
          </div>
          <div className="flex items-center space-x-4 mb-4">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="fareType"
                value="regular"
                checked={fareType === 'regular'}
                onChange={handleFareTypeChange}
              />
              <span>Regular Fare</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="fareType"
                value="premium"
                checked={fareType === 'premium'}
                onChange={handleFareTypeChange}
              />
              <span>Premium Fare</span>
            </label>
          </div>
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
            Search Flights
          </button>
        </form>
        <Link to="/">Back to Home</Link> {/* Link to navigate back to the home page */}
      </div>
    </div>
  );
}

export default Subscr;
