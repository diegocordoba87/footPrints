import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./pages/LogIn/LogIn";
import Locations from "./pages/Locations/Locations";
import Footprints from "./pages/Footprints/Footprints";
import Profile from "./pages/Profile/Profile";
import Signup from "./pages/SignUp/SignUp";
import Home from "./pages/Home/Home";
import footprintsHome from './images/FPHomeHor.jpg';
import "./app.css";

function App() {
  const sessionActiveUser = sessionStorage.getItem('username') || '';
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeUser, setActiveUser] = useState(sessionActiveUser);

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
            path="/locations"
            render={(props) => (
              <Locations {...props} setIsSidebarOpen={setIsSidebarOpen} />
            )}
          />
          <Route
            path="/profile/:id"
            render={(props) => (
              <Profile {...props} setIsSidebarOpen={setIsSidebarOpen} />
            )}
          />
          <Route
            path="/signup"
            render={(props) => (
              <Signup {...props} setIsSidebarOpen={setIsSidebarOpen} />
            )}
          />
          <Route
            path="/footprints"
            render={(props) => (
              <Footprints {...props} setIsSidebarOpen={setIsSidebarOpen} />
            )}
          />
          <Route
            exact
            path="/"
            render={(props) => (
              <Home {...props} setIsSidebarOpen={setIsSidebarOpen} />
            )}
            style={{ backgroundImage:`url(${footprintsHome})` }}
          />
                    <Route
            exact
            path="/notes"
            render={(props) => (
              <Footprints {...props} setIsSidebarOpen={setIsSidebarOpen} />
            )}
            style={{ backgroundImage:`url(${footprintsHome})` }}
          />
        </div>
      </Router>
    </div>
  );
}

export default App;
