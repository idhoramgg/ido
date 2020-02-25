import React, { Component } from 'react';
import BackToTop from 'react-back-to-top-button'
import './App.css';

/* Components */
import Navbar from './components/Navbar.js'
import Header from './components/Header.js'
import About from './components/About.js'
import History from './components/History.js'
import Contact from './components/Contact.js'
import Footer from './components/Footer'
import School from './components/School'
import Loading from './components/Loading'
import Portofolio from './components/Portofolio'
import Skills from './components/Skills'


export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true
    };
  }
  componentDidMount(){
    this.setState({loading: true})
    setTimeout(() => {
      this.setState({loading: false});
    }, 2000)
  }

  render() {
  
    const loadingg = {
      margin: '30% auto',
    }

    if(this.state.loading) {
      return(
        <div style={loadingg}>
          <Loading/>
        </div>
      )
    } else {
      return (
        <div className="container">
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
          <School />
          </div>
          <div className="App">
          <Skills />
          </div>
          <div className="App">
          <Portofolio/>
          </div>
          <div className="App">
          <Contact />
          </div>

          <BackToTop
        showOnScrollUp = {false}
        showAt={1000}
        speed={1000}
        easing="easeInOutQuint"
      >
        <button className="btn btn-warning" style={{position: 'fixed', bottom: 100, left: 10}}>Back To Top</button>
      </BackToTop>
          <div className="App">
          <Footer />
          </div>
        </div>      
       );
    }

  }
}