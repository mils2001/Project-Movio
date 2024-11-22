import React, {useState,useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const API_URL = 'http://localhost:3005/films';

function MovieApp () {
  const [movieList, setMovieList] = useState([]);
  const [Newmovie, setNewMovie] = useState({
    title: '',
    description: '',
    poster: '',
    capacity: '',
    runtime: '',
    id:'null',
  });
  Const[editMovie, setEditMovie] = useState ([]);

 
  function FetchMovie() {
     fetch(API_URL)
    .then((response) => response.json)
    .then((data) =>{
      setMovieList(data);
      if(callback){
        callback();
      }
      useEffect(()=>{
       FetchMovie(()=>{
        console.log("movie fetched successfully")
       })

      },[]);
      

    
    })
  
    
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


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


export default MovieApp
