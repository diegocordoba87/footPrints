import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import "./app.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/LogIn/LogIn";
import Mappage from "./pages/Map/Mappage";
import Profile from "./pages/Profile/Profile";
import Signup from "./pages/SignUp/SignUp";
import Home from "./pages/Home/Home";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="App">
      <Router>
        <div>
          <Navbar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
          <Route exact path="/login" component={Login} />
          <Route exact path="/map" component={Mappage} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/signup" component={Signup} />
          <Route
            path="/"
            render={(props) => (
              <Home {...props} setIsSidebarOpen={setIsSidebarOpen} />
            )}
          />
        </div>
      </Router>
    </div>
  );
}

export default App;
