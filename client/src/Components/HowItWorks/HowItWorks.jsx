import React from "react";
import "./howitworks.css";

const HowItWorks = () => {
  return (
    <div>
      <div id="howitworks" className="cardBodyLogin">
        <div className="uk-card-medium uk-card-default uk-flex-between">
          <h2 className="headerText">How It Works</h2>
          <div className="hiwText">
            FootPrints connects us to the people around us by sharing our
            stories- our FootPrints. It’s a bit anti-social network, a bit
            geo-caching, and a bit tiny library. As you interact with the
            community around you, you will collect the FootPrints of others,
            while learning more about those who went that way before, and can
            leave a FootPrint for those yet to come.
            <br />
            <br />
            To get started: <br />
            <ul>
              <li>Create a user account or log in.</li>
              <li>
                On your profile page, you can create new FootPrints or edit
                those you’ve already written. You can also see the FootPrints
                you’ve found while visiting local points of interest.
              </li>
              <li>
                Visit the locations on your map. The map will display your
                current location, indicated by a set of footprints. Points of
                interest are marked by a blue circle. Once you enter the circle,
                you will be shown a random FootPrint to enjoy and collect, and
                can leave a FootPrint of your own.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
