import React from "react";
import "./login.css";

const LogIn = ({ setIsSidebarOpen }) => {
  return (
    <div id="loginBody" className="backgroundImage">
      <div onClick={() => setIsSidebarOpen(false)}>
        <form id="loginInput">
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

export default LogIn;
