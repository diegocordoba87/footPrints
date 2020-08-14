import React, { useState, useEffect } from "react";
import axios from "axios";
import Map from "../../Components/Map";
import logo from "../../images/FPLogo.png";
import "./locations.css";

const Locations = ({ setIsSidebarOpen }) => {
  const [location, setLocation] = useState([]);
  const [footprints, setFootprints] = useState([])

  useEffect(() => {
    locationNear()
    const testing = [
    ];
  }, []);

  const locationNear = () => {
    let lng= -84.365373
    let lat= 33.852656
    axios.get(`/api/locationsnear/?lng=${lng}&lat=${lat}`).then((res)=>{
      console.log(res)
    })
  }

  return (
    <div id="locationsBody" className="backgroundImage">
      <img className="footprintsPageLogo" src={logo} alt="footprints logo" />

      <div onClick={() => setIsSidebarOpen(false)}>
        <h2>Locations</h2>
        <div>
          <div>
            <Map />
          </div>
          <div className="notesDiv">

          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;
