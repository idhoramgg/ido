import React from "react";
import Fade from "react-reveal/Fade";

export const About = () => {
  const card = {
    height: "300px",
    minWidth: "100%",
    backgroundColor: "black",
    display: "flex",
    justifyContent: "flex-start",
    flexWrap: "wrap",
  };
  const cardItem = {
    height: "100%",
    margin: "auto",
    maxWidth: "100%",
    color: "white",
    padding: "20px 0",
  };
  const sosmed = {
    height: "25px",
    width: "30px",
    display: "flex",
    // backgroundColor: 'white',
    margin: "20px",
    justifyContent: "center",
    border: "1px solid gold",
  };
  const sosmedCont = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    textAlign: "center",
    alignContent: "center",
  };
  const p = {
    padding: "20px",
    color: "#fff",
  };
  return (
    <div style={card}>
      <Fade left>
        <div style={cardItem}>
          <h5 id="aboutpage">About me</h5>
          <hr />
          <p style={p}>
            {" "}
            Hello, My name is Ridho Abdul Majid, Iam 26 years old, Iam a coffee,
            animals and coding lovers, I really enjoy my time learning and work
            as Software Engineer. I Live in Komplek Departemen Pertanian Atsiri
            Permai, Jl.Akar Wangi V no. 2 Citayam. Now Iam working as a Full
            Stack Developer in MG Holiday Group
          </p>
          <div style={sosmedCont}>
            <div style={sosmed}>
              <a
                href="https://www.linkedin.com/in/ridho-abdul-majid-24a988188/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa fa-linkedin" style={{ color: "white" }}></i>
              </a>
            </div>
            <div style={sosmed}>
              <a
                href="https://www.facebook.com/idhoram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa fa-facebook" style={{ color: "white" }}></i>
              </a>
            </div>
            <div style={sosmed}>
              <a
                href="https://www.instagram.com/idhoram/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa fa-instagram" style={{ color: "white" }}></i>
              </a>
            </div>
            <div style={sosmed}>
              <a
                href="https://wa.me/6287882252815"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa fa-whatsapp" style={{ color: "white" }}></i>
              </a>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default About;
