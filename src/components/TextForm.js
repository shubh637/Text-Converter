import React, { useState } from "react";

export default function TextForm({ heading, showAlert, darkMode }) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    setText(text.toUpperCase());
    showAlert("Converted to uppercase!", "success");
  };

  const handleLowClick = () => {
    setText(text.toLowerCase());
    showAlert("Converted to lowercase!", "success");
  };

  const clearText = () => {
    setText("");
    showAlert("Text cleared!", "success");
  };

  const copyText = () => {
    navigator.clipboard.writeText(text);
    showAlert("Text copied to clipboard!", "success");
  };

  const removeExtraSpaces = () => {
    const newText = text.replace(/\s+/g, " ").trim();
    setText(newText);
    showAlert("Extra spaces removed!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const textStyles = {
    backgroundColor: darkMode ? "#555" : "white",
    color: darkMode ? "white" : "black",
  };

  return (
    <div className="container">
      <h1>{heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          style={textStyles}
          value={text}
          onChange={handleOnChange}
          rows="6"
        ></textarea>
      </div>
      <button
        disabled={text.length === 0}
        className="btn btn-primary mx-1 my-1"
        onClick={handleUpClick}
      >
        Uppercase
      </button>
      <button
        disabled={text.length === 0}
        className="btn btn-primary mx-1 my-1"
        onClick={handleLowClick}
      >
        Lowercase
      </button>
      <button
        disabled={text.length === 0}
        className="btn btn-danger mx-1 my-1"
        onClick={clearText}
      >
        Clear Text
      </button>
      <button
        disabled={text.length === 0}
        className="btn btn-secondary mx-1 my-1"
        onClick={copyText}
      >
        Copy Text
      </button>
      <button
        disabled={text.length === 0}
        className="btn btn-primary mx-1 my-1"
        onClick={removeExtraSpaces}
      >
        Remove Extra Spaces
      </button>

      <div className="my-3">
        <h2>Text Summary</h2>
        <p>
          {text.split(/\s+/).filter((word) => word).length} words, {text.length}{" "}
          characters
        </p>
        <p>
          Approx.{" "}
          {0.008 * text.split(/\s+/).filter((word) => word).length} minutes to
          read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter text above to preview here"}</p>
      </div>
    </div>
  );
}
