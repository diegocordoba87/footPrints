import React, { useState, useEffect } from "react";
import Map from "./Map";
import axios from "axios";
import "../pages/Profile/profile.css";

const MapComp = (props) => {
  const user = sessionStorage.getItem("username");
  const { location, setLocation, setParkName, setParkId, allLocations } = props;

  useEffect(() => {
    axios.get("/api/locations").then((locations) => {
      // setLocation(locations.data.data);
      setLocation(locations.data);
      console.log("location map comp", locations.data);
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
            <a
              className="mappedLocationButtons"
              href={locationObj.url}
              target="_blank"
            >
              {locationObj.name}
            </a>
          </h4>
        ))}
      </div>
    </div>
  );
};

export default MapComp;
