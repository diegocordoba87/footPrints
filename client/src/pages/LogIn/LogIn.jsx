import React, { useState } from "react";
import { Button } from "react-foundation";
import axios from "axios";
import logo from "../../images/FPLogo.png";
import "./login.css";

const LogIn = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setIsSidebarOpen } = props;

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("/api/login", { 
        username: username, 
        password: password 
      })
      .then((response) => {
        console.log(response)
        console.log(response.data.message);
        if(response.data.message==="Authorization successful"){
          window.alert("Welcome back!")
          props.history.push('/profile')
        }
        else {

          window.alert("Incorrect information. Try again!")
        }       
        
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div id="loginBody" className="backgroundImage">
      <img className="footprintsPageLogo" src={logo} alt="footprints logo" />
      <div onClick={() => setIsSidebarOpen(false)}>
        <h2>Log In</h2>
        <form id="loginInput" onSubmit={handleSubmit}>
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
              <Button className="logSignButton input" type="submit">
                Login
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
