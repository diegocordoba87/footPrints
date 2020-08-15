import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import API from "../utils/API";

const NewFootprint = (props) => {
  const [parkName, setParkName] = useState("");
  const { setUserInfo, newNoteContent, setNewNoteContent } = props;
  const { id } = useParams();

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
    API.getUserById(id)
      .then((res) => {
        console.log(res.data.data);
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
    <div>
      <div id="goToLocationDiv">
        Go to a marked location <br /> to leave your footprint!
      </div>
      <form id="newFootprint">
        <div className="homeText">{parkName} Compose Your FootPrint:</div>
        <label>
          <textarea
            id="note"
            type="text"
            value={newNoteContent}
            name="note"
            onChange={(e) => {
              setNewNoteContent(e.target.value);
            }}
            placeholder="250 words minimum. 1000 words maximum"
            className="newFPForm"
          />
        </label>
        <button id="newFootprintButton" onClick={addNote}>
          Leave Your FootPrint
        </button>
      </form>
    </div>
  );
};

export default NewFootprint;
