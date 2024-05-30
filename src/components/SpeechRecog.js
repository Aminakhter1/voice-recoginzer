import React, { useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

function SpeechRecog() {
  const [text, setText] = useState("");
  const [listening, setListening] = useState(false);
  const { transcript, resetTranscript } = useSpeechRecognition();

  const handleStart = () => {
    console.log("Speech recognition started");
    setListening(true);
    SpeechRecognition.startListening({ continuous: true });
  };

  const handleStop = () => {
    console.log("Speech recognition stopped");
    setListening(false);
    SpeechRecognition.stopListening();
  };

  const handleReset = () => {
    setText("");
    resetTranscript();
  };

  const handleListen = () => {
    if (listening) {
      handleStop();
    } else {
      handleStart();
    }
  };

  return (
    <div className="container" style={{ backgroundColor: "#1F2E3F" }}>
      <div className="row">
        <h2
          style={{
            backgroundColor: "#E74C3C",
            fontFamily: "sans-serif",
            padding: "2rem",
            color: "white",
            textAlign: "center",
            textShadow: "2px 2px 2px black",
          }}
        >
          Speech Recognition
        </h2>
        <div className="row">
          <div
            className="column"
            style={{ backgroundColor: "#061B34", margin: "0px" }}
          >
            <button
              type="button"
              class="btn btn-warning"
              style={{
                display: "inline",
                margin: "1rem",
                textShadow: "2px 2px 2px black",
                color: "white",
                border: "2px solid white",
              }}
              onClick={handleListen}
            >
              {listening ? "Stop Speak" : "Start Speak"}
            </button>

            <button
              type="button"
              class="btn btn-danger"
              onClick={handleReset}
              style={{
                textShadow: "4px 4px 4px black",
                border: "2px solid white",
              }}
            >
              Reset
            </button>
          </div>
        </div>

        <div className="column">
          <div
            className="row"
            style={{
              backgroundColor: "#F2F3F4",
              minHeight: "500px",
              margin: "4px",
              borderRadius: "4px 4px 7px 7px",
              padding: "5px",
            }}
          >
            <p style={{ color: "black" }}>
              <label style={{ color: "red", fontFamily: "fantasy" }}>
                Write Here :-
              </label>{" "}
              {transcript}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SpeechRecog;
