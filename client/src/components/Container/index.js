import React from "react";

function Container({ children }) {
  return (
    <div
      style={{ height: 300, clear: "both"}}
      className=".uk-container-expand"
    >
      {children}
    </div>
  );
}

export default Container;
