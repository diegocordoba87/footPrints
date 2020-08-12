import React, { useState, useEffect } from "react";
import axios from "axios";
import Demo from "../../Components/demo";
import logo from "../../images/FPLogo.png";

const Demo = ({ setIsSidebarOpen }) => {
  const [location, setLocation] = useState([]);

  const testing = [
    {
      name: "test",
    },
    {
      name: "Atlanta",
    },
  ];

  useEffect(() => {
    axios.get("api/locations").then((locations) => {
      // setLocation(locations.data.data);
      setLocation(testing);
      // console.log(locations.data.data);
    });
  }, []);

  return (
    <div id="locationsBody" className="backgroundImage">
      <img className="footprintsPageLogo" src={logo} alt="footprints logo" />

      <div onClick={() => setIsSidebarOpen(false)}>
        <h2>Footprints</h2>
        <div>
          <div>
            <Map />
          </div>
          <div className="locationDiv">
            {location.map((locationObj) => (
              <h4 className="cardBody">{locationObj.name}</h4>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
