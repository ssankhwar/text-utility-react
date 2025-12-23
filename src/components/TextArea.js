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
      props.showAlert("✅ Text converted to UPPERCASE successfully.","success")
    }else{
       props.showAlert("⚠️ Please enter some text before performing this action.","warning")
    }
  };

  const handleLowercaseClick = () => {
      if(text.length !== 0) {

    let upperCaseText = text.toLowerCase();
    setText(upperCaseText);
    props.showAlert("✅ Text converted to lowercase successfully.","success")
      }else{
         props.showAlert("⚠️ Please enter some text before performing this action.","warning")
      }
  };

  const handleClearClick = () => {
      if(text.length !== 0) {

    setText("");
    props.showAlert("🧹 Text cleared successfully.","success")
      }else{
        props.showAlert("⚠️ Please enter some text before performing this action.","warning")
      }
  };

  const handleCopyTextClick = () => {
      if(text.length !== 0) {

    
    navigator.clipboard.writeText(text);
    props.showAlert("📋 Text copied to clipboard!","success")
      }else{
        props.showAlert("⚠️ Please enter some text before performing this action.","warning")
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
            UPPERCASE
          </button>
          <button
      
            className="btn btn-outline-primary mx-2 my-2"
            onClick={handleLowercaseClick}
          >
            lowercase
          </button>
          <button
      
            className="btn btn-outline-primary mx-2 my-2"
            
            onClick={handleCopyTextClick}
          >
            Copy to Clipboard
          </button>
          <button className="btn btn-outline-secondary mx-2 my-2" onClick={handleClearClick}>
            Clear Text
          </button>
        </div>
        <div  className={`container my-3 text-${props.mode === 'dark'?'light':'dark'}`}>
          <h3>{props.heading2}</h3>
          <p>
            {" "}
           Words: {text.split(/\s+/).filter( e => {return e.length !== 0} ).length} 
           
          </p>
          <p>
           Characters:  {text.length} 
          </p>
          <p>
           Estimated Reading Time: {0.08 * text.length} 
          </p>
          <h3 className="my-3">
            👀 Preview
          </h3>
          <p>
        {text.length > 0 ? text : "Your formatted text will appear here once you start typing."}
          </p>
        </div>
      </div>
      
    </>
  );
}
