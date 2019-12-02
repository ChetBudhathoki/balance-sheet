import React from "react";
import "./style.css";

function LoginBtn(props) {
    return (
        <button onClick={props.onClick} className={`login-btn button uk-button uk-buttont uk-width-1-2 uk-margin-small	${props["data-value"]}`} {...props} />
    );
}

export default LoginBtn;