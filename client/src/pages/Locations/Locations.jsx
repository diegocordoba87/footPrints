import React from "react";
import { Button } from "react-foundation";
import Map from "../../Components/Map";
import "./locations.css";
import "../../app.css";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Locations = ({ setIsSidebarOpen }) => {
  
  const [location, setLocation] = useState([])
 
 
  useEffect(()=>{
    axios
    .get("api/locations")
    .then((locations)=>{
      
      setLocation(locations.data.data)
      console.log(locations.data.data)
    })
  }, [])

  
  
  return (

    <div id="locationsBody" className="backgroundImage">
      <div onClick={() => setIsSidebarOpen(false)}>
        <h1 className="temporaryPageName">Locations</h1>
        <Map />
        
        <div style={{marginTop: 80, marginLeft: 80}}>
          {location.map((location)=>(
            <h4>{location.name}</h4>
          ))}
          </div>

      </div>
    </div>
  );
};

export default Locations;
