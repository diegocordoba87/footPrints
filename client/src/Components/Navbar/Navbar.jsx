import React, { useState } from "react";
import navbarLinks from "../../data/navbarLinks.json";
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
        {navbarLinks.map((link) => (
          <a href={link.href}>{link.title}</a>
        ))}
        
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
