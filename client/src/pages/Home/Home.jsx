import React from "react";
import "./home.css";

const Home = ({ setIsSidebarOpen }) => {
  return (
    <div id="homeBody">
      <div onClick={() => setIsSidebarOpen(false)}>
        <h1 className="temporaryPageName">Home</h1>

        <h1 id="aboutus" className="temporaryPageName">
          About Us
        </h1>

        <h1 id="howitworks" className="temporaryPageName">
          How It Works
        </h1>
      </div>
    </div>
  );
};

export default Home;
