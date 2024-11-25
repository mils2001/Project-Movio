import React, { Component } from 'react';
import './Navbar.css'; // Corrected the CSS import syntax

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Welcome',
      isSignUpPopupVisible: false, // State for showing the Sign-up popup
      isSignInPopupVisible: false, // State for showing the Sign-in popup
      signUpDetails: { name: '', email: '', password: '' }, // Sign-up form details
      signInDetails: { email: '', password: '' }, // Sign-in form details
    };

    // Bind the methods to ensure 'this' refers to the component instance
    this.toggleSignUpPopup = this.toggleSignUpPopup.bind(this);
    this.toggleSignInPopup = this.toggleSignInPopup.bind(this);
    this.handleSignUpChange = this.handleSignUpChange.bind(this);
    this.handleSignInChange = this.handleSignInChange.bind(this);
    this.handleSignUpSubmit = this.handleSignUpSubmit.bind(this);
    this.handleSignInSubmit = this.handleSignInSubmit.bind(this);
  }

  toggleSignUpPopup() {
    this.setState((prevState) => ({
      isSignUpPopupVisible: !prevState.isSignUpPopupVisible,
    }));
  }

  toggleSignInPopup() {
    this.setState((prevState) => ({
      isSignInPopupVisible: !prevState.isSignInPopupVisible,
    }));
  }

  handleSignUpChange(event) {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      signUpDetails: { ...prevState.signUpDetails, [name]: value },
    }));
  }

  handleSignInChange(event) {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      signInDetails: { ...prevState.signInDetails, [name]: value },
    }));
  }

  handleSignUpSubmit(event) {
    event.preventDefault();
    const { signUpDetails } = this.state;
    console.log('Sign-Up Details:', signUpDetails);
    this.setState({
      message: 'You have signed up!',
      isSignUpPopupVisible: false,
      signUpDetails: { name: '', email: '', password: '' }, // Reset form
    });
  }

  handleSignInSubmit(event) {
    event.preventDefault();
    const { signInDetails } = this.state;
    console.log('Sign-In Details:', signInDetails);
    this.setState({
      message: 'Welcome Back!',
      isSignInPopupVisible: false,
      signInDetails: { email: '', password: '' }, // Reset form
    });
  }

  render() {
    const {
      message,
      isSignUpPopupVisible,
      isSignInPopupVisible,
      signUpDetails,
      signInDetails,
    } = this.state;

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
          <div className="message">{message}</div>
          <button className="gold-button" onClick={this.toggleSignUpPopup}>Sign up</button>
          <button className="gold-button" onClick={this.toggleSignInPopup}>Sign in</button>
        </nav>

        {/* Sign-Up Popup */}
        {isSignUpPopupVisible && (
          <div className="popup-overlay">
            <div className="popup">
              <h3>Sign Up</h3>
              <form onSubmit={this.handleSignUpSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={signUpDetails.name}
                  onChange={this.handleSignUpChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={signUpDetails.email}
                  onChange={this.handleSignUpChange}
                  required
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={signUpDetails.password}
                  onChange={this.handleSignUpChange}
                  required
                />
                <button type="submit">Submit</button>
                <button type="button" onClick={this.toggleSignUpPopup}>Close</button>
              </form>
            </div>
          </div>
        )}

        {/* Sign-In Popup */}
        {isSignInPopupVisible && (
          <div className="popup-overlay">
            <div className="popup">
              <h3>Sign In</h3>
              <form onSubmit={this.handleSignInSubmit}>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={signInDetails.email}
                  onChange={this.handleSignInChange}
                  required
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={signInDetails.password}
                  onChange={this.handleSignInChange}
                  required
                />
                <button type="submit">Submit</button>
                <button type="button" onClick={this.toggleSignInPopup}>Close</button>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Navbar;


