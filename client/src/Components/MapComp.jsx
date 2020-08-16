import React, { useState, useEffect } from "react";
import Map from "./Map";
import axios from "axios";
import "../pages/Profile/profile.css";

const MapComp = (props) => {
  const user = sessionStorage.getItem("username");
  const { location, setLocation, setParkName, setParkId, allLocations } = props;

  useEffect(() => {
    const testing = [
      {
        name: "Marietta",
      },
      {
        name: "Atlanta",
      },
    ];
    axios.get("api/locations").then((locations) => {
      // setLocation(locations.data.data);
      setLocation(testing);
      // console.log(locations.data.data);
    });
  }, []);

  return (
    <div>
      <div>
        <Map
          setParkName={setParkName}
          setParkId={setParkId}
          allLocations={allLocations}
        />
      </div>
      <div className="locationDiv">
        {location.map((locationObj) => (
          <h4 className="cardBodyLocations">
            Location name: {locationObj.name}
          </h4>
        ))}
      </div>
    </div>
  );
};

export default MapComp;
