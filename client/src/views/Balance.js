import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Loading from "../components/Loading";
import { useAuth0 } from "../react-auth0-spa";
import { Link } from "react-router-dom";
// import { Input, TextArea, FormBtn } from "../components/Form";



const Balance = () => {


  const { loading, user } = useAuth0();

  if (loading || !user) {
    return (
      <div>
        <Loading />;
      </div>
    )
  }


  // state = {
  //   balances: [],
  //   email: "",
  //   category: [],
  //   food: "",
  //   spending: "",
  //   description: ""
  // }

  return (
    <Container>
      <Row className="align-items-center profile-header mb-5 text-center text-md-left">
        <Col className="uk-column-1-2">
          <h2>{user.email}</h2>
        </Col>
        <Col className="uk-column-1-1 uk-text-center">
          <h2> Dear {user.name} Welcome to Balance-Sheet</h2>
        </Col>
      </Row>

      <Link to="/sheet"> Go to sheet </Link>


      {/* <form>
        Food
      <Input
          // value = {user.name}
          name="food"
          placeholder="Spending"
        />
        <TextArea
          // value = {user.email}
          name=""
          placeholder="Description"
        />
        <hr className="uk-divider-icon"></hr>

        Utilitige
      <Input
          // value = {user.name}
          placeholder="Spending"
        />
        <TextArea
          // value = {user.name}
          placeholder="Description"
        />
        <hr className="uk-divider-icon"></hr>

        Housing
      <Input
          // value = {user.name}
          placeholder="Spending"
        />
        <TextArea
          // value = {user.name}
          placeholder="Description"
        />
        <hr className="uk-divider-icon"></hr>

        Transportation
      <Input
          // value = {user.name}
          placeholder="Spending"
        />
        <TextArea
          // value = {user.name}
          placeholder="Description"
        />
        <hr className="uk-divider-icon"></hr>

        Phone(Internet)
      <Input
          // value = {user.name}
          placeholder="Spending"
        />
        <TextArea
          // value = {user.name}
          placeholder="Description"
        />
        <hr className="uk-divider-icon"></hr>

        Insuranse
      <Input
          // value = {user.name}
          placeholder="Spending"
        />
        <TextArea
          // value = {user.name}
          placeholder="Description"
        />
        <hr className="uk-divider-icon"></hr>

        Having Fun
      <Input
          // value = {user.name}
          placeholder="Spending"
        />
        <TextArea
          // value = {user.name}
          placeholder="Description"
        />
        <hr className="uk-divider-icon"></hr>

        Education
      <Input
          // value = {user.name}
          placeholder="Spending"
        />
        <TextArea
          // value = {user.name}
          placeholder="Description"
        />
        <hr className="uk-divider-icon"></hr>

        Others
      <Input
          // value = {user.name}
          placeholder="Spending"
        />
        <TextArea
          // value = {user.name}
          placeholder="Description"
        />

        <FormBtn>
          Submit our sheet
              </FormBtn>

      </form>
 */}

    </Container>
  )

}

export default Balance;

