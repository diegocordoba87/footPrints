import React from "react";
import "../../app.css";

const Footprints = ({ setIsSidebarOpen }) => {

  return (
    <div onClick={() => setIsSidebarOpen(false)}>
      <h1 className="temporaryPageName">Footprints</h1>
    </div>
  );
};

export default Footprints;
