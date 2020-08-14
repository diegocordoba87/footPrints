import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import logo from "../../images/FPLogo.png";
import axios from "axios";
import "./profile.css";

const Profile = ({ setIsSidebarOpen }) => {
  // Setting our component's initial state

  const [userInfo, setUserInfo] = useState([]);
  const [newNoteContent, setnewNoteContent] = useState("");
  const [userNotes, setUserNotes] = useState([]);
  const [notesByLocation, setNotesByLocation] = useState([]);
  const user = sessionStorage.getItem("username");
  const [parkName, setParkName] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      console.log(lat);
      console.log(lng);
      locationNear(lng, lat);
    });

    const user = sessionStorage.getItem("username");

    loadUser(user);
  }, []);

  function loadUser(username) {
    API.getUser(username)
      .then((res) => {
        setUserInfo(res.data.data[0]);
      })
      .catch((err) => console.log(err));
  }

  const locationNear = (lng, lat) => {
    axios.get(`/api/locationsnear/?lng=${lng}&lat=${lat}`).then((res) => {
      console.log(res);
      // console.log("testing", res.data.data[0]._id)
      let id = res.data.data[0]._id;
      console.log(id);
      setParkName(res.data.data[0].name);
      axios.get(`/api/locations/${id}`).then((res) => {
        console.log(res);
      });
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
    <div id="profileBody" className="backgroundImage">
      <img className="footprintsPageLogo" src={logo} alt="footprints logo" />
      <div onClick={() => setIsSidebarOpen(false)}>
        <div id="profileHeader">
          <h2>{userInfo.initials}'s Profile</h2>
        </div>
        <div className="cardBody" id="profileCardBody">
          <form id="profileForm">
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
          </form>
          <div className="cardBody">
            <div className="homeText">My Stories</div>
          </div>

          <div className="cardBody">
            <div className="homeText">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
