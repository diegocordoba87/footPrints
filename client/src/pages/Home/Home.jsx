import React from "react";
import logo from "../../images/FPLogo.png";
import scrollDown from "../../images/FPDownIconPink.png";
import aboutUs from "../../data/aboutUs.json";
import Diego from "../../images/Diego.jpg";
import Liz from "../../images/Liz.jpg";
import "../../app.css";
import "./home.css";

const Home = ({ setIsSidebarOpen }) => {

  const getImage = (name) => {
    let imgName;

    switch (name) {
      case "Diego":
        imgName = Diego;
        break;
      case "Liz":
        imgName = Liz;
        break;
    }
    return imgName;
  };

  return (
    <div id="homeBody" className="backgroundImage">
      <div onClick={() => setIsSidebarOpen(false)}>
        <div id="homeHeader" className="float-right">
          <img id="heroImage" src={logo} alt="footprints logo" />

          <div id="homeTagLine">
            <p>Everyone has a story.</p>
            <p id="tellYours">Tell yours.</p>
          </div>
          <a href="/#aboutus">
            <img id="scrollDown" src={scrollDown} alt="scroll down button" />
          </a>
        </div>
        <div>
          <div id="aboutus" className="cardBody float-left">
            About Us
            <div className="align-center">
              {aboutUs.map((creator, index) => {
                const source = getImage(creator.name);
                return (
                  <div key={index}>
                    <a>
                      <img className="profilePics" src={source} />
                    </a>
                    <div>{creator.name}</div>
                    <div>{creator.quote1}</div>
                    <div>{creator.quote2}</div>
                    <div>{creator.quote3}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div>
          <div id="howitworks" className="cardBody">
            How It Works
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
