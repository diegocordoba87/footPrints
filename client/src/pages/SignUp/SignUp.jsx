import React from "react";
import logo from "../../images/FPLogo.png";
import "./signup.css";

const SignUp = ({ setIsSidebarOpen }) => {
  return (
    <div id="signupBody" className="backgroundImage">
      <img className="footprintsPageLogo" src={logo} alt="footprints logo" />
      <div onClick={() => setIsSidebarOpen(false)}>
        <h2>Sign Up</h2>
        <form id="signupInput">
          <input
            className="input"
            type="text"
            name="initials"
            placeholder="Enter your initials"
            required
          />
          <input
            className="input"
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />
          <input
            className="input"
            type="password"
            name="password"
            placeholder="Enter your password"
            required
          />
          <input
            className="input"
            type="password"
            name="password"
            placeholder="Re-enter your password"
            required
          />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
