import React from "react";

export const Footer = () => {
  const footerS = {
    position: "fixed",
    left: "0",
    bottom: "0",
    minWidth: "100%",
    backgroundColor: "black",
    color: "white",
    textAlign: "center",
    border: "1px solid gold",
  };

  return (
    <div className="container">
      <div style={footerS}>
        <h5> Made with &hearts; in Citayam</h5>
        <h5> Copyright 2020 </h5>
      </div>
    </div>
  );
};

export default Footer;
