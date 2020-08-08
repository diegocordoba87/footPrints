import React from "react";
import './navbar.css';

const Navbar = () => {

  const openNav = () => {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.display = "none";
  };

  const closeNav = () => {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("main").style.display = "block";

  };

  return (
    <div id="navbar">
      <div id="mySidebar" className="sidebar">
        <a href="#" className="closebtn" onClick={closeNav}>
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

      <div id="main">
        <button className="openbtn" onClick={openNav}>
          ☰
        </button>
      </div>
    </div>
  );
};

export default Navbar;
