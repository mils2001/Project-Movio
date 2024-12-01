import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";


const API_URL = "http://localhost:3000/films";

function MovieApp() {
  const [movieList, setMovieList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [isPaymentPopupVisible, setIsPaymentPopupVisible] = useState(false); // Popup state
  const [selectedMovie, setSelectedMovie] = useState(null); // Selected movie state
  const [paymentMethod, setPaymentMethod] = useState(""); // Payment method state
  const [phoneNumber, setPhoneNumber] = useState(""); // Phone number state

  const fetchMovies = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setMovieList(data);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const handlePurchaseClick = (movie) => {
    setSelectedMovie(movie);
    setIsPaymentPopupVisible(true); // Show the payment popup
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    console.log(
      `Movie: ${selectedMovie.title}, Payment Method: ${paymentMethod}, Phone Number: ${phoneNumber}`
    );
    setAlertMessage(
      `You purchased "${selectedMovie.title}" using ${paymentMethod}! Phone Number: ${phoneNumber}`
    );
    setIsPaymentPopupVisible(false); // Close the popup
    setTimeout(() => setAlertMessage(""), 3000); // Clear the alert after 3 seconds
    setPhoneNumber(""); // Clear phone number field
    setPaymentMethod(""); // Clear payment method field
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    
    <div className="movie-app">
      {/* Alert Message */}
      {alertMessage && <div className="alert">{alertMessage}</div>}
      <Router>
      <div>
        <Navbar/>
      <Routes>
          <Route path="/" element={<Home />} /> {/* Home page */}
          <Route path="/movies" element={<MovieApp />} /> {/* Movies listing */}
          <Route path="/about" element={<About />} /> {/* About page */}
          <Route path="/contact" element={<Contact />} /> {/* Contact page */}
        </Routes>
      </div>
      </Router>
      {/* Navbar */}
      <nav className="navbar">
        <input
          type="text"
          placeholder="Search movies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="search" type="button">
          Search
        </button>
      </nav>

      {/* Movie List */}
      <div className="movie-list">
        {movieList.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img src={movie.poster} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
            <button
              className="btn"
              onClick={() => handlePurchaseClick(movie)}
            >
              Purchase Movie
            </button>
          </div>
        ))}
      </div>

      {/* Payment Popup */}
      {isPaymentPopupVisible && (
        <div className="popup-overlay">
          <div className="popup">
            <h3>Choose Payment Method for {selectedMovie.title}</h3>
            <form onSubmit={handlePaymentSubmit}>
              <label htmlFor="payment-method">Payment Method:</label>
              <select
                id="payment-method"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                required
              >
                <option value="" disabled>
                  Select Payment Method
                </option>
                <option value="M-Pesa">M-Pesa</option>
                <option value="Airtel Money">Airtel Money</option>
                <option value="Western Union">Western Union</option>
              </select>
              <input
                type="tel"
                placeholder="Enter phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
              <button type="submit" className="subs">Submit</button>
              <button
                type="button"
                className="close-btn"
                onClick={() => setIsPaymentPopupVisible(false)}
              >
                Close
              </button>
            </form>
          </div>
          
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <span>2025 Molvotv Entertainment@All rights reserved.</span>
      </footer>
    </div>
  );
}

// Render the app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
export default MovieApp;




