import React, { Component } from "react";
import Desk from "../components/Desk";
import Container from "../components/Container"
import LoginBtn from "../components/LoginBtn";
import Form from "../components/Form";


class SignUp extends Component {


    render() {
        return (

            <Container>
                <Desk backgroundImage="https://cdn.stocksnap.io/img-thumbs/960w/HQV6HVSTAW.jpg"></Desk>
                <LoginBtn data-value="login">Login</LoginBtn>
                <LoginBtn data-value="signup">Sign Up</LoginBtn>
                <hr className="uk-divider-icon" />
                <Form>Sign Up</Form>
            </Container>
        );
    }
}

export default SignUp;