// src/subscr.js
import React from 'react';
import Card from './Card';
import './subscr.css';
import sibi from './image/images1.jpg';
import gokul from './image/images2.jpg';
import spa from './image/image03.jpg';
import hotel from './image/image4.jpg';

function App() {
  const handleCardClick = (service) => {
    alert(`You clicked on ${service}`);
  };

  return (
    <div className="App">
      <h1>Service Cards</h1>
      <div className="card-container">
        <Card
          title="Barbershop"
          description="Get the best haircut and grooming services."
          image={sibi}
          onClick={() => handleCardClick('Barbershop')}
        />
        <Card
          title="Gym"
          description="Achieve your fitness goals with our state-of-the-art gym."
          image={gokul}
          onClick={() => handleCardClick('Gym')}
        />
        <Card
          title="Spa"
          description="Relax and rejuvenate with our luxurious spa treatments."
          image={spa}
          onClick={() => handleCardClick('Spa')}
        />
        <Card
          title="Hotel Rooms"
          description="Comfortable and stylish rooms for a perfect stay."
          image={hotel}
          onClick={() => handleCardClick('Hotel Rooms')}
        />
      </div>
    </div>
  );
}

export default App;
