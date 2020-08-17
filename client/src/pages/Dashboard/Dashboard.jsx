import React, { useState, useEffect } from "react";
import MapComp from "../../Components/MapComp";
import logo from "../../images/FPLogo.png";
import "./dashboard.css";
import NewFootprint from "../../Components/NewFootprint";

const Dashboard = ({ setIsSidebarOpen }) => {
  return (
    <div id="dashboardBody" className="backgroundImage headerText">
      <div onClick={() => setIsSidebarOpen(false)}>
        <img className="footprintsPageLogo" src={logo} alt="footprints logo" />
        <div id="dashboardTabs">
          <div className="uk-card-default">
            <NewFootprint />
            <MapComp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
