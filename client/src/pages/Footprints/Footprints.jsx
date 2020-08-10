import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import "../../app.css";


const Footprints = ({ setIsSidebarOpen }) => {
  // Setting our component's initial state
  const [notes, setNotes] = useState([])
  // Load all books and store them with setBooks
  useEffect(() => {
    console.log('hi')
    loadNotes()
  }, [])

  // Loads all books and sets them to books
  function loadNotes() {
    API.getNotes()
      .then(res => {
        setNotes(res.data.data)
      }
      )
      .catch(err => console.log(err));
  };

  return (
    <div onClick={() => setIsSidebarOpen(false)}>
      {notes.map((note) => (
          <p key={note._id}>>{note.content}</p>
      ))}
    </div>
  );
};

export default Footprints;