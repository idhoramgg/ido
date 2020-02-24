import React from 'react';
import './App.css';

/* Components */

import Navbar from './components/Navbar.js'
import Header from './components/Header.js'
import About from './components/About.js'
import History from './components/History.js'
import Contact from './components/Contact.js'
import Footer from './components/Footer'

function App() {
  return (
    <div className="container" >
      <Navbar/>
      <div className="App">
      <Header/>
      </div>
      <div className="App">
      <About/>
      </div>
      <div className="App">
      <History />
      </div>
      <div className="App">
      <Contact />
      </div>
      <div className="App">
      <Footer />
      </div>

    </div>
  );
}

export default App;
