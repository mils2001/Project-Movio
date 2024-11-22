import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css'; // Assuming you have App-specific styles
import App from './App';
import reportWebVitals from './reportWebVitals';

const API_URL = 'http://localhost:3005/films';

function MovieApp() {
  const [movieList, setMovieList] = useState([]);
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    poster: '',
    capacity: '',
    runtime: '',
    id: null,
  });
  const [alert, setAlert] = useState(''); // State for alert messages

  // Fetch movies from API
  const fetchMovies = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setMovieList(data);
      console.log('Movies fetched successfully');
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  // Post a new movie
  const handleMovieSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newMovie),
      });
      const data = await response.json();
      setMovieList([...movieList, data]);
      setNewMovie({
        title: '',
        description: '',
        poster: '',
        capacity: '',
        runtime: '',
        id: null,
      });
      console.log('Movie added successfully');
    } catch (error) {
      console.error('Error adding movie:', error);
    }
  };

  // Change event for "Purchase Movie" button
  const handlePurchaseMovie = () => {
    setAlert('PURCHASED!'); // Update alert message
    setTimeout(() => setAlert(''), 2000); // Clear alert after 2 seconds
  };

  // Fetch movies on component mount
  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Movie App</h1>
      
      {/* Add new movie form */}
      <form onSubmit={handleMovieSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={newMovie.title}
          onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
        />
        <textarea
          placeholder="Description"
          value={newMovie.description}
          onChange={(e) => setNewMovie({ ...newMovie, description: e.target.value })}
        />
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
          onChange={(e) => setNewMovie({ ...newMovie, capacity: e.target.value })}
        />
        <input
          type="text"
          placeholder="Runtime"
          value={newMovie.runtime}
          onChange={(e) => setNewMovie({ ...newMovie, runtime: e.target.value })}
        />
        <button type="submit">Add Movie</button>
      </form>

      {/* Alert */}
      {alert && <div className="alert">{alert}</div>}

      {/* Movie List */}
      <ul>
        {movieList.map((movie) => (
          <li key={movie.id}>
            <h2>{movie.title}</h2>
            <p>{movie.description}</p>
            <img src={movie.poster} alt={movie.title} />
            <button className="btn" onClick={handlePurchaseMovie}>
              Purchase Movie
            </button>
          </li>
        ))}
      </ul>

      {/* Footer */}
      <div className="footer">
        <footer>
          <span>2025 Molvotv Entertainment. All rights reserved.</span>
        </footer>
      </div>
    </div>
  );
}

// Render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MovieApp />
  </React.StrictMode>
);

// Performance measurement (optional)
reportWebVitals();

export default MovieApp;

