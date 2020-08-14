import React, { useState, useEffect } from "react";
import MapComp from "../Components/MapComp";
import "../pages/Dashboard/dashboard.css";
import NewFootprint from "../Components/NewFootprint";

const LocationsComp = () => {
  
  return (
    <div id="dashboardTabs">
      <button class="tablink" onclick="openPage('Home', this, 'red')">
        Locations
      </button>
      <button
        class="tablink"
        onclick="openPage('News', this, 'green')"
        id="defaultOpen"
      >
        Footprints
      </button>
      <div className="uk-card-default">
        <NewFootprint />
        <MapComp />
      </div>
    </div>
  );
};

export default LocationsComp;