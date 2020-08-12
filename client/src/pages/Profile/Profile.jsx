import React, { useState, useEffect } from "react";
import mongoose from "mongoose";
import API from "../../utils/API";
import logo from "../../images/FPLogo.png";
import axios from "axios";
import "./profile.css";

const Profile = ({ setIsSidebarOpen }) => {
  // Setting our component's initial state
  const [notes, setNotes] = useState([]);
  const noteContent = [];
  const userID = mongoose.Types.ObjectId("5f33f7f1b22841f37dd7b6fa");
  // Load all books and store them with setBooks
  useEffect(() => {
    loadNotes();
  }, []);

  // Loads all books and sets them to books
  function loadNotes() {
    API.getNotes(userID)
      .then((res) => {
        setNotes(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => console.log(err));
  }

  function handleSubmit(e) {
    e.preventDefault();

    axios.post("/api/newnote", { content: notes }).then((res) => {
      window.alert(`Successfully created new note`);
      loadNotes();
    });
  }
  function deleteNote(id) {
    console.log(id);

    axios.delete(`/api/note/${id}`).then((res) => {
      window.alert(`Successfully deleted new note`);
      loadNotes();
    });
  }

  return (
    <div id="profileBody" className="backgroundImage">
      <img className="footprintsPageLogo" src={logo} alt="footprints logo" />
      <div onClick={() => setIsSidebarOpen(false)}>
        <div id="profileHeader">
          <h2>Profile</h2>
        </div>
        <div className="cardBody" id="profileCardBody">
          <form onSubmit={handleSubmit} id="profileForm">
            <div className="homeText">New FootPrint:</div>
            <label>
              <textarea
                id="note"
                type="text"
                value={notes}
                name="note"
                onChange={(e) => {
                  setNotes(e.target.value);
                }}
                placeholder="250 words minimum. 1000 words maximum"
                className="newFPForm"
              />
            </label>
          </form>
          <button id="newFootprintButton">Save FootPrint</button>

          <div className="cardBody">
            <div className="homeText">My Stories</div>
          </div>

          <div className="cardBody">
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
      </div>
    </div>
  );
};

export default Profile;
