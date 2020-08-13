import React, { useState } from "react";
import logo from "../../images/FPLogo.png";
import axios from "axios";
import "./signup.css";

const SignUp = ({ setIsSidebarOpen, history, setActiveUser }) => {
  const [initials, setInitials] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userSignedUp, setUserSignedUp] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/signup", {
        initials: initials,
        username: username,
        password: password,
      })
      .then((response) => {
        console.log(response);
        setUserSignedUp(true);
        setTimeout(() => {
          setActiveUser(username);
          history.push("/profile");
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div id="signupBody" className="backgroundImage">
      <img className="footprintsPageLogo" src={logo} alt="footprints logo" />
      <div onClick={() => setIsSidebarOpen(false)}>
        <h2 className="headerText">Sign Up</h2>
        <div>
          <div id="howitworks" className="cardBodyLogin">
            <div className="uk-card-medium uk-card-default">
              <form id="signupInput" onSubmit={handleSubmit}>
                {userSignedUp === true && 
                  <div id="userSignedUp" className="uk-alert-primary" uk-alert>
                    <a className="uk-alert-close" uk-close></a>
                    <p>You have successfully created an account!</p>
                  </div>
                }
                <input
                  id="initials"
                  className="input"
                  type="text"
                  name="initials"
                  value={initials}
                  onChange={(e) => {
                    setInitials(e.target.value);
                  }}
                  placeholder="Enter your initials"
                  required
                />
                <input
                  className="input"
                  type="email"
                  name="email"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  placeholder="Enter your email"
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
                  placeholder="Enter your password"
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
      </div>
    </div>
  );
};

export default SignUp;
