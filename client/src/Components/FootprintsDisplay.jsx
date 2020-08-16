import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import API from "../utils/API";
import Map from "./Map";
import footprintSeeds from "../data/footprintSeeds.json";
import "../pages/Profile/profile.css";

const FootprintsDisplay = (props) => {
  const [userNotesOnCollectionPage, setUserNotesOnCollectionPage] = useState({
    notes: [],
  });
  const { newNoteContent, setNewNoteContent, location, loadUser } = props;

  const { id } = useParams();

  useEffect(() => {
    loadUser(id, setUserNotesOnCollectionPage);
  }, []);

  const deleteNote = (noteId) => {
    axios.delete(`/api/note/${noteId}`).then((res) => {
      loadUser(id, setUserNotesOnCollectionPage);
    });
  };

  return (
    <div id="footprints">
      <div uk-grid>
        {userNotesOnCollectionPage.notes.map((note, index) => {
          return (
            <div key={index}>
              <div className="uk-card-default footprintCards">
                {note.content}
                <button
                  onClick={() => deleteNote(note._id)}
                  className="deleteFootprintButton saveDeleteButton"
                >
                  delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FootprintsDisplay;
