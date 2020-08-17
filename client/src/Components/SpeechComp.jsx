import React, { useState } from "react";
import { useSpeechSynthesis } from "react-speech-kit";

const SpeechComp = ({ footprintText, noteId, deleteNote, parentComponent }) => {
  const [text, setText] = useState(footprintText);
  const [pitch] = useState(0.8);
  const [rate] = useState(0.8);
  const [voiceIndex] = useState(33);
  const { speak, cancel, speaking, supported, voices } = useSpeechSynthesis();

  const voice = voices[voiceIndex] || null;

  return (
    <div>
      <form>
        {/* <h2>Speech Synthesis</h2> */}

        {supported && (
          <React.Fragment>
            {parentComponent === "FootprintsDisplay" && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  deleteNote(noteId);
                }}
                className="deleteFootprintButton readDeleteButton"
              >
                Delete
              </button>
            )}
            <button
              onClick={(e) => {
                e.preventDefault();
                if (speaking) {
                  cancel();
                } else {
                  speak({ text, voice, rate, pitch });
                }
              }}
              className="readFootprintButton readDeleteButton"
            >
              {speaking ? "stop" : "read"}
            </button>
          </React.Fragment>
        )}
      </form>
    </div>
  );
};

export default SpeechComp;
