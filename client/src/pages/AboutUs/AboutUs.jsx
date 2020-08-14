import React, { useState, useEffect } from "react";
import aboutUs from "../../data/aboutUs.json";
import Andrea from "../../images/Andrea.png";
import Diego from "../../images/Diego.jpg";
import Liz from "../../images/Liz.jpg";
import Mark from "../../images/Mark.jpg";
import Michael from "../../images/Michael.jpg";
import logo from "../../images/FPLogo.png";
import "./aboutus.css";

const AboutUs = ({ setIsSidebarOpen }) => {
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
          <div className="uk-animation-fade">
            <div id="aboutus" className="cardBody headerText">
              <p id="aboutUsText">About Us</p>
              <div className="uk-flex specialPadding" uk-grid>
                {aboutUs.map((creator, index) => {
                  const source = getImage(creator.name);
                  return (
                    <>
                      <div className="uk-card-default uk-grid-match">
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
    </div>
  );
};

export default AboutUs;
