import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Film() {
  const { id } = useParams();
  const [film, setFilm] = useState(null); // Initialize with null or an empty object

  useEffect(() => {
    // Fetch the specific film based on the id
    fetch(`http://localhost:3000/films/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setFilm(data))
      .catch(error => console.error('Error:', error));
  }, [id]); // Add id to the dependency array

  return (
    <div>
      <h2>Film details for id: {id}</h2>
      {film ? ( // Check if film is not null
        <>
          <h3>{film.id}</h3>
          <p>{film.description}</p>
          <img src={film.image("https://www.gstatic.com/tv/thumb/v22vodart/2157/p2157_v_v8_ab.jpg" },} alt={film.title} />
          <p>Year: {film.year}</p>
          <p>Director: {film.director}</p>
          <p>Rating: {film.rating}</p>
          <p>Actors: {film.actors.join(', ')}</p>
          <p>Genre: {film.genre}</p>
          <p>Duration: {film.duration} minutes</p>
        </>
      ) : (
        <p>Loading film details...</p> // Loading state
      )}
    </div>
  );
}