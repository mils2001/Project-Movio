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
      <cart>
         </cart>
    </div>
  )
}