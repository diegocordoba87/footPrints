import React, { useState, useEffect } from "react";
import HowItWorks from "../../Components/HowItWorks/HowItWorks";
import aboutUs from "../../data/aboutUs.json";
import Andrea from "../../images/Andrea.png";
import Diego from "../../images/Diego.jpg";
import Liz from "../../images/Liz.jpg";
import Mark from "../../images/Mark.jpg";
import Michael from "../../images/Michael.jpg";
import logo from "../../images/FPLogo.png";
import "./aboutus.css";

const AboutUs = ({ setIsSidebarOpen }) => {
  const [isProfileDisplayed, setIsProfileDisplayed] = useState(false);
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
    <div>
      <div id="aboutusBody" className="backgroundImage">
        <div onClick={() => setIsSidebarOpen(false)}>
          <img
            className="footprintsPageLogo"
            src={logo}
            alt="footprints logo"
          />
          <HowItWorks />
          <div className="uk-animation-fade">
            <div id="aboutus" className="cardBody headerText">
              <p id="aboutUsText">About Us</p>
              <div uk-grid>
                <div className="aboutTabs">
                  {aboutUs.map((creator, index) => {
                    const source = getImage(creator.name);
                    return (
                      <>
                        <button
                          id="tablinkAbout"
                          class="tablinkAbout"
                          onClick={() => setIsProfileDisplayed(true)}
                        >
                          <a key={index} href={creator.portfolioLink} target="_blank">
                            <img className="profilePics" src={source} />
                          </a>
                          <div className="creatorName">{creator.name}</div>
                          <div className="creatorQuote">{creator.quote}</div>
                        </button>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
