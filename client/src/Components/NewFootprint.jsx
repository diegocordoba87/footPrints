import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Speech from "./SpeechComp";
import axios from "axios";
import API from "../utils/API";

const NewFootprint = (props) => {
  // const [parkName, setParkName] = useState("");
  const {
    parkId,
    populatedNote,
    setPopulatedNote,
    setPopulatedNoteId,
    noteId,
    newNoteContent,
    setNewNoteContent,
    setUserNotesOnCollectionPage,
    parkName,
  } = props;
  const { id: userId } = useParams();

  const addNote = (e) => {
    e.preventDefault();
    axios.post("/api/newnote", { content: newNoteContent }).then((res) => {
      const noteId = res.data.data._id;
      axios
        .put(`/api/locations/${parkId}/addnote`, { id: noteId })
        .then((res) => {
          console.log(res);
        });
      setNewNoteContent("");
    });
  };

  const collectNote = (e) => {
    e.preventDefault();
    axios.put(`/api/user/${userId}/addnote`, { id: noteId }).then((res) => {
      console.log("note id: ", res);
    });
    setPopulatedNote("");
  };

  const clearNewNoteField = () => {
    setPopulatedNote("");
    setPopulatedNoteId("");
  };

  return (
    <div>
      {!parkId && (
        <div id="goToLocationDiv">
          Go to a marked location <br /> to leave your footprint!
        </div>
      )}
      {parkId && (
        <div>
          <form id="newFootprint">
            <div className="homeText">
              {parkName ? (
                <div>
                  Welcome to {parkName}! <br /> Please compose your FootPrint:
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <label>
              <textarea
                id="note"
                type="text"
                value={newNoteContent}
                name="note"
                onChange={(e) => {
                  setNewNoteContent(e.target.value);
                }}
                placeholder="You can write 500 words, and you can write 500 more. But that's it."
                className="newFPForm"
              ></textarea>
            </label>
            <button id="newFootprintButton" onClick={addNote}>
              leave your FootPrint
            </button>
          </form>
          <div id="newFootprintAvailable">
            <div id="newFootprintText">A new FootPrint is available!</div>
            <div>
              <div
                id="newFootprintCardBody"
                className="uk-card uk-card-default footprintCards"
              >
                {populatedNote !== "" && (
                  <>
                    <button
                      className="deleteFootprintButton readSaveDeleteButton"
                      onClick={clearNewNoteField}
                    >
                      delete
                    </button>
                    <button
                      className="saveFootprintButton readSaveDeleteButton"
                      onClick={collectNote}
                    >
                      save
                    </button>
                    {/* <button className="readFootprintButton readSaveDeleteButton">
                  read
                </button> */}
                    <Speech
                      footprintText={populatedNote}
                      deleteNote={() => {}}
                      noteId={noteId}
                      parentComponent={"newFootprint"}
                    />
                  </>
                )}
                <p id="footprintText">{populatedNote}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewFootprint;
