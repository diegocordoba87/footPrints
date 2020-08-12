import React from "react";
import navbarLinks from "../../data/navbarLinks.json";
import "./navbar.css";

const Navbar = ({ isSidebarOpen, setIsSidebarOpen, activeUser, setActiveUser }) => {
  
  const currentURLObj = new URL(window.location.href);

  let filteredNavbarLinks = navbarLinks.filter((linkObj) => {
    if (activeUser !== "") {
      return !linkObj.hiddenWhenLoggedIn;
    } else {
      return !linkObj.hiddenIfLoggedOut;
    }
  });

  filteredNavbarLinks = filteredNavbarLinks.filter((linkObj) => linkObj.href !== currentURLObj.pathname);

  const handleLogOut = () => {
    setActiveUser('');
    sessionStorage.setItem('username', '');
    window.location.assign('/');
  }

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
        {filteredNavbarLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            onClick={() => setIsSidebarOpen(false)}
          >
            {link.title}
          </a>
        ))}

        {activeUser !== "" && <p onClick={handleLogOut}>Log Out</p>}
      </div>
      {/* hamburger button */}
      <button
        id="hamburger"
        className="openbtn"
        onClick={() => setIsSidebarOpen(true)}
      >
        ☰
      </button>
    </div>
  );
};

export default Navbar;
