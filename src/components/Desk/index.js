import React from "react";
import "./style.css";


function Desk(props) {
    return (
        <div className="desk uk-height-large uk-background-cover uk-overflow-hidden uk-light uk-flex uk-flex-top" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
            <div className="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical">
                <h1 uk-parallax="opacity: 0,1; y: -100,0; scale: 2,1; viewport: 0.5;">Welcome to Balance-It</h1>
                <p uk-parallax="opacity: 0,1; y: 100,0; scale: 0.5,1; viewport: 0.5;">Balance-It is a finance tracking application, we'll help you manage your finances and keep you on track.</p>
            </div>
            {props.children}
        </div>
    );
}



export default Desk;