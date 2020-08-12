import React from "react";
import logo from "../../images/FPLogo.png";
import React, {useState} from "react";
import "./login.css";
import axios from "axios";

const LogIn = ( props) => {
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");

  const handleSubmit= (e)=>{
    e.preventDefault();
    console.log(e)

    axios
      .post("/api/login", { username: username, password: password })
      .then((response) => {
        console.log(response);
        
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div id="loginBody" className="backgroundImage">
      <img className="footprintsPageLogo" src={logo} alt="footprints logo" />
      <div onClick={() => setIsSidebarOpen(false)}>
        <h2>Log In</h2>
        <form id="loginInput">
          <input
            className="input"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <input
            className="input"
            type="password"
            name="password"
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
            placeholder="Password"
            required
          />
          <div className="row">
              <div className="col s12">
                <button className="btn" type="submit">
                  Login
                </button>
              </div>
            </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
