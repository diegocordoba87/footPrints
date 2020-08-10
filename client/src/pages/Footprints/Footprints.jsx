import React from "react";
import { Button } from "react-foundation";
import "../../app.css";

const Footprints = ({ setIsSidebarOpen }) => {

  return (
    <div onClick={() => setIsSidebarOpen(false)}>
      <h1 className="temporaryPageName">Footprints</h1>
      <Button className="homeButton">Log Out</Button>
    </div>
  );
};

export default Footprints;
