import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HowItWorks from "../../Components/HowItWorks/HowItWorks";
import aboutUs from "../../data/aboutUs.json";
import Andrea from "../../images/Andrea.png";
import Diego from "../../images/Diego.jpg";
import Liz from "../../images/Liz.jpg";
import Mark from "../../images/Mark.jpg";
import Michael from "../../images/Michael.jpg";
import logo from "../../images/FPLogo.png";
import "./aboutus.css";
import { ExternalLink } from 'react-external-link';

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
      <Router>
        <Route path='/aboutus/elizabeth' component={() => { 
            window.location.href = 'https://github.com/ElizaRegas'; 
            return null;
        }}/>
                <Route path='/aboutus/mark' component={() => { 
            window.location.href = 'https://github.com/mjmoon15'; 
            return null;
        }}/>
                <Route path='/aboutus/diego' component={() => { 
            window.location.href = 'https://github.com/diegocordoba87'; 
            return null;
        }}/>
                <Route path='/aboutus/michael' component={() => { 
            window.location.href = 'https://github.com/m1cha3lnava'; 
            return null;
        }}/>
                <Route path='/aboutus/andrea' component={() => { 
            window.location.href = 'https://github.com/arhamilton92'; 
            return null;
        }}/>
      </Router>
      <div id="aboutusBody" className="backgroundImage">
        <div onClick={() => setIsSidebarOpen(false)}>
          <img
            className="footprintsPageLogo"
            src={logo}
            alt="footprints logo"
          />
          <HowItWorks />
          <div className="uk-animation-fade">
            <div id="aboutus" className="cardBody aboutusCardBody headerText">
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
                          <ExternalLink key={index} href={creator.portfolioLink} target="_blank">
                            <img className="profilePics" src={source} />
                          </ExternalLink>
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
