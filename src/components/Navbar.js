import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Students Xerox</h1>
      </div>
      <button className="navbar-hamburger" onClick={toggleMobileMenu}>
        &#9776;
      </button>
      <ul className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <li><a href=".hero">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#location">Location</a></li>
        <li><a href="#contactus">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
