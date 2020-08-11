import React from "react";
import { Button } from "react-foundation";
import navbarLinks from "../../data/navbarLinks.json";
import "./navbar.css";

const Navbar = ({ isSidebarOpen, setIsSidebarOpen }) => {

  return (
    <div id="navbar">
      <div
        id="mySidebar"
        className="sidebar"
        style={{ left: isSidebarOpen ? 0 : -250 }}
      >
        <span className="closebtn" onClick={() => setIsSidebarOpen(false)}>
          ×
        </span>
        {/* mapping through navbar links for display on side navbar */}
        {navbarLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            onClick={() => setIsSidebarOpen(false)}
          >
            {link.title}
          </a>
        ))}
      </div>
      {/* hamburger button */}
      <Button
        id="hamburger"
        className="openbtn"
        onClick={() => setIsSidebarOpen(true)}
      >
        ☰
      </Button>
    </div>
  );
};

export default Navbar;
