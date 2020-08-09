import React from "react";

const Profile = ({ setIsSidebarOpen }) => {

  return (
    <div onClick={() => setIsSidebarOpen(false)}>
      <h1 className="temporaryPageName">Profile</h1>
    </div>
  );
};

export default Profile;
