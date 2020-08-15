import React, { useState, useEffect } from "react";
import MapComp from "../Components/MapComp";
import "../pages/Dashboard/dashboard.css";
import NewFootprint from "../Components/NewFootprint";

const LocationsComp = () => {
  return (
    <div id="dashboardTabs">
      <NewFootprint />
      <MapComp />
    </div>
  );
};

export default LocationsComp;
