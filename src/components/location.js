import React from 'react';
import './location.css';

const Location = () => {
  return (

    <div  id="location" className="location">
      <h2 className="location-title">Visit Us</h2>
      <p className="location-description">We’re here to serve you! Find us at our location below:</p>
      <div className="map-container">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31141.545743671224!2d79.2788992!3d12.668108799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad293c4c051457%3A0x932643034ca604a9!2sStudents%20College%20Xerox!5e0!3m2!1sen!2sin!4v1734158781505!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div className="contact-info">
        <p>
          Address: Students Xerox, Arni, Tamil Nadu
        </p>
        <p>
        Email: <a href="gmailto:studexerox@gmail.com">studexerox@gmail.com</a>
        </p>
        <p>
        Email: <a href="https://mail.google.com/mail/?view=cm&fs=1&to=studexerox@gmail.com" target="_blank" rel="noopener noreferrer">studexerox@gmail.com</a>
        </p>
      </div>
    </div>
  );
};

export default Location;
