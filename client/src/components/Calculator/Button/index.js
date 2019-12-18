import React from "react";
import "./style.css"

const isOperator = val => {
  return !isNaN(val) || val === "." || val === "=";
}

export const Button = props => 
<div 
className={`button-wraper  ${
  isOperator(props.children) ? null : "operator"
}`}
onClick ={() => props.handleClick(props.children)}
> {props.children} 
</div>



