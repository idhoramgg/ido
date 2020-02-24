import React from "react";
import image from "../assets/images/bgido.png";
import pdff from '../assets/files/file.pdf';

export const Header = () => {
  const imagetop = {
    backgroundImage: `url(${image})`,
    height: "300px",
    maxWidth: "100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: 'cover'
  };

  const hero = {
      width: '350px',
      height: '100px',
      position: 'relative',
      top: '30%'
  }
  const h3style = {
      color: 'white',
      fontSize: '26px',
      fontFamily: 'Raleway',
  }
  return (
    <div style={imagetop}>
      <div style={hero}>
            <h3 style={h3style}>Ridho Abdul Majid</h3>
            <a className="btn btn-warning" href={pdff} download> Download CV</a>
      </div>
    </div>
  );
};

export default Header;
