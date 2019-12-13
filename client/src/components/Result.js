import React from "react";
import { Container, Row, Col } from "reactstrap";

import { useAuth0 } from "../react-auth0-spa";


const Result = () => {

  const user = useAuth0();

  return (
    <Container> 
      <Row className="align-items-center profile-header mb-5 text-center text-md-left">
        <Col className="uk-column-1-2">
          <h2>hello</h2>
        </Col>
        <Col className="uk-column-2-2">
          <h2>{user.name}</h2>
        </Col>
      </Row>
    </Container>
  )

}

export default Result;
