import React from "react";
import "./style.css"

export const ClearButton = (props) => (
  <div 
  className="clear-btn"
  onClick={props.handleClear}
  >
  {props.children}
  </div>
);