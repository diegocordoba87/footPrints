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
  const [parkId, setParkId] = useState("");
  const [parkName, setParkName] = useState("");
  const [location, setLocation] = useState([]);
  const [allLocations, setAllLocations] = useState([]);
  const [populatedNoteId, setPopulatedNoteId] = useState("");
  const [populatedNote, setPopulatedNote] = useState("");
  const [newNoteContent, setNewNoteContent] = useState("");
  const [isLocationDisplayed, setIsLocationDisplayed] = useState(true);
  const [userNotesOnCollectionPage, setUserNotesOnCollectionPage] = useState({
    notes: [],
  });
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
    loadLocations();
    loadUser(id, setUserInfo);
  }, []);

  useEffect(() => {
    console.log("park id updated");
    axios.get(`/api/locations/${parkId}`).then((res) => {
      if (res.data && res.data.data && res.data.data.notes && res.data.data.notes.length > 0) {
        const index = getRandomIntInclusive(0, res.data.data.notes.length - 1);
        const noteText = res.data.data.notes[index].content;
        const noteId = res.data.data.notes[index]._id;
        setPopulatedNote(noteText);
        setPopulatedNoteId(noteId);
      }
    })
  }, [parkId]);

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }

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

  const loadLocations = () => {
    axios.get("/api/locations").then((res) => {
      console.log(res);
      if(res.data && res.data.data && res.data.data.length > 0) {
        setAllLocations(res.data.data);
      }
    })
  }

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
                  populatedNote={populatedNote}
                  setPopulatedNote={setPopulatedNote}
                  setPopulatedNoteId={setPopulatedNoteId}
                  setUserNotesOnCollectionPage={setUserNotesOnCollectionPage}
                  noteId={populatedNoteId}
                />
                <MapComp
                  {...props}
                  location={location}
                  setLocation={setLocation}
                  setParkName={setParkName}
                  setParkId={setParkId}
                  allLocations={allLocations}
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
                  setUserInfo={setUserInfo}
                  userNotesOnCollectionPage={userNotesOnCollectionPage}
                  setUserNotesOnCollectionPage={setUserNotesOnCollectionPage}
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
