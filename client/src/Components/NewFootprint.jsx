import React, { useState, useEffect } from "react";

const NewFootprint = () => {
  const [newNoteContent, setnewNoteContent] = useState("");

  return (
    <div>
      <div id="goToLocationDiv">
        Go to a marked location <br /> to leave your footprint!
      </div>
      <form id="newFootprint">
        {/* <div className="homeText">New FootPrint:</div> */}
        <label>
          <textarea
            id="note"
            type="text"
            value={newNoteContent}
            name="note"
            onChange={(e) => {
              setnewNoteContent(e.target.value);
            }}
            placeholder="250 words minimum. 1000 words maximum"
            className="newFPForm"
          />
        </label>
        <button id="newFootprintButton">Save FootPrint</button>
      </form>
    </div>
  );
};

export default NewFootprint;
