import React, { useState, useEffect } from "react";
import Map from './Map';
import axios from "axios";

const MapComp = () => {
  const [newNoteContent, setnewNoteContent] = useState("");
  const notes = [];
  const user = sessionStorage.getItem("username");
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
      // console.log(locations.data.data);
    });
  }, []);

  return (
    <div>
      <div>
          <Map />
        </div>
        <div className="locationDiv">
          {location.map((locationObj) => (
            <h4 className="cardBodyLocations">{locationObj.name}</h4>
          ))}
        </div>
    </div>
  );
};

export default MapComp;
