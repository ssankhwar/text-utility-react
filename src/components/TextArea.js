import React, { useState } from "react";

export default function TextArea(props) {
  const [text, setText] = useState("");

  const handleTextAreaChange = (e) => {
    setText(e.target.value);
  };
  const handleUppercaseClick = () => {
    let upperCaseText = text.toUpperCase();
    setText(upperCaseText);
    props.showAlert("Converted to Uppercase!","success")
  };

  const handleLowercaseClick = () => {
    let upperCaseText = text.toLowerCase();
    setText(upperCaseText);
    props.showAlert("Converted to Lowercase!","success")
  };

  const handleClearClick = () => {
    setText("");
    props.showAlert("Text Cleared!","success")
  };

  return (
    <>
      <div >
        <div  className={`container my-3 text-${props.mode === 'dark'?'light':'dark'}`}>
          <h3>{props.heading1}</h3>
          <div className="mb-3">
            <textarea
              data-bs-theme={props.mode}
              className="form-control"
              value={text}
              onChange={handleTextAreaChange}
              id="textAreaForm"
              rows="10"
            ></textarea>
          </div>
          <button
            className="btn btn-outline-primary mx-2"
            onClick={handleUppercaseClick}
          >
            Convert to Uppercase
          </button>
          <button
      
            className="btn btn-outline-primary mx-2"
            onClick={handleLowercaseClick}
          >
            Convert to Lowercase
          </button>
          <button className="btn btn-outline-secondary mx-2" onClick={handleClearClick}>
            Clear
          </button>
        </div>
        <div  className={`container my-3 text-${props.mode === 'dark'?'light':'dark'}`}>
          <h3>{props.heading2}</h3>
          <p>
            {" "}
            {text.trim().split(/\s+/).filter(Boolean).length} words and{" "}
            {text.length} characters
          </p>
          <h3 className="my-3">
            Preview
          </h3>
          <p>
        {text.length > 0 ? text : "Enter in the above textarea to preview it here!"}
          </p>
        </div>
      </div>
    </>
  );
}
