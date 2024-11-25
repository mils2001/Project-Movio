import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const API_URL = "http://localhost:3002/films";

function MovieApp() {
  const [movieList, setMovieList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [isPricePopupVisible, setIsPricePopupVisible] = useState(false); // Price popup state
  const [selectedMovie, setSelectedMovie] = useState(null); // Track the selected movie
  const [price, setPrice] = useState(""); // Track the price input

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
    setIsPricePopupVisible(true); // Show the price popup
  };

  const handlePriceSubmit = (e) => {
    e.preventDefault();
    console.log(`Movie: ${selectedMovie.title}, Price: $${price}`);
    setAlertMessage(`You purchased "${selectedMovie.title}" for $${price}!`);
    setIsPricePopupVisible(false); // Close the popup
    setTimeout(() => setAlertMessage(""), 3000); // Clear the alert after 3 seconds
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="movie-app">
      {/* Alert Message */}
      {alertMessage && <div className="alert">{alertMessage}</div>}

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
              Purchase 5$
            </button>
          </div>
        ))}
      </div>

      {/* Price Popup */}
      {isPricePopupVisible && (
        <div className="popup-overlay">
          <div className="popup">
            <h3>Enter Payment for {selectedMovie.title}</h3>
            <form onSubmit={handlePriceSubmit}>
              <input
                type="number"
                placeholder="Payment Method"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
              <button type="submit">Submit</button>
              <button
                type="button"
                className="close-btn"
                onClick={() => setIsPricePopupVisible(false)}
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


