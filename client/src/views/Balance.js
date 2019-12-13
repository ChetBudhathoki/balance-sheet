import React from "react";
import { Container, Row, Col } from "reactstrap";
import Loading from "../components/Loading";
import { useAuth0 } from "../react-auth0-spa";

const Balance = () => {

  const { loading, user } = useAuth0();

  if (loading || !user) {
    return (
      <div>
        <Loading />;
      </div>
    )
  }

  return (
    <Container>
      <Row className="align-items-center profile-header mb-5 text-center text-md-left">
        <Col className="uk-column-1-2">
          <h2>{user.email}</h2>
        </Col>
        <Col className="uk-column-2-2">
          <h2>{user.name}</h2>
        </Col>
      </Row>

    </Container>
  )

}

export default Balance;

