import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input className="uk-input uk-width-1-2 form-control" {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="uk-input form-control" rows="2" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right" }} className="uk-button uk-button-default uk-margin-small-top">
      {props.children}
    </button>
  );
}
