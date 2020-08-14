import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../../utils/API";
import logo from "../../images/FPLogo.png";
import MapComp from "../../Components/MapComp";
import NewFootprint from "../../Components/NewFootprint";
import axios from "axios";
import FootprintsDisplay from "../../Components/FootprintsDisplay";
import "./profile.css";

const Profile = (props) => {
  // Setting our component's initial state
  const [userInfo, setUserInfo] = useState({
    initials: "",
  });
  const [newNoteContent, setnewNoteContent] = useState("");
  const [userNotes, setUserNotes] = useState([]);
  const [notesByLocation, setNotesByLocation] = useState([]);
  const user = sessionStorage.getItem("username");
  const [parkName, setParkName] = useState("");
  const [isLocationDisplayed, setIsLocationDisplayed] = useState(true);
  const { setIsSidebarOpen } = props;

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
                class="tablink"
                onClick={() => setIsLocationDisplayed(true)}
              >
                Locations
              </button>
              <button
                class="tablink"
                onClick={() => setIsLocationDisplayed(false)}
              >
                Footprints
              </button>
              <div id="profileHeader">
                <h2>{userInfo.initials}'s Profile</h2>
              </div>
            </div>
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

          {/* <form id="profileForm">
            <div className="homeText">{parkName} New FootPrint:</div>
            <label>
              <textarea
                id="note"
                type="text"
                value={newNoteContent}
                name="note"
                onChange={(e) => {
                  setnewNoteContent(e.target.value);
                }}
                placeholder="250 words minimum. 1000 words maximum"
                className="newFPForm"
              />
            </label>
            <button id="newFootprintButton" onClick={addNote}>
              Save FootPrint
            </button>
          </form> */}

          {/* <div className="homeText">
            Found FootPrints
            {notesByLocation.map((note) => {
              return (
                <p key={note.title}>
                  {note.content}
                  <button
                    onClick={() => {
                      deleteNote(note._id);
                    }}
                  >
                    Delete Footprint
                  </button>
                </p>
              );
            })}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
