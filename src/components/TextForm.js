import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase button was clicked");
    let newtext = text.toUpperCase();
    setText(newtext);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  }; // help's to get the current input typed by user

  const handleLoClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  };

  const handleClClick = () =>{
    let newtext = '';
    setText(newtext);
  }

  const [text, setText] = useState("");
  // text = "newtext" --> wrong way to change the state
  // setText("new text"); // correct way to change the state

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Enter your text"
            onChange={handleOnChange}
            value={text}
            id="mybox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary me-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary me-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary" onClick={handleClClick}>
          Clear the text
        </button>
      </div>

      <div className="container my-3">
        <h1>Your text summary</h1>
        <p> {text.split(" ").length} words , {text.length} characters </p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
       <h2>Preview</h2>
       <p>{text}</p>
      </div>
    </>
  );
}
