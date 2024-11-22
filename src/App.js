import React, { useEffect, useState }  from 'react'                                                                                                                             
import './App.css';
import Navbar  from './component/Navbar/Navbar.jsx'
import Footer from './component/Footer.jsx'

const API_URL = 'http://localhost:3005/films';

const movieApp = () => {
  const [movieList, setMovieList] = useState([]);
  const [Newmovie, setNewMovie] = useState({
    title: '',
    description: '',
    poster: '',
    capacity: '',
    runtime: '',
    id:'null',
  });
  Const [editMovie, setEditMovie] = useState ([]);

 useEffect(() => {
  const FetchMovie = async () => {
    try{
      const response = await fetch(API_URL);
      const data = await response.json();
      setMovieList(data, movieList);
    } catch(error) {
      console.error('Error:', error);
    }
  };
 
  setMovieList();

 }, []);
 const HandleMovieList = async(event) =>{
    event.preventDefault();
    try{
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(Newmovie),
      });
      const data = await response.json();
      setMovieList([...movieList, data]);
      setNewMovie({
        title: '',
        description: '',
        poster: '',
        capacity: '',
        runtime: '',
        id:'null',
      });
    } catch(error) {
      console.error('Error:', error);
    }
 
 }
}




function App() {
  return (
    <div className="App">
     <Navbar/>
     <Footer/>
     
     
     <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </a>
    </div>
  
  );
}

export default App;
