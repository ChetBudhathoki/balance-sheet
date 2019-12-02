import React from "react";
import "./style.css";

function Container({ children }) {
    return (
        <div className="uk-container uk-container-expand uk-margin-medium">{children}</div>
        
    );
}

export default Container;