import React  from 'react'                                                                                                                             
import './App.css';
import Navbar  from './component/Navbar/Navbar.jsx'
import Footer from './component/Footer.jsx'
import MovieApp from './index.js';



function App() {
  return (
    <div className="App">
     <Navbar/>
     <Footer/>
     <MovieApp/>
     
     <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
    
      </a>
    </div>
  
  );
}

export default App;
