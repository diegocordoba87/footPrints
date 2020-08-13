import React from "react";
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

  return (
    <div id="homeBody" className="backgroundImage headerText">
      <div onClick={() => setIsSidebarOpen(false)}>
        <div id="homeHeader" className="uk-text-center" uk-grid>
          <div className="uk-flex-first uk-flex-center">
            <img id="heroImage" src={logo} alt="footprints logo" />
          </div>
          <div id="homeTagLine">
            <p>Everyone has a story.</p>
            <p id="tellYours">Tell yours.</p>
          </div>
          <a href="/#howitworks">
            <img
              className="scrollButton"
              src={scrollDown}
              alt="scroll down button"
            />
          </a>
        </div>

        {/* How it works */}
        <div>
          <div id="howitworks" className="cardBody">
            How It Works <br />
            <div className="uk-card-medium uk-card-default hiwText creatorQuote">
              FootPrints connects us to the people around us by sharing our
              stories.
              <br />
              It’s a bit anti-social network, a bit geo-caching, and a bit tiny
              library.
              <br />
              <br />
              As you interact with the community around you, you will learn more
              about those who went that way before, and can leave a story for
              those yet to come.
              <br />
              <br />
              Here's how to get started:
              <br />
              <br />
              1. Create a user account or log in. 
              <br />
              <br />
              2. Go to your profile page.
              <br />
              Here you can create new stories or edit those
              you’ve already written. You can also see the stories you’ve found
              while visiting local points of interest. 
              <br />
              <br />
              3. Visit the locations page.
              <br />
              Your map page will
              display your current location, indicated by a set of
              footprints. Points of interest are marked by a blue circle. Once
              you enter the circle, you will be shown a random story and can
              leave your own.
            </div>
          </div>
        </div>

        {/* Up and down arrows */}
        <div className="uk-text-center uk-flex-first upDownArrows" uk-grid>
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
        </div>
        {/* About us */}
        <div>
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
      </div>
    </div>
  );
};

export default Home;
