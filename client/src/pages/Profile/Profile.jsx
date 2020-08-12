import React, { useState, useEffect } from "react";
import mongoose from "mongoose";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Button } from "react-foundation";
import "./profile.css";
import API from "../../utils/API"

const Profile = ({ setIsSidebarOpen }) => {
    // Setting our component's initial state
    const [notes, setNotes] = useState([]);
    const noteContent = [];
    const userID = mongoose.Types.ObjectId ('5f33f7f1b22841f37dd7b6fa');
    // Load all books and store them with setBooks
    useEffect(() => {
      loadNotes()
    }, [])
  
    // Loads all books and sets them to books
    function loadNotes() {
      API.getNotes(userID)
        .then(res => {
          setNotes(res.data.data)
          console.log(res.data.data)     
          }).catch(err => console.log(err));
  }




  return (
    
    <div id="profileBody" className="backgroundImage">
      <div onClick={() => setIsSidebarOpen(false)}>
        <h1 className="temporaryPageName">Profile</h1>
        <div className="profileButtonDiv">
          <Button className="profileButton">Log Out</Button>
          <Button className="profileButton">Locations</Button>
          <Button className="profileButton">See Footprints</Button>
        </div>

        <form>
          <div className="cardBody" id="homeHeader">
            <label className="homeText">
              New Footprint:
              <input type="text" name="name" className="newFPForm" />
            </label>
          </div>
        </form>

        <div className="cardBody" id="homeHeader">
          <div className="homeText">My stories</div>
        </div>
        <div className="cardBody" id="homeHeader">
          <div className="homeText">Found Footprints
            {notes.map(note => {
                  return (
                    <p key={note.title}>
                    {note.content}
                    </p>
                  );
                })}
          </div>
          <div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
