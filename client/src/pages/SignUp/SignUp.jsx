import React, { useState } from "react";
import logo from "../../images/FPLogo.png";
import axios from "axios";
import "./signup.css";
import HowItWorks from "../../Components/HowItWorks/HowItWorks";

const SignUp = ({ setIsSidebarOpen, history, setActiveUser }) => {
  const [initials, setInitials] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userSignedUp, setUserSignedUp] = useState(false);
  const [signUpError, setSignUpError] = useState(false);

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
        const id = response.data.data._id;
        setUserSignedUp(true);
        setTimeout(() => {
          setActiveUser(username);
          history.push(`/profile/${id}`);
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
        setSignUpError(true);
      });
  };

  return (
    <div id="signupBody" className="backgroundImage">
      <div onClick={() => setIsSidebarOpen(false)}>
        <img className="footprintsPageLogo" src={logo} alt="footprints logo" />

        <div class="uk-flex uk-flex-center">
          <div id="howitworks" className="cardBodyLogin cardBodySignup">
            <h2 className="headerText headerTextSignup">Sign Up</h2>
            <form id="signupInput" onSubmit={handleSubmit}>
              {userSignedUp === true && (
                <div className="loginError uk-alert-primary" uk-alert>
                  <a className="uk-alert-close" uk-close></a>
                  <p>You have successfully created an account!</p>
                </div>
              )}
              {signUpError === true && (
                <div className="loginError uk-alert-danger" uk-alert>
                  <a class="uk-alert-close" uk-close></a>
                  <p>Sign up failed. Please try again.</p>
                </div>
              )}
              <input
                id="initials"
                className="inputSignup"
                type="text"
                name="initials"
                value={initials}
                onChange={(e) => {
                  setInitials(e.target.value);
                  setSignUpError(false);
                }}
                placeholder="Initials"
                required
              />
              <input
                className="inputSignup"
                type="email"
                name="email"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  setSignUpError(false);
                }}
                placeholder="Email"
                required
              />
              <input
                className="inputSignup"
                type="password"
                name="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setSignUpError(false);
                }}
                placeholder="Password"
                required
              />

              <button id="getStartedButton" className="logSignButton input" type="submit" value="Submit">
                Get Started
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
