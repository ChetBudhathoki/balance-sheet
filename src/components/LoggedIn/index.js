import React, { Component } from "react";

export default class LoggedIn extends Component {
    render() {
        return (
            <div>
                <p className="App-intro">
                    This is what the user will see once logged in. Go to <a href="/">Home</a>
                </p>
                <button onClick={this.props.auth.logout}>Logout</button>
            </div>
        )
    }
}

