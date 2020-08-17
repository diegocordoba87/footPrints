import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./pages/LogIn/LogIn";
import Footprints from "./pages/Footprints/Footprints";
import Profile from "./pages/Profile/Profile";
import Signup from "./pages/SignUp/SignUp";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Dashboard from "./pages/Dashboard/Dashboard";
import footprintsHome from "./images/FPHomeHor.jpg";
import "./app.css";

function App() {
  useState();
  const sessionActiveUser = sessionStorage.getItem("username") || "";
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeUser, setActiveUser] = useState(sessionActiveUser);
  const [userInfo, setUserInfo] = useState({
    initials: "",
  });

  return (
    <div className="App">
      <Router>
        <div>
          <Navbar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
            activeUser={activeUser}
            setActiveUser={setActiveUser}
          />
          <Route
            path="/login"
            render={(props) => (
              <>
                <Login
                  {...props}
                  setIsSidebarOpen={setIsSidebarOpen}
                  setActiveUser={setActiveUser}
                />
              </>
            )}
          />
          <Route
            path="/profile/:id"
            render={(props) => (
              <Profile
                {...props}
                setIsSidebarOpen={setIsSidebarOpen}
                userInfo={userInfo}
              />
            )}
          />
          <Route
            path="/signup"
            render={(props) => (
              <Signup
                {...props}
                setIsSidebarOpen={setIsSidebarOpen}
                setActiveUser={setActiveUser}
              />
            )}
          />
          <Route
            path="/footprints"
            render={(props) => (
              <Footprints {...props} setIsSidebarOpen={setIsSidebarOpen} />
            )}
          />
          <Route
            path="/dashboard"
            render={(props) => (
              <Dashboard {...props} setIsSidebarOpen={setIsSidebarOpen} />
            )}
          />
          <Route
            path="/aboutus"
            render={(props) => (
              <AboutUs {...props} setIsSidebarOpen={setIsSidebarOpen} />
            )}
          />
          <Route
            exact
            path="/"
            render={(props) => (
              <Home {...props} setIsSidebarOpen={setIsSidebarOpen} />
            )}
            style={{ backgroundImage: `url(${footprintsHome})` }}
          />
          <Route
            exact
            path="/notes"
            render={(props) => (
              <Footprints {...props} setIsSidebarOpen={setIsSidebarOpen} />
            )}
            style={{ backgroundImage: `url(${footprintsHome})` }}
          />
        </div>
      </Router>
    </div>
  );
}

export default App;
