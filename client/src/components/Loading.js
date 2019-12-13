import React from "react";
import loading from "../assets/loading.svg";


const Loading = () => (
  <div>
    <div className="spinner">
      <h3 className="uk-text-center"> Please Log in first</h3>
      <img src={loading} alt="Loading" />
    </div>
  </div>

);

export default Loading;
