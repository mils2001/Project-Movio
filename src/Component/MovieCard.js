import React from 'react';
import './MovieCard.css.'; // Add CSS file for styling

function MovieCard({ title, description, poster }) {
  return (
    <div className="movie-card">
      <img src={poster} alt={`${title} Poster`} className="movie-poster" />
      <div className="movie-info">
        <h3 className="movie-title">{title}</h3>
        <p className="movie-description">{description}</p>
      </div>
    </div>
  );
}

export default MovieCard;
