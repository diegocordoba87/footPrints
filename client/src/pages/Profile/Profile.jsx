import React, {useState, useEffect} from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import { Button } from "react-foundation";
import "./profile.css";
import axios from "axios";

const Profile = ({ setIsSidebarOpen }) => {
const [note, setNote] = useState("")
const [notes, setNotes]= useState([])

useEffect(() => {
  
  loadNotes()
  
},[]);


function loadNotes() {
  axios.get("/api/notes")
    .then(res => {
      setNotes(res.data.data)
    }
    )
    .catch(err => console.log(err));
};

function handleSubmit(e){
  e.preventDefault()
  
  axios.post("/api/newnote", {content: note}).then((res)=>{
    window.alert(`Successfully created new note`);
    loadNotes()
  })

}

  return (
    <div id="profileBody" className="backgroundImage">
      <img className="footprintsPageLogo" src={logo} alt="footprints logo" />
      <div onClick={() => setIsSidebarOpen(false)}>
        <div id="profileHeader">
          <h2>Profile</h2>
        </div>
        <div className="cardBody" id="homeHeader">
          <form  onSubmit={handleSubmit}>
            <label className="homeText">
              New Footprint:
              <input
              id="note" 
              type="text" 
              value={note}
              name="note" 
              onChange={(e)=>{
                setNote(e.target.value)
              }}
              placeholder="250 words minimum. 1000 words maximum"
              className="newFPForm" />
              <button>Save FootPrint</button>
            </label>
          </form>

          <div className="homeText">My Footprints</div>
          {notes.map((note) => (
          <p key={note._id}>
            <h2>FootPrint</h2>
            {note.content}</p>
      ))}

         
          <div className="homeText">Saved Footprints</div>
        </div>
      </div>
    </div>
  );
};


export default Profile;
