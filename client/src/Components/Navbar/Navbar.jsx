import React, { useState } from "react";
import { Button } from 'react-foundation';
import navbarLinks from "../../data/navbarLinks.json";
import "./navbar.css";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div id="navbar">
      <div
        id="mySidebar"
        className="sidebar"
        style={{ left: isSidebarOpen ? 0 : -250 }}
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
