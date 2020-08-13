import React, { useState } from "react";
import axios from "axios";
import logo from "../../images/FPLogo.png";
import "./login.css";

const LogIn = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setIsSidebarOpen, setActiveUser } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);

    axios
      .post("/api/login", { username: username, password: password })
      .then((response) => {
        console.log(response);
        //put in place for dynamic navbar- can be replaced with cookies
        setActiveUser(username);
        sessionStorage.setItem("username", username);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div id="loginBody" className="backgroundImage">
      <img className="footprintsPageLogo" src={logo} alt="footprints logo" />
      <div onClick={() => setIsSidebarOpen(false)}>
        <h2 className="headerText">Log In</h2>

        <div>
          <div id="howitworks" className="cardBodyLogin">
            <div className="uk-card-medium uk-card-default">
              <form id="loginInput" onClick={handleSubmit}>
                <input
                  className="input"
                  type="email"
                  name="email"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  placeholder="Email"
                  required
                />
                <input
                  className="input"
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  placeholder="Password"
                  required
                />
                <div className="row">
                  <div className="col s12">
                    <button
                      className="logSignButton input"
                      type="submit"
                      
                    >
                      Login
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
