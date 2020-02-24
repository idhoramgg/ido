import React from "react";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
  );
};

export default Navbar;
