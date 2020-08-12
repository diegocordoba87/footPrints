import React, {useState} from "react";
import "./signup.css";
import axios from "axios"


const SignUp = (props) => {
  const [initials, setInitials] = useState("")
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
    const handleSubmit= (e)=>{
      e.preventDefault();
      console.log(e)
  
      axios
        .post("/api/signup", { initials: initials, username: username, password: password })
        .then((response) => {
          console.log(response);
          window.alert(`Successfully created new account with email: ${username}`);
          props.history.push("/login")
        })
        .catch((err) => {
          console.log(err);
        });
    }



  return (
    <div id="loginBody" className="backgroundImage">
      <div >
        <form id="loginInput" onSubmit={handleSubmit}>
        <input
            id="initials" 
            type="text" 
            name="initials" 
            value={initials}
            onChange={(e)=>{
              setInitials(e.target.value)
            }}
            placeholder="Enter Your Initials" required />
          <input
            id="username" 
            type="text" 
            name="username" 
            value={username}
            onChange={(e)=>{
              setUsername(e.target.value)
            }}
            placeholder="Email" required />
          <input
            id="password"
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

export default SignUp;
