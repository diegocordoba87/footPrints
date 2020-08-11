import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import { Button } from "react-foundation";
import "./profile.css";

const Profile = ({ setIsSidebarOpen }) => {
  return (
    <div id="profileBody" className="backgroundImage">
      <div onClick={() => setIsSidebarOpen(false)}>
        <div id="profileHeader">
          <div className="Logo">Profile</div>
        </div>
        <div className="cardBody" id="homeHeader">
          <form>
            <label className="homeText">
              New Footprint:
              <input type="text" name="name" className="newFPForm" />
            </label>
          </form>

          <div className="homeText">My Footprints</div>

          <div className="homeText">Saved Footprints</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
