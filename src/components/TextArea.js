import React, { useState } from "react";

export default function TextArea(props) {
  const [text, setText] = useState("");

  const handleTextAreaChange = (e) => {
    setText(e.target.value);
  };
  const handleUppercaseClick = () => {
    if(text.length !== 0) {

      let upperCaseText = text.toUpperCase();
      setText(upperCaseText);
      props.showAlert("Converted to Uppercase!","success")
    }else{
       props.showAlert("Please enter text!","warning")
    }
  };

  const handleLowercaseClick = () => {
      if(text.length !== 0) {

    let upperCaseText = text.toLowerCase();
    setText(upperCaseText);
    props.showAlert("Converted to Lowercase!","success")
      }else{
         props.showAlert("Please enter text!","warning")
      }
  };

  const handleClearClick = () => {
      if(text.length !== 0) {

    setText("");
    props.showAlert("Text Cleared!","success")
      }else{
        props.showAlert("Please enter text!","warning")
      }
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
            className="btn btn-outline-primary mx-2 my-2"
            onClick={handleUppercaseClick}
          >
            Convert to Uppercase
          </button>
          <button
      
            className="btn btn-outline-primary mx-2 my-2"
            onClick={handleLowercaseClick}
          >
            Convert to Lowercase
          </button>
          <button className="btn btn-outline-secondary mx-2 my-2" onClick={handleClearClick}>
            Clear
          </button>
        </div>
        <div  className={`container my-3 text-${props.mode === 'dark'?'light':'dark'}`}>
          <h3>{props.heading2}</h3>
          <p>
            {" "}
            {text.split(" ").filter( e => {return e.length !== 0} ).length} words and{" "}
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
