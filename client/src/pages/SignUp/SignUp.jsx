import React from "react";
import "./signup.css";

const SignUp = ({ setIsSidebarOpen }) => {
  return (
    <div id="signupBody" className="backgroundImage">
      <div onClick={() => setIsSidebarOpen(false)}>
        <h1 className="temporaryPageName">Sign Up</h1>
      </div>
    </div>
  );
};

export default SignUp;
