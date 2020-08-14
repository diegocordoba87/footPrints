import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import logo from "../../images/FPLogo.png";
import Map from "../../Components/Map";
import axios from "axios";
import "./profile.css";

const Profile = ({ setIsSidebarOpen }) => {
  // Setting our component's initial state

  const [newNoteContent, setnewNoteContent] = useState("");

  const notes = [];
  const user = sessionStorage.getItem("username");
  const [location, setLocation] = useState([]);

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
    console.log(user);

  useEffect(() => {
    const user = sessionStorage.getItem("username");
>>>>>>> a78460b8bed4c3ff45a0176ac73f1c76b8170b86

    loadUser(user);
    locationNear()
  }, []);

  function loadUser(username) {
<<<<<<< HEAD
    console.log(username);
=======
>>>>>>> a78460b8bed4c3ff45a0176ac73f1c76b8170b86
    API.getUser(username)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  function locationNear(){
    let lng= -84.365373
    let lat= 33.852656
    axios.get(`http://localhost:3001/api/locationsnear/?lng=${lng}&lat=${lat}`).then((res)=>{
      console.log(res)
    })
  }

  function addNote(e){
    e.preventDefault()
    console.log(e)
    
  }

  function deleteNote(id) {
    console.log(id);
    axios.delete(`/api/note/${id}`).then((res) => {
      window.alert(`Successfully deleted new note`);
    });
  }

  return (
    <div id="footprintsBody" className="backgroundImage">
      <img className="footprintsPageLogo" src={logo} alt="footprints logo" />
      <div onClick={() => setIsSidebarOpen(false)}>
       
    
        <div id="profileHeader">
          <h2>Dashboard</h2>
        </div>
<<<<<<< HEAD
        <div className="uk-flex-center" uk-grid>
          <div id="footprintsDivs">
            <div
              className="uk-child-width-1-2@s uk-child-width-1-3@m"
              uk-grid="masonry: true"
            >
              <div>
                <div
                  className="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle"
                  style={{ height: 130 }}
                >
                  <form id="profileForm">
                    <div className="homeText">New FootPrint:</div>
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
                    <button id="newFootprintButton">Save FootPrint</button>
                  </form>
                </div>
              </div>
              <div>
                <div
                  className="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle"
                  style={{ height: 150 }}
                >
                  <div className="homeText">My Footprints</div>
                </div>
              </div>
              <div>
                <div
                  className="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle"
                  style={{ height: 160 }}
                >
                  <div className="homeText">
                    Found FootPrints
                    {notes.map((note) => {
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
              <div>
                <div
                  className="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle"
                  style={{ height: 120 }}
                >
                  <div>
                    <Map />
                  </div>
                  <div className="locationDiv">
                    {location.map((locationObj) => (
                      <h4 className="cardBody">{locationObj.name}</h4>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <div
                  className="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle"
                  style={{ height: 140 }}
                >
                  Item
                </div>
              </div>
=======
        <div className="cardBody" id="profileCardBody">
          <form id="profileForm">
            <div className="homeText">New FootPrint:</div>
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
            <button id="newFootprintButton" onSubmit={addNote}>Save FootPrint</button>
          </form>
          <div className="cardBody">
            <div className="homeText">My Stories</div>
          </div>

          <div className="cardBody">
            <div className="homeText">
              Found FootPrints

              {notesByLocation.map((note) => {
                return(

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
>>>>>>> 2ec3f3be944872f6f1318528818bb2320421808d
            </div>
            <div class="uk-flex-first"></div>
          </div>
          {notes.map((note) => (
            <p key={note._id}>{note.content}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
