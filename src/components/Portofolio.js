import React from 'react'

import cukurin from '../assets/images/ckurin.png'
import todoy from '../assets/images/todoy.jpg'
import mgf from '../assets/images/mgf.png'

export const Portofolio = () => {
    return (
        <div className="container" style={{backgroundColor: 'black', minWidth: '100%', height: '100%', color: 'white'}}>
        <h5 id="portofolio" style={{color: 'white', padding: '20px'}}> Portofolio </h5>
        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={cukurin} className="d-block w-100" alt="cukurin"/>
            <div className="carousel-caption d-none d-md-block">
              <h5><a href="https://cukurin.netlify.com" target="_blank" rel="noopener noreferrer" style={{color: 'gold'}}> Cukurin </a></h5>
              <p>Web application for Barbershops, and customer to find a good barbershops</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={todoy} className="d-block w-100" alt="todo"/>
            <div className="carousel-caption d-none d-md-block">
            <h5><a href="https://simpletodo-ido.netlify.com" target="_blank" rel="noopener noreferrer" style={{color: 'gold'}}>Simple Todo</a></h5>
              <p>My first web application training, using localstorage</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={mgf} className="d-block w-100" alt="mgf"/>
            <div className="carousel-caption d-none d-md-block">
              <h5><a href="https://mgfriends.com/" target="_blank" rel="noopener noreferrer" style={{color: 'gold'}}> MG Friends </a></h5>
              <p> MG Friends, Loyalty program for MG Bedbank, gives MG Friends points for each transaction in mgbedbank.com and allow members to claim various rewards with the earned points </p>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      </div>
    )
}
export default Portofolio;
