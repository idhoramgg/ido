import React from "react";
import Fade from 'react-reveal/Fade';

import img1 from '../assets/images/ib.png'
import img2 from '../assets/images/fthlah.png'

export const School = () => {
    const imgStyle = {
        minWidth: '100%',
        height: '500px',
        background: `url(${img1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    }
    const imgStyle2 = {
        minWidth: '100%',
        height: '500px',
        background: `url(${img2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    }
  return (
    <div className="container" style={{backgroundColor: 'black', minWidth: '100%'}}>
      <h5 style={{color: 'white', padding: '20px'}}> Education </h5>
      <Fade left>
      <small className="card mb-3">
        <img className="card-img-top" style={imgStyle} alt="" />
        <small className="card-body">
          <h5 className="card-title">Impact Byte Coding Bootcamp</h5>
          <p className="card-text">
            I joined Impact Byte Coding Bootcamp batch 10 on August 2019, and graduated on October 2019,
          </p>
        </small>
      </small>
      <br/>
      </Fade>
      <Fade right>
      <small className="card mb-3">
        <img className="card-img-top" style={imgStyle2} alt="" />
        <small className="card-body">
          <h5 className="card-title">Sekolah Tinggi Agama Islam Fatahillah</h5>
          <p className="card-text">
           Muamalah Syariah
           2012 - 2016
          </p>
        </small>
      </small>
      </Fade>
    </div>
  );
};

export default School;
