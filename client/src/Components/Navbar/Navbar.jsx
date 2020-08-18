import React from "react";
import navbarLinks from "../../data/navbarLinks.json";
import "./navbar.css";

const Navbar = ({
  isSidebarOpen,
  setIsSidebarOpen,
  activeUser,
  setActiveUser,
}) => {
  const currentURLObj = new URL(window.location.href);

  // filtering navbar links to be displayed 
  let filteredNavbarLinks = navbarLinks.filter((linkObj) => {
    if (activeUser !== "") {
      return !linkObj.hiddenWhenLoggedIn;
    } else {
      return !linkObj.hiddenIfLoggedOut;
    }
  });

  filteredNavbarLinks = filteredNavbarLinks.filter(
    (linkObj) => linkObj.href !== currentURLObj.pathname
  );
  // setting username and id to empty strings on logout
  const handleLogOut = () => {
    setIsSidebarOpen(false);
    setTimeout(() => {
      setActiveUser("");
      sessionStorage.setItem("id", "");
      sessionStorage.setItem("username", "");
      window.location.assign("/");
    }, 1000);
  };

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
        {/* if a user is logged in, put logout on the navbar */}
        {activeUser !== "" && (
          <p className="mediumText" onClick={handleLogOut}>
            Log Out
          </p>
        )}
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
