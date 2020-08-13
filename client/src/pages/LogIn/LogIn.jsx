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
        console.log(response);
        console.log(response.data.message);

        if (response.data.message === "Authorization successful") {
          props.history.push("/profile");
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
      <img className="footprintsPageLogo" src={logo} alt="footprints logo" />

      <div onClick={() => setIsSidebarOpen(false)}>
        <div class="uk-flex uk-flex-between">
          <div>
            <div id="howitworks" className="cardBodyLogin">
              <div className="uk-card-medium uk-card-default">
                <h2 className="headerText">Log In</h2>
                <form id="loginInput" onSubmit={handleSubmit}>
                  {loginError === true && (
                    <div id="loginError" class="uk-alert-danger" uk-alert>
                      <a class="uk-alert-close" uk-close></a>
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
                  <div className="row">
                    <div className="col s12">
                      <button className="logSignButton input" type="submit">
                        Login
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <HowItWorks />
        </div>
      </div>
    </div>
  );
};

export default LogIn;
