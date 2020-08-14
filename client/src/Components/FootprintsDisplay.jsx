import React from "react";
import footprintSeeds from "../data/footprintSeeds.json";
import "../pages/Profile/profile.css";

const FootprintsDisplay = () => {
  return (
    <div id="footprints">
      <div uk-grid="masonry: true">
        {footprintSeeds.map((note, index) => {
          return (
            <div>
              <div className="uk-card-default footprintCards">
                {note.text}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FootprintsDisplay;
