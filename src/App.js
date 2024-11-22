import React  from 'react'                                                                                                                             
import './App.css';
import Navbar  from './component/Navbar/Navbar.jsx'
import Footer from './component/Footer.jsx'

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
