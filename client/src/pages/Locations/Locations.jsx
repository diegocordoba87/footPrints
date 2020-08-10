import React from "react";
import Map from "../../Components/Map";
import "./locations.css";

const Locations = ({ setIsSidebarOpen }) => {
  return (
    <div id="locationsBody" className="backgroundImage">
      <div onClick={() => setIsSidebarOpen(false)}>
        <Map />
      </div>
    </div>
  );
};

export default Locations;
