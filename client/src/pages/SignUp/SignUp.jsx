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
          <div id="howitworks" className="cardBodyLogin">
            <h2 className="headerText">Sign Up</h2>
            <form id="signupInput" onSubmit={handleSubmit}>
              {userSignedUp === true && (
                <div id="userSignedUp" className="uk-alert-primary" uk-alert>
                  <a className="uk-alert-close" uk-close></a>
                  <p>You have successfully created an account!</p>
                </div>
              )}
              {signUpError === true && (
                <div id="loginError" class="uk-alert-danger" uk-alert>
                  <a class="uk-alert-close" uk-close></a>
                  <p>Sign up failed. Please try again.</p>
                </div>
              )}
              <input
                id="initials"
                className="input"
                type="text"
                name="initials"
                value={initials}
                onChange={(e) => {
                  setInitials(e.target.value);
                  setSignUpError(false);
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
                  setSignUpError(false);
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
                  setSignUpError(false);
                }}
                placeholder="Enter your password"
                required
              />

              <button className="logSignButton input" type="submit">
                Login
              </button>
            </form>
          </div>
          <HowItWorks />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
