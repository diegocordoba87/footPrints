import React, { useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';

const Speech = () => {
	const [text] = useState('I am a robot');
	const [pitch] = useState(0.8);
	const [rate] = useState(0.8);
	const [voiceIndex] = useState(33);
	const onEnd = () => {
		// You could do something here after speaking has finished
	};
	const { speak, cancel, speaking, supported, voices } = useSpeechSynthesis({
		onEnd,
	});

	const voice = voices[voiceIndex] || null;

	//   const styleFlexRow = { display: 'flex', flexDirection: 'row' };
	//   const styleContainerRatePitch = {
	//     display: 'flex',
	//     flexDirection: 'column',
	//     marginBottom: 12,
	//   };

	return (
		<div>
			<form>
				{/* <h2>Speech Synthesis</h2> */}

				{supported && (
					<React.Fragment>
						{/* <label htmlFor="voice">Voice</label>
            <select
              id="voice"
              name="voice"
              value={voiceIndex || ''}
              onChange={(event) => {
                setVoiceIndex(event.target.value);
              }}
            >
              <option value="">Default</option>
              {voices.map((option, index) => (
                <option key={option.voiceURI} value={index}>
                  {`${option.lang} - ${option.name}`}
                </option>
              ))}
            </select> */}
						{/* <div style={styleContainerRatePitch}>
              <div style={styleFlexRow}>
                <label htmlFor="rate">Rate: </label>
                <div className="rate-value">{rate}</div>
              </div>
              <input
                type="range"
                min="0.5"
                max="2"
                defaultValue="1"
                step="0.1"
                id="rate"
                onChange={(event) => {
                  setRate(event.target.value);
                }}
              />
            </div> */}
						{/* <div style={styleContainerRatePitch}>
              <div style={styleFlexRow}>
                <label htmlFor="pitch">Pitch: </label>
                <div className="pitch-value">{pitch}</div>
              </div>
              <input
                type="range"
                min="0"
                max="2"
                defaultValue="1"
                step="0.1"
                id="pitch"
                onChange={(event) => {
                  setPitch(event.target.value);
                }}
              />
            </div> */}
						{/* <label htmlFor="message">Message</label> */}
						{/* <textarea
              id="message"
              name="message"
              rows={3}
              value={text}
              onChange={(event) => {
                setText(event.target.value);
              }}
            /> */}
						{speaking ? (
							<button type="button" onClick={cancel}>
								Stop
							</button>
						) : (
							<button
								type="button"
								onClick={() => speak({ text, voice, rate, pitch })}>
								Speak
							</button>
						)}
					</React.Fragment>
				)}
			</form>
		</div>
	);
};

export default Speech;
