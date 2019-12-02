import React from "react";
import "./style.css";


function Form(props) {
    return (
        <form className="uk-form-stacked">

            <div className="uk-margin">
                <label className="uk-form-label" for="form-stacked-text">Email</label>
                    <div className="uk-form-controls">
                        <input className="uk-input" id="email" type="text" placeholder="example@fakemail.com" />
                    </div>
            </div>
            <div className="uk-margin">
                <label className="uk-form-label" for="form-stacked-text">Email</label>
                <div className="uk-form-controls">
                    <input className="uk-input" id="firstName" type="text" placeholder="John" />
                </div>
            </div>
            <div className="uk-margin">
                <label className="uk-form-label" for="form-stacked-text">Email</label>
                <div className="uk-form-controls">
                    <input className="uk-input" id="lastName" type="text" placeholder="Smith" />
                </div>
            </div>
            <div className="uk-margin">
                <label className="uk-form-label" for="form-stacked-text">Email</label>
                <div className="uk-form-controls">
                    <input className="uk-input" id="Phone" type="text" placeholder="(000)123-4567" />
                </div>
            </div>                                  
        </form>
    );
}



export default Form;