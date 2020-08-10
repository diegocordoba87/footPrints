import React from "react";
import './profile.css';

const Profile = ({ setIsSidebarOpen }) => {
  return (
    <div id="profileBody" className="backgroundImage">
      <div onClick={() => setIsSidebarOpen(false)}>
        <h1 className="temporaryPageName">Profile</h1>
      </div>
    </div>
  );
};

export default Profile;
