import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Button } from "react-foundation";
import "./profile.css";

const Profile = ({ setIsSidebarOpen }) => {
  return (
    <div id="profileBody" className="backgroundImage">
      <div onClick={() => setIsSidebarOpen(false)}>
        <h1 className="temporaryPageName">Profile</h1>
        {/* <div className="profileButtonDiv">
          <Button className="profileButton">Log Out</Button>
          <Button className="profileButton">Locations</Button>
          <Button className="profileButton">See Footprints</Button>
        </div> */}

        <form>
          <div className="cardBody" id="homeHeader">
            <label className="homeText">
              New Footprint:
              <input type="text" name="name" className="newFPForm" />
            </label>
          </div>
        </form>

        <div className="cardBody" id="homeHeader">
          <div className="homeText">My Footprints</div>
        </div>
        <div className="cardBody" id="homeHeader">
          <div className="homeText">Saved Footprints</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
