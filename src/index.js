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
  const [newMovie, setNewMovie] = useState({
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

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredMovies = movieList.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleMovieSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newMovie),
      });
      const data = await response.json();
      setMovieList([...movieList, data]);
      setNewMovie({
        title: "",
        description: "",
        poster: "",
        capacity: "",
        runtime: "",
      });
    } catch (error) {
      console.error("Error adding movie:", error);
    }
  };

  const handlePurchaseClick = () => {
    setAlertMessage("Showtime!");
    setTimeout(() => setAlertMessage(""), 8000); // Clear the alert after 8 seconds
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
          onChange={handleSearch}
        />
        <button className="search" type="button">
          Search
        </button>
      </nav>

      {/* Add new movie form */}
      <form className="movie-form" onSubmit={handleMovieSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={newMovie.title}
          onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
        />
        <textarea
          placeholder="Description"
          value={newMovie.description}
          onChange={(e) =>
            setNewMovie({ ...newMovie, description: e.target.value })
          }
        ></textarea>
        <input
          type="text"
          placeholder="Poster URL"
          value={newMovie.poster}
          onChange={(e) => setNewMovie({ ...newMovie, poster: e.target.value })}
        />
        <input
          type="number"
          placeholder="Capacity"
          value={newMovie.capacity}
          onChange={(e) =>
            setNewMovie({ ...newMovie, capacity: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Runtime"
          value={newMovie.runtime}
          onChange={(e) =>
            setNewMovie({ ...newMovie, runtime: e.target.value })
          }
        />
        <button type="submit">Add Movie</button>
      </form>

      {/* Movie List */}
      <div className="movie-list">
        {filteredMovies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img src={movie.poster} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
            <button className="btn" onClick={handlePurchaseClick}>
              Purchase Movie
            </button>
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
