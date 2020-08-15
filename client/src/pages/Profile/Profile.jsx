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
  // const [userNotes, setUserNotes] = useState([]);
  const [parkId, setParkId] = useState("");
  const [parkName, setParkName] = useState("");
  const [location, setLocation] = useState([]);
  const [newNoteContent, setNewNoteContent] = useState("");
  const [isLocationDisplayed, setIsLocationDisplayed] = useState(false);
  const { setIsSidebarOpen } = props;
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

    loadUser(id, setUserInfo);
  }, []);

  function loadUser(userId, cb) {
    API.getUserById(userId)
      .then((res) => {
        cb(res.data.data);
      })
      .catch((err) => console.log(err));
  }

  const locationNear = (lng, lat) => {
    axios.get(`/api/locationsnear/?lng=${lng}&lat=${lat}`).then((res) => {
      if (res.data && res.data.data && res.data.data.length > 0) {
        console.log("testing", res.data.data[0]._id);
        let id = res.data.data[0]._id;
        setParkName(res.data.data[0].name);
        setParkId(id);
      }
    });
  };

  function addNote(e) {
    e.preventDefault();
    axios.post("/api/newnote", { content: newNoteContent }).then((res) => {
      console.log(res);
      const id = res.data.data._id;
      console.log("res id: ", id);
      axios
        .put(`/api/users/${userInfo._id}/addnote`, { _id: id })
        .then((res) => {
          console.log("note id: ", res);
        });
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
                className="tablink"
                onClick={() => setIsLocationDisplayed(true)}
              >
                Locations
              </button>
              <button
                id="tablinkFootprints"
                className="tablink"
                onClick={() => setIsLocationDisplayed(false)}
              >
                Collection
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
                  parkId={parkId}
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
                  loadUser={loadUser}
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
