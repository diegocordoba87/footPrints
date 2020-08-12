import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import logo from "../../images/FPLogo.png";
import "./footprints.css";

const Footprints = ({ setIsSidebarOpen }) => {
  // Setting our component's initial state
  const [notes, setNotes] = useState([])

  
  // Load all books and store them with setBooks
  useEffect(() => {
    
    loadNotes()   
    
  }, [])

  // Loads all books and sets them to books
  function loadNotes() {
    API.getNotes()
      .then((res) => {
        setNotes(res.data.data);
      })
      .catch((err) => console.log(err));
  }



  return (
    <div id="footprintsBody" className="backgroundImage">
      <img className="footprintsPageLogo" src={logo} alt="footprints logo" />
      <div onClick={() => setIsSidebarOpen(false)}>
        <h2>My Footprint</h2>

        {notes.map((note) => (
          <p key={note._id}>{note.content}</p>
        ))}
      </div>
    </div>
  );
};

export default Footprints;
