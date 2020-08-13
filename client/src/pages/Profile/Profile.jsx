import React, { useState, useEffect } from "react";
import mongoose from "mongoose";
import API from "../../utils/API";
import logo from "../../images/FPLogo.png";
import axios from "axios";
import "./profile.css";

const Profile = ({ setIsSidebarOpen }) => {
  // Setting our component's initial state
  const [notes, setNotes] = useState([]);
  const [newNoteContent, setnewNoteContent] = useState("");
  
  const userID = mongoose.Types.ObjectId("5f330cd61dc6d17841ddc045");
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

  function handleSubmit(e){
    e.preventDefault()
    console.log(e)
    console.log(e.target.value)
    axios.post("/api/newnote", {content: newNoteContent}).then((res)=>{
      console.log(res)
      
      window.alert(`Successfully created new note`);
      //updateNote(note_id, userID)
      setnewNoteContent("")
      loadNotes()
    })
  }
  function deleteNote(id) {
    console.log(id);

    axios.delete(`/api/note/${id}`).then((res) => {
      window.alert(`Successfully deleted new note`);
      loadNotes();
    });
  }

  function updateNote(note_id, userID){
    axios.put(`/api/users/${userID}/writtennotes`, {_id:userID}).then((res)=>{
      console.log(res)
    })
  }

  return (
    <div id="profileBody" className="backgroundImage">
      <img className="footprintsPageLogo" src={logo} alt="footprints logo" />
      <div onClick={() => setIsSidebarOpen(false)}>
        <div id="profileHeader">
          <h2>Profile</h2>
        </div>
        <div className="cardBody" id="profileCardBody">
          <form  id="profileForm">
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
            <button id="newFootprintButton"onClick={
            (e)=>{handleSubmit(e.target.value)}}>Save FootPrint</button>
          </form>
          
          

          <div className="cardBody">
            <div className="homeText">My Stories</div>
          </div>

          <div className="cardBody">
            <div className="homeText">
              Found FootPrints
              {notes.map((note) => {
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
                
              )})}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
