import React from "react";
import "./signup.css";

const SignUp = ({ setIsSidebarOpen }) => {
  return (
    <div id="signupBody" className="backgroundImage">
      <div onClick={() => setIsSidebarOpen(false)}>
        <form id="signupInput">
          <input
            type="text"
            name="initials"
            placeholder="Enter your initials"
            required
          />
          <input type="email" name="email" placeholder="Email" required />

          <input
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

export default SignUp;
