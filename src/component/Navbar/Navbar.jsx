import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import './Navbar.css'; // Assuming Navbar.css exists
import Home from './pages/Home';
import About from './pages/About'; // Make sure About.js exists
import Contact from './pages/Contact' // Make sure Contact.js exists
import Layout from './pages/Layout';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Welcome',
      isSignUpPopupVisible: false,
      isSignInPopupVisible: false,
      signUpDetails: { name: '', email: '', password: '' },
      signInDetails: { email: '', password: '' },
    };
  }

  // Toggle Sign-Up Popup
  toggleSignUpPopup = () => {
    this.setState((prevState) => ({
      isSignUpPopupVisible: !prevState.isSignUpPopupVisible,
    }));
  };

  // Toggle Sign-In Popup
  toggleSignInPopup = () => {
    this.setState((prevState) => ({
      isSignInPopupVisible: !prevState.isSignInPopupVisible,
    }));
  };

  // Handle Sign-Up Input Changes
  handleSignUpChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      signUpDetails: { ...prevState.signUpDetails, [name]: value },
    }));
  };

  // Handle Sign-In Input Changes
  handleSignInChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      signInDetails: { ...prevState.signInDetails, [name]: value },
    }));
  };

  // Handle Sign-Up Form Submission
  handleSignUpSubmit = (event) => {
    event.preventDefault();
    const { signUpDetails } = this.state;
    console.log('Sign-Up Details:', signUpDetails);
    this.setState({
      message: 'You have signed up!',
      isSignUpPopupVisible: false,
      signUpDetails: { name: '', email: '', password: '' },
    });
  };

  // Handle Sign-In Form Submission
  handleSignInSubmit = (event) => {
    event.preventDefault();
    const { signInDetails } = this.state;
    console.log('Sign-In Details:', signInDetails);
    this.setState({
      message: 'Welcome Back!',
      isSignInPopupVisible: false,
      signInDetails: { email: '', password: '' },
    });
  };

  render() {
    const {
      message,
      isSignUpPopupVisible,
      isSignInPopupVisible,
      signUpDetails,
      signInDetails,
    } = this.state;

    return (
      <Router>
        <div>
          <nav className="navbar">
            <div className="logo">MOVIO</div>
            <ul className="nav-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
            <div className="message">{message}</div>
            <button className="gold-button" onClick={this.toggleSignUpPopup}>
              Sign up
            </button>
            <button className="gold-button" onClick={this.toggleSignInPopup}>
              Sign in
            </button>
          </nav>

          {/* Routes for Pages */}
          <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout/>}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            </Route>

            
          </Routes>
          </BrowserRouter>

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
                  <button type="submit" className="subs">
                    Submit
                  </button>
                  <button
                    type="button"
                    onClick={this.toggleSignUpPopup}
                    className="close"
                  >
                    Close
                  </button>
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
                  <button type="submit" className="subs">
                    Submit
                  </button>
                  <button
                    type="button"
                    onClick={this.toggleSignInPopup}
                    className="close"
                  >
                    Close
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </Router>
    );
  }
}

export default Navbar;
