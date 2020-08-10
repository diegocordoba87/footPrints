import React from "react";
import { Button } from "react-foundation";
import "./home.css";

const Home = ({ setIsSidebarOpen }) => {
  return (
    <div id="homeBody" className="backgroundImage">
      <div onClick={() => setIsSidebarOpen(false)}>
        <div className="cardBody" id="homeHeader">
          <div className="homeText">Footprints</div>
        </div>
        <div className="homeButtonDiv">
          <Button className="homeButton">Log In</Button>
          <Button className="homeButton">Sign Up</Button>
        </div>
        <div className="cardBody">
          <div id="aboutus" className="temporaryPageName">
            About Us
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quibusdam ducimus reiciendis possimus, doloribus distinctio cum
              soluta vero architecto quisquam, recusandae culpa saepe! Cumque
              iusto sed assumenda. Ea numquam odio accusamus? Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Molestiae dolores magni,
              veniam fugit quam expedita quae modi ab aliquam officiis doloribus
              iure hic sed officia eligendi deserunt! Repudiandae, ea quidem!
            </p>
          </div>
        </div>
        <div className="cardBody">
          <div id="howitworks" className="temporaryPageName">
            How It Works
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              earum non dignissimos facere aspernatur, dolores praesentium
              facilis, in voluptatibus, autem aliquam harum sequi molestiae eius
              labore. Velit molestiae eum magni! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Veritatis nam harum commodi
              recusandae minus unde illum excepturi adipisci. Laborum dolore id
              rerum repellat beatae mollitia, totam numquam ipsam nam unde.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
