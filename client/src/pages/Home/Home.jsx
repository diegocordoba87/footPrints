import React, { useState } from "react";
import logo from "../../images/FPLogo.png";
import scrollDown from "../../images/FPDownIconPink.png";
import scrollUp from "../../images/UpIconPink.png";
import aboutUs from "../../data/aboutUs.json";
import Andrea from "../../images/Andrea.png";
import Diego from "../../images/Diego.jpg";
import Liz from "../../images/Liz.jpg";
import Mark from "../../images/Mark.jpg";
import Michael from "../../images/Michael.jpg";
import "../../app.css";
import "./home.css";

const Home = ({ setIsSidebarOpen }) => {
  const [layerOne, setLayerOne] = useState(false);
  const [layerTwo, setLayerTwo] = useState(false);
  const [layerThree, setLayerThree] = useState(false);

  const getImage = (name) => {
    let imgName;

    switch (name) {
      case "Andrea":
        imgName = Andrea;
        break;
      case "Diego":
        imgName = Diego;
        break;
      case "Elizabeth":
        imgName = Liz;
        break;
      case "Mark":
        imgName = Mark;
        break;
      case "Michael":
        imgName = Michael;
        break;
    }
    return imgName;
  };

  const renderLayerOne = () => {
    setTimeout(() => {
      console.log("one");
      setLayerOne(true);
    }, 1500);
  };

  const renderLayerTwo = () => {
    setTimeout(() => {
      setLayerTwo(true);
    }, 7000);
  };

  const renderLayerThree = () => {
    setTimeout(() => {
      setLayerThree(true);
    }, 10000);
  };

  return (
    <div
      id="homeBody"
      className="backgroundImage headerText"
      onLoad={(renderLayerOne(), renderLayerTwo(), renderLayerThree())}
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
              className="uk-text-center cardBody uk-animation-fade"
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

        {/* How it works */}
        {layerThree === true && (
          <>
            <div className="uk-animation-fade">
              <div id="howitworks" className="cardBody ">
                How It Works <br />
                <div className="uk-card-medium uk-card-default hiwText creatorQuote">
                  FootPrints connects us to the people around us by sharing our
                  stories- our FootPrints. It’s a bit anti-social network, a bit
                  geo-caching, and a bit tiny library. As you interact with the
                  community around you, you will collect the FootPrints of
                  others, while learning more about those who went that way
                  before, and can leave a FootPrint for those yet to come.
                  <br />
                  <br />
                  To get started: <br />
                  <ul>
                    <li>Create a user account or log in.</li>
                    <li>
                      On your profile page, you can create new FootPrints or
                      edit those you’ve already written. You can also see the
                      FootPrints you’ve found while visiting local points of
                      interest.
                    </li>
                    <li>
                      Visit the locations on your map. The map will display your
                      current location, indicated by a set of footprints. Points
                      of interest are marked by a blue circle. Once you enter
                      the circle, you will be shown a random FootPrint to enjoy
                      and collect, and can leave a FootPrint of your own.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Up and down arrows */}
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
            <div className="uk-animation-fade">
              <div id="aboutus" className="cardBody">
                About Us
                <div className="uk-flex uk-flex-center uk-flex-between specialPadding">
                  {aboutUs.map((creator, index) => {
                    const source = getImage(creator.name);
                    return (
                      <>
                        <div className="uk-card-small uk-card-default uk-card-body uk-flex-between">
                          <a key={index}>
                            <img className="profilePics" src={source} />
                          </a>
                          <br />
                          <div className="creatorName">{creator.name}</div>
                          <div className="creatorQuote">{creator.quote}</div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
