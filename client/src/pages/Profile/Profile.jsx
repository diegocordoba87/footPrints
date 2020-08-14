import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import logo from "../../images/FPLogo.png";
import axios from "axios";
import "./profile.css";

const Profile = ({ setIsSidebarOpen }) => {
  // Setting our component's initial state
  
  const [newNoteContent, setnewNoteContent] = useState("");
  const [userNotes, setUserNotes] = useState([])
  const [notesByLocation, setNotesByLocation]= useState([])
  const user = sessionStorage.getItem("username")
  const [parkName, setParkName] = useState("")
  
  useEffect(() => {
    console.log(user)
    
    loadUser(user);
    locationNear()
  }, []);

  function loadUser(username) {
    API.getUser(username)
      .then((res) => {
        
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  function locationNear(){
    let lng= -84.365373
    let lat= 33.852656
    axios
    .get(`/api/locationsnear/?lng=${lng}&lat=${lat}`)
    .then((res)=>{
      console.log("testing", res.data.data)
      let name = res.data.data[0].name
      this.setParkName(name)
      console.log(res.data.data[0].name)
      
    })
  }

  function addNote(e){
    e.preventDefault()
    console.log(e)
    
  }

  function deleteNote(id) {
    console.log(id);
    axios.delete(`/api/note/${id}`).then((res) => {
      window.alert(`Successfully deleted new note`);
      
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
            <button id="newFootprintButton" onClick={(e) => {
                        addNote(e.target.value);
                      }}>Save FootPrint</button>
          </form>
          <div className="cardBody">
            <div className="homeText">My Stories</div>
          </div>

          <div className="cardBody">
            <div className="homeText">
              Found FootPrints
              {notesByLocation.map((note) => {
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
