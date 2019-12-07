import React, { Component } from "react";
import desk from "./desk.jpg";
import './style.css';

export default class Main extends Component{
    render() {
        return(
            <div>
                <p className="App-intro">
                    Click here to go to<a href="/loggedIn"> Main Page</a>
                </p>

                {!this.props.auth.isAuthenticated() && 
                <div>
                    <hr className="uk-divider-icon"/>

                    <div className="uk-card uk-card-default uk-width-1-4@m uk-align-center">
                        <div className="uk-card-header uk-padding-remove-horizontal uk-padding-remove-top">
                            <img src={desk} className="uk-background-cover" alt="cardHeaderImg" />
                            <div className="uk-grid-small uk-flex-middle" uk-grid>
                                <div className="uk-width-auto">
                                </div>
                                    <div className="uk-width-expand">
                                        <h3 className="uk-card-title uk-margin-remove-bottom">Login or Sign Up</h3>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="uk-card-body">
                            <button className="loginBtn uk-button uk-button-default uk-button-large" onClick={this.props.auth.login}>Login</button>
                            
                            </div>
                        </div>
                    

                    
                    
                </div>
                }
            </div>
        )
    }
}

