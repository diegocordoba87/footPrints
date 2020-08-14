import React, { useState } from "react";
import logo from "../../images/FPLogo.png";
import scrollDown from "../../images/FPDownIconPink.png";
import scrollUp from "../../images/UpIconPink.png";
import "../../app.css";
import "./home.css";

const Home = ({ setIsSidebarOpen }) => {
  const [layerOne, setLayerOne] = useState(false);
  const [layerTwo, setLayerTwo] = useState(false);
  // const [layerThree, setLayerThree] = useState(false);

  const renderLayerOne = () => {
    setTimeout(() => {
      console.log("one");
      setLayerOne(true);
    }, 1000);
  };

  const renderLayerTwo = () => {
    setTimeout(() => {
      setLayerTwo(true);
    }, 6000);
  };

  // const renderLayerThree = () => {
  //   setTimeout(() => {
  //     setLayerThree(true);
  //   }, 8000);
  // };

  return (
    <div
      id="homeBody"
      className="backgroundImage headerText"
      onLoad={(renderLayerOne(), renderLayerTwo())}
    >
      <div onClick={() => setIsSidebarOpen(false)}>
        {/* <a href="/#howitworks">
          <img
            id="homeButtonOne"
            className="scrollButton"
            src={scrollDown}
            alt="scroll down button"
          />
        </a> */}
        <div className="uk-flex-first uk-flex-center">
          <img id="heroImage" src={logo} alt="footprints logo" />
        </div>
        {layerOne === true && (
          <div id="homeLayerOne">
            <div
              id="homeHeader"
              className="uk-text-center cardBody uk-animation-slide-bottom"
              uk-grid
              tabindex="0"
            >
              <div id="homeTagLine">
                <p className="uk-animation-fade" tabindex="0" id="story">
                  Everyone has a story.
                </p>
              </div>
            </div>
          </div>
        )}
        {layerTwo === true && (
          <p className="uk-animation-fade" tabindex="0" id="tellYours">
            Tell yours.
          </p>
        )}

        {/* {layerThree === true && (
          <button
            className="logSignButton uk-animation-fade input startButton"
            type="button"
            onClick={() => setIsSidebarOpen(true)}
          >
            Get Started
          </button>
        )} */}

        {/* <div className="uk-text-center uk-flex-first upDownArrows" uk-grid>
              <a href="/">
                <img
                  className="scrollButton"
                  src={scrollUp}
                  alt="scroll down button"
                />
              </a>
              <a href="/#aboutus">
                <img
                  className="scrollButton"
                  src={scrollDown}
                  alt="scroll down button"
                />
              </a>
            </div> */}
        {/* About us */}
      </div>
    </div>
  );
};

export default Home;
