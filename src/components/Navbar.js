import React from "react";
import "../App.css";

export const Navbar = () => {
  const head = {
    position: "fixed",
    left: "0",
    top: "0",
    minWidth: "100%",
    backgroundColor: "black",
    color: "white",
    textAlign: "center",
    border: "1px solid gold",
    zIndex: "999",
  };
  const nav = {
    color: "#fff",
  };
  return (
    <div style={head}>
      <nav className="navbar navbar-expand-lg navbar-dark dark">
        <a href="/" className="navbar-brand">
          {" "}
          <h5>My Personal Website</h5>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#aboutpage">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contactpage">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portofolio">
                Portofolio
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
