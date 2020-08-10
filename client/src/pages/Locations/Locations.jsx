import React from "react";
import Map from "../../Components/Map";

const Locations = ({ setIsSidebarOpen }) => {

  return (
    <div onClick={() => setIsSidebarOpen(false)}>
      <Map />
    </div>
  );
};

export default Locations;