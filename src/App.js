import React  from 'react'                                                                                                                             
import './App.css';
import Navbar  from './component/Navbar/Navbar.jsx'
import Footer from './component/Footer.jsx'
import MovieApp from './index.js';
import Home from './component/Navbar/pages/Home.js'



function App() {
  return (
    
    <div className="App">
     <Navbar/>
     <Footer/>
     <MovieApp/>
     
     <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          <span></span> 
      </a>
    </div>
  
  );
}

export default App;
