import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import API from "../utils/API";

const NewFootprint = (props) => {
  const [parkName, setParkName] = useState("");
  const [userInfo, setUserInfo] = useState("");
  const { parkId, populatedNote } = props;
  const { newNoteContent, setNewNoteContent } = props;
  const { id: userId } = useParams();

  const locationNear = (lng, lat) => {
    axios.get(`/api/locationsnear/?lng=${lng}&lat=${lat}`).then((res) => {
      if (res.data && res.data.data && res.data.data.length > 0) {
        let id = res.data.data[0]._id;
        setParkName(res.data.data[0].name);
        axios.get(`/api/locations/${id}`).then((res) => {
          console.log(res);
        });
      }
    });
  };

  function loadUser() {
    API.getUserById(userId)
      .then((res) => {
        console.log("userInfo: ", res.data.data[0].content);
        setUserInfo(res.data.data);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      console.log(lat);
      console.log(lng);
      locationNear(lng, lat);
    });
    loadUser();
  }, []);

  function addNote(e) {
    e.preventDefault();
    axios.post("/api/newnote", { content: newNoteContent }).then((res) => {
      const noteId = res.data.data._id;
      console.log("id: ", noteId);
      console.log("userInfo", userId);
      axios.put(`/api/user/${userId}/addnote`, { id: noteId }).then((res) => {
        console.log("note id: ", res);
        axios
          .put(`/api/locations/${parkId}/addnote`, { id: noteId })
          .then((res) => {
            console.log(res);
          });
      });
      setNewNoteContent("");
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
      <div id="goToLocationDiv">
        Go to a marked location <br /> to leave your footprint!
      </div>
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
            placeholder="1000 words, maximum"
            className="newFPForm"
          ></textarea>
        </label>
        <button id="newFootprintButton" onClick={addNote}>
          Leave Your FootPrint
        </button>
      </form>
      <div id="newFootprintAvailable">
        <div id="newFootprintText">A new FootPrint is available!</div>
        <div>
          <div
            id="newFootprintCardBody"
            className="uk-card uk-card-default footprintCards"
          >
            <p className="footprintText">{populatedNote}</p>
            <button className="deleteFootprintButton readSaveDeleteButton">
              delete
            </button>
            <button className="saveFootprintButton readSaveDeleteButton">
              save
            </button>
            <button className="readFootprintButton readSaveDeleteButton">
              read
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewFootprint;
