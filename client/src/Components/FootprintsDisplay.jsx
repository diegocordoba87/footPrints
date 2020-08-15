import React, { useState } from "react";
import axios from "axios";
import Map from "./Map";
import footprintSeeds from "../data/footprintSeeds.json";
import "../pages/Profile/profile.css";

const FootprintsDisplay = (props) => {
  const notes = [];
  const [notesByLocation, setNotesByLocation] = useState([]);
  const { newNoteContent, setNewNoteContent, location } = props;

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
    <div id="footprints">
      <div uk-grid="masonry: true">
        {footprintSeeds.map((note, index) => {
          return (
            <div>
              <div className="uk-card uk-card-default footprintCards">{note.text}
              <button id="deleteFootprintButton" className="saveDeleteButton">delete</button>
              <button id="saveFootprintButton" className="saveDeleteButton">save</button>
              </div>
            </div>
          );
        })}

        <div className="homeText">
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

        {notes.map((note) => (
          <p key={note._id}>{note.content}</p>
        ))}
      </div>
    </div>
  );
};

export default FootprintsDisplay;
