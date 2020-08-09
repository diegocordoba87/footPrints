import React, { useState } from "react";
import "./navbar.css";

const Navbar = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div id="navbar">
      <div
        id="mySidebar"
        className="sidebar"
        style={{ width: isSidebarOpen ? 250 : 0 }}
      >
        <a
          href="#"
          className="closebtn"
          onClick={() => setIsSidebarOpen(false)}
        >
          ×
        </a>
        <a href="#">Home</a>
        <a href="#">Sign In</a>
        <a href="#">Sign Up</a>
        <a href="#">My Profile</a>
        <a href="#">Locations</a>
        <a href="#">About Us</a>
        <a href="#">How it Works</a>
      </div>
      <button
        id="hamburger"
        className="openbtn"
        onClick={() => setIsSidebarOpen(true)}
        style={{ display: isSidebarOpen ? "none" : "block" }}
      >
        ☰
      </button>
    </div>
  );
};

export default Navbar;
