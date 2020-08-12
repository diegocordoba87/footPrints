import React, { useState, useEffect } from "react";
import axios from "axios";
import Map from "../../Components/Map";
import "./locations.css";

const Locations = ({ setIsSidebarOpen }) => {
  const [location, setLocation] = useState([]);

  const testing = [
    {
      name: "Marietta",
    },
    {
      name: "Atlanta",
    },
  ];

  useEffect(() => {
    axios.get("api/locations").then((locations) => {
      // setLocation(locations.data.data);
      setLocation(testing);
      console.log(locations.data.data);
    });
  }, []);

  return (
    <div id="locationsBody" className="backgroundImage">
      <div onClick={() => setIsSidebarOpen(false)}>
        <h1 className="temporaryPageName">Locations</h1>
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

export default Locations;
