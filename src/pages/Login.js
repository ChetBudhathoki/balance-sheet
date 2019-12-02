import React, { Component } from "react";
import Desk from "../components/Desk";
import Container from "../components/Container"
import LoginBtn from "../components/LoginBtn";
import Row from "../components/Row";


class Login extends Component {

    handleBtnClick = event => {
    // Get the data-value of the clicked button
    const btnType = event.target.attributes.getNamedItem("data-value").value;
    // Clone this.state to the newState object
    // We'll modify this object and use it to set our component's state
    const newState = { ...this.state };

    if (btnType === "pick") {
      // Set newState.match to either true or false depending on whether or not the dog likes us (1/5 chance)
      newState.match = 1 === Math.floor(Math.random() * 5) + 1;

      // Set newState.matchCount equal to its current value or its current value + 1 depending on whether the dog likes us
      newState.matchCount = newState.match
        ? newState.matchCount + 1
        : newState.matchCount;
    } else {
      // If we thumbs down'ed the dog, we haven't matched with it
      newState.match = false;
    }
    // Replace our component's state with newState, load the next dog image
    this.setState(newState);
    this.loadNextDog();
  };

    render() {
        return (
            
            <Container>
                <Desk backgroundImage="https://cdn.stocksnap.io/img-thumbs/960w/HQV6HVSTAW.jpg"></Desk>
                    <LoginBtn data-value="login">Login</LoginBtn>
                    <LoginBtn data-value="signup">Sign Up</LoginBtn>
                    
                <hr className="uk-divider-icon" />

                <div className="uk-cover-container uk-container-expand uk-width-auto">
                    <h3 className="uk-align-center">Section Default</h3>
                    <div className="uk-grid-match" uk-grid>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                        </div>
                    </div>
                </div>
            </Container>
        );
    }
}

export default Login;