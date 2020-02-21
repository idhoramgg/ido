import React from 'react';
import './App.css';


import Navbar from './components/Navbar.js'
import Header from './components/Header.js'
import About from './components/About.js'

function App() {
  return (
    <div >
      <Navbar/>
      <div className="App">
      <Header/>
      </div>
      <div className="App">
      <About/>
      </div>

    </div>
  );
}

export default App;
