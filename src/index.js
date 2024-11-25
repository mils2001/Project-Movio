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
  const [isPopupVisible, setIsPopupVisible] = useState(false); // Popup state
  const [popupMovie, setPopupMovie] = useState({
    title: "",
    description: "",
    poster: "",
    capacity: "",
    runtime: "",
  });

  const fetchMovies = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setMovieList(data);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const handlePopupToggle = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const handlePopupFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(popupMovie),
      });
      const data = await response.json();
      setMovieList([...movieList, data]);
      setPopupMovie({
        title: "",
        description: "",
        poster: "",
        capacity: "",
        runtime: "",
      });
      setIsPopupVisible(false); // Close the popup after submission
    } catch (error) {
      console.error("Error adding movie:", error);
    }
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

      {/* Button to trigger popup */}
      <button className="popup-trigger-btn" onClick={handlePopupToggle}>
        Add New Movie (Popup)
      </button>

      {/* Popup Form */}
      {isPopupVisible && (
        <div className="popup-overlay">
          <div className="popup">
            <h3>Add New Movie</h3>
            <form onSubmit={handlePopupFormSubmit}>
              <input
                type="text"
                placeholder="Title"
                value={popupMovie.title}
                onChange={(e) =>
                  setPopupMovie({ ...popupMovie, title: e.target.value })
                }
              />
              <textarea
                placeholder="Description"
                value={popupMovie.description}
                onChange={(e) =>
                  setPopupMovie({ ...popupMovie, description: e.target.value })
                }
              ></textarea>
              <input
                type="text"
                placeholder="Poster URL"
                value={popupMovie.poster}
                onChange={(e) =>
                  setPopupMovie({ ...popupMovie, poster: e.target.value })
                }
              />
              <input
                type="number"
                placeholder="Capacity"
                value={popupMovie.capacity}
                onChange={(e) =>
                  setPopupMovie({ ...popupMovie, capacity: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Runtime"
                value={popupMovie.runtime}
                onChange={(e) =>
                  setPopupMovie({ ...popupMovie, runtime: e.target.value })
                }
              />
              <button type="submit">Submit</button>
              <button
                type="button"
                className="close-btn"
                onClick={handlePopupToggle}
              >
                Close
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Movie List */}
      <div className="movie-list">
        {movieList.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img src={movie.poster} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
            <button className="btn">Purchase Movie</button>
          </div>
        ))}
      </div>

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

