import React from "react";
import "./login.css";

const LogIn = ({ setIsSidebarOpen }) => {
  return (
    <div id="loginBody" className="backgroundImage">
      <div onClick={() => setIsSidebarOpen(false)}>
        <h1 className="temporaryPageName">Log In</h1>
      </div>
    </div>
  );
};

export default LogIn;
