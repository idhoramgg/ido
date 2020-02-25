import React from "react";
import "../index.css"

export const Skills = () => {
  const cardEl = {
    minWidth: "100%",
    display: "flex",
    color: 'white',
    backgroundColor: 'black'
  };
  const colora = {
      backgroundColor: 'black',
      border: '1px solid gold',
      color: 'white',

      "&:hover": {
          backgroundColor: "gold",
          color: 'black'
      }
  }
  return (
    <div
      className="container"
      style={{
        backgroundColor: "black",
        minWidth: "100%",
        height: "100%",
        color: "white",
        border: '2px solid gold',
      }}
    >
      <h5 id="skills" style={{ color: "white", padding: "20px" }}>
        {" "}
        Skills{" "}
      </h5>
      <p style={{ display: "flex", justifyContent: "space-around" }}>
        <a
          className="btn btn-warning"
          data-toggle="collapse"
          href="#multiCollapseExample1"
          role="button"
          aria-expanded="false"
          aria-controls="multiCollapseExample1"
        >
          FrontEnd
        </a>
        <button
          className="btn btn-warning"
          type="button"
          data-toggle="collapse"
          data-target="#multiCollapseExample2"
          aria-expanded="false"
          aria-controls="multiCollapseExample2"
        >
          Backend
        </button>
      </p>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="collapse multi-collapse" id="multiCollapseExample1">
              <div className="card card-body" style={cardEl}>
                <ul className="list-group">
                  <li style={colora} className="list-group-item">Figma</li>
                  <li style={colora} className="list-group-item">HTML 5</li>
                  <li style={colora} className="list-group-item">CSS 3</li>
                  <li style={colora} className="list-group-item">Boostrap</li>
                  <li style={colora} className="list-group-item">SASS</li>
                  <li style={colora} className="list-group-item">JavaScript</li>
                  <li style={colora} className="list-group-item">React JS</li>

                </ul>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="collapse multi-collapse" id="multiCollapseExample2">
              <div className="card card-body" style={cardEl}>
              <ul className="list-group">
                  <li style={colora} className="list-group-item">Node JS</li>
                  <li style={colora} className="list-group-item">Express JS</li>
                  <li style={colora} className="list-group-item">Python</li>
                  <li style={colora} className="list-group-item">Django</li>
                  <li style={colora} className="list-group-item">MySQL</li>
                  <li style={colora} className="list-group-item">MongoDB</li>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
