import React, { useState } from 'react';
import './Hero.css';
import slide1 from '../assets/slide1.png';
import slide2 from '../assets/slide2.png';
import slide3 from '../assets/slide3.png';

const Hero = () => {
  const images = [slide1, slide2, slide3,];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="hero">
      <div className="carousel">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="carousel-image"
        />
        <button className="carousel-btn prev" onClick={handlePrev}>
          &#10094;
        </button>
        <button className="carousel-btn next" onClick={handleNext}>
          &#10095;
        </button>
      </div>
      <div className="hero-content">
 
        {/* <button className="order-now-btn">Print Now</button> */}
      </div>
    </div>
  );
};

export default Hero;
