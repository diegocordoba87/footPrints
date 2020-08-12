import React from "react";
import logo from "../../images/FPLogo.png";
import "./login.css";

const LogIn = ({ setIsSidebarOpen }) => {
  return (
    <div id="loginBody" className="backgroundImage">
      <img className="footprintsPageLogo" src={logo} alt="footprints logo" />
      <div onClick={() => setIsSidebarOpen(false)}>
        <h2>Log In</h2>
        <form id="loginInput">
          <input
            className="input"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <input
            className="input"
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </form>
      </div>
    </div>
  );
};

export default LogIn;
