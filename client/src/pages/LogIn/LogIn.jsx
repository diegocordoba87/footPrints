import React, { useState } from "react";
import axios from "axios";
import logo from "../../images/FPLogo.png";
import HowItWorks from "../../Components/HowItWorks/HowItWorks";
import "./login.css";

const LogIn = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);
  const { setIsSidebarOpen, setActiveUser } = props;

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("/api/login", {
        username: username,
        password: password,
      })
      .then((response) => {        
        if(response.data.message==="Authorization successful"){
          props.history.push(`/profile/${response.data.data._id}`)
          setActiveUser(username);
          sessionStorage.setItem("username", username);
          console.log("username: ", username);
        }
      })
      .catch((err) => {
        console.log(err);
        setLoginError(true);
      });
  };

  return (
    <div id="loginBody" className="backgroundImage">
      <div onClick={() => setIsSidebarOpen(false)}>
        <img className="footprintsPageLogo" src={logo} alt="footprints logo" />
        <div className="uk-flex uk-flex-center">
          <div className="cardBodyLogin">
            <h2 className="headerText">Log In</h2>

            <form id="loginInput" onSubmit={handleSubmit}>
              {loginError === true && (
                <div className="loginError uk-alert-danger" uk-alert>
                  <a className="uk-alert-close" uk-close></a>
                  <p>Please enter a valid username and password.</p>
                </div>
              )}
              <input
                className="input"
                type="email"
                name="email"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  setLoginError(false);
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
                  setLoginError(false);
                }}
                placeholder="Password"
                required
              />

              <button className="logSignButton input" type="submit" value="Submit">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;