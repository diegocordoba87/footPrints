import React from "react";
import { Button } from "react-foundation";
import Map from "../../Components/Map";
import "./locations.css";
import "../../app.css";

const Locations = ({ setIsSidebarOpen }) => {
  return (
    <div id="locationsBody" className="backgroundImage">
      <div onClick={() => setIsSidebarOpen(false)}>
        <h1 className="temporaryPageName">Locations</h1>
        <Map />
      </div>
    </div>
  );
};

export default Locations;
