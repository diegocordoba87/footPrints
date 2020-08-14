import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import logo from "../../images/FPLogo.png";
import MapComp from "../../Components/MapComp";
import NewFootprint from "../../Components/NewFootprint";
import axios from "axios";
import "./profile.css";
import FootprintsDisplay from "../../Components/FootprintsDisplay";

const Profile = (props) => {
  // Setting our component's initial state

  const [newNoteContent, setnewNoteContent] = useState("");
  const [isLocationDisplayed, setIsLocationDisplayed] = useState(false);
  const notes = [];
  const user = sessionStorage.getItem("username");
  const [location, setLocation] = useState([]);
  const { setIsSidebarOpen } = props;

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

  useEffect(() => {
    const user = sessionStorage.getItem("username");
    loadUser(user);
    locationNear();
  }, []);

  function loadUser(username) {
    API.getUser(username)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  function locationNear() {
    let lng = -84.365373;
    let lat = 33.852656;
    axios
      .get(`http://localhost:3001/api/locationsnear/?lng=${lng}&lat=${lat}`)
      .then((res) => {
        console.log(res);
      });
  }

  function addNote(e) {
    e.preventDefault();
    console.log(e);
  }

  function deleteNote(id) {
    console.log(id);
    axios.delete(`/api/note/${id}`).then((res) => {
      window.alert(`Successfully deleted new note`);
    });
  }

  return (
    <div id="dashboardBody" className="backgroundImage headerText">
      <div onClick={() => setIsSidebarOpen(false)}>
        <img className="footprintsPageLogo" src={logo} alt="footprints logo" />
        <div id="dashboardTabs">
          <button class="tablink" onClick={() => setIsLocationDisplayed(true)}>
            Locations
          </button>
          <button class="tablink" onClick={() => setIsLocationDisplayed(false)}>
            Footprints
          </button>
          {isLocationDisplayed === true && (
            <div className="uk-card-default">
              <NewFootprint />
              <MapComp />
            </div>
          )}
          {isLocationDisplayed === false && (
            <div className="uk-card-default">
              <FootprintsDisplay />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
