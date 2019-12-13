import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css"

const Hero = () => {


  return (
    <div className="uk-text-center hero my-5">
      <Link to="/mysheet">
        <button className="uk-button uk-button-default">My sheets</button>
      </Link>
      <p className="head">$ All Your Financial Expenses Report In One Place $</p>

      <img className="big" src="Balance_Sheet.png" alt="logo" />

    </div>
  )
}

export default Hero;