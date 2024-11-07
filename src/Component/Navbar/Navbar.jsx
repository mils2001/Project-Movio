// Navbar.js
import React from 'react';
import './Navbar.css'; // Import CSS for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo" >MOVIO</div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="nav-toggle">☰</div>
    </nav>
  );
};

export default Navbar;
