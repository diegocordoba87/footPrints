import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import logo from "../../images/FPLogo.png";
import MapComp from "../../Components/MapComp";
import NewFootprint from "../../Components/NewFootprint";
import axios from "axios";
import API from "../../utils/API";
import FootprintsDisplay from "../../Components/FootprintsDisplay";
import "./profile.css";

const Profile = (props) => {
  // Setting our component's initial state
  const [userInfo, setUserInfo] = useState("");
  const [userNotes, setUserNotes] = useState([]);
  const [location, setLocation] = useState([]);
  const [newNoteContent, setNewNoteContent] = useState("");
  const [isLocationDisplayed, setIsLocationDisplayed] = useState(true);
  const { setIsSidebarOpen, setParkName } = props;
  const user = sessionStorage.getItem("username");

  const { id } = useParams();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      console.log(lat);
      console.log(lng);
      locationNear(lng, lat);
    });

    loadUser();
  }, []);

  function loadUser() {
    API.getUserById(id)
      .then((res) => {
        console.log(res.data.data);
        setUserInfo(res.data.data);
      })
      .catch((err) => console.log(err));
  }

  const locationNear = (lng, lat) => {
    axios.get(`/api/locationsnear/?lng=${lng}&lat=${lat}`).then((res) => {
      if (res.data && res.data.data && res.data.data.length > 0) {
        console.log("testing", res.data.data[0]._id);
        let id = res.data.data[0]._id;
        setParkName(res.data.data[0].name);
        axios.get(`/api/locations/${id}`).then((res) => {
          console.log(res);
        });
      }
    });
  };

  function addNote(e) {
    e.preventDefault();
    axios.post("/api/newnote", { content: newNoteContent }).then((res) => {
      console.log(res);
    });
  }

  function deleteNote(id) {
    console.log(id);
    axios.delete(`/api/note/${id}`).then((res) => {
      window.alert(`Successfully deleted new note`);
    });
  }

  return (
    <div>
      <div id="dashboardBody" className="backgroundImage headerText">
        <div onClick={() => setIsSidebarOpen(false)}>
          <img
            className="footprintsPageLogo"
            src={logo}
            alt="footprints logo"
          />
          <div className="uk-card-default centerCard">
            <div id="dashboardTabs">
              <button
                id="tablinkLocations"
                class="tablink"
                onClick={() => setIsLocationDisplayed(true)}
              >
                Locations
              </button>
              <button
                id="tablinkFootprints"
                class="tablink"
                onClick={() => setIsLocationDisplayed(false)}
              >
                Footprints
              </button>
              <div id="profileHeader">
                <h2 id="initials">{userInfo.initials}'s Profile</h2>
              </div>
            </div>
            {isLocationDisplayed === true && (
              <div className="uk-card-default purple">
                <NewFootprint
                  {...props}
                  newNoteContent={newNoteContent}
                  setNewNoteContent={setNewNoteContent}
                />
                <MapComp
                  {...props}
                  location={location}
                  setLocation={setLocation}
                />
              </div>
            )}
            {isLocationDisplayed === false && (
              <div className="pink">
                <FootprintsDisplay
                  {...props}
                  newNoteContent={newNoteContent}
                  setNewNoteContent={setNewNoteContent}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
