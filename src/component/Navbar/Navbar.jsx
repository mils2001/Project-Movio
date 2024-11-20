// Navbar.js
// Navbar.js
import React, { Component } from 'react';
import './Navbar.css'; // Corrected the CSS import syntax

class Navbar extends Component { // Renamed to class declaration syntax for consistency

  constructor(props) {
    super(props);
    this.state = {
      message: 'Welcome',
    };

    // Bind the methods to ensure 'this' refers to the component instance
    this.changeText = this.changeText.bind(this);
    this.changeName = this.changeName.bind(this);
  }

  changeText() {
    this.setState({
      message: 'You have signed up!',
    });
  }

  changeName() {
    this.setState({
      message: 'Welcome Back!',
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="logo">MOVIO</div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="nav-toggle">☰</div>
          <div className="message">{this.state.message}</div>
          <button className="gold-button" onClick={this.changeText}>Sign up</button>
          <button className="gold-button" onClick={this.changeName}>Sign in</button>
        </nav>
      </div>
    );
  }
}

export default Navbar;

