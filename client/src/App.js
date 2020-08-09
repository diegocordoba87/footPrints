import React from "react";
import Map from "./Containers/Map";
import Navbar from "./Components/Navbar/Navbar";
import './app.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/Login";
import Mappage from "./pages/Mappage";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          {/* <Route exact path="/" component={App} /> */}
          <Route exact path="/login" component={Login} />
          <Route exact path="/map" component={Mappage} />
          <Route path="/profile" component={Profile} />
          <Route path="/signup" component={Signup} />
        </div>
      </Router>
      <Map />
    </div>
  );
}

export default App;
