import React from "react";
import Fade from 'react-reveal/Fade';


export const History = () => {

    const cardExp = {
        minWidth: '18rem',
        border: '1px solid gold'
    }
 
  return (
    <div className="container" style={{backgroundColor: 'black', minWidth: '100%'}}>
      <h5 style={{color: 'white', padding: '20px'}}> Work Experience </h5>
      <hr />
      <Fade left>
      <div className="card text-white bg-dark mb-3" style={cardExp}>
        <div className="card-header">MG Holiday Group</div>
        <div className="card-body">
          <h5 className="card-title">Full Stack Developer</h5>
          <p className="card-text">
            I work at MG Holiday Group as a full stack developer, from 6 November 2019 and still going
          </p>
        </div>
      </div>
      </Fade>
      <Fade right>
      <div className="card text-white bg-dark mb-3" style={cardExp}>
        <div className="card-header">Artemis Az group Indonesia</div>
        <div className="card-body">
          <h5 className="card-title">Head of Warehouse</h5>
          <p className="card-text">
            I worked at Artemis Indonesia as Head of Warehouse, from October 2017, to June 2019
          </p>
        </div>
      </div>
      </Fade>
      <Fade left>
      <div className="card text-white bg-dark mb-3" style={cardExp}>
        <div className="card-header">PT Bank Rakyat Indonesia (Persero) TBK</div>
        <div className="card-body">
          <h5 className="card-title">Payment Point</h5>
          <p className="card-text">
              I worked at PT. Bank Rakyat Indonesia (Persero).TBK as payment point staff, from August 2014, to September 2017
          </p>
        </div>
      </div>
      </Fade>
    </div>
  );
};

export default History;
