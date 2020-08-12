import React from "react";
import logo from "../../images/FPLogo.png";
import "./profile.css";

const Profile = ({ setIsSidebarOpen }) => {
  return (
    <div id="profileBody" className="backgroundImage">
      <img className="footprintsPageLogo" src={logo} alt="footprints logo" />
      <div onClick={() => setIsSidebarOpen(false)}>
        <div id="profileHeader">
          <h2>Profile</h2>
        </div>
        <div className="cardBody">
          <form id="profileForm">
            <label className="homeText">
              New Footprint:
              <input
                id="newFootprint"
                type="text"
                name="name"
                className="newFPForm"
              />
            </label>
          </form>

          <div className="homeText">My Footprints:</div>

          <div className="homeText">Saved Footprints:</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
