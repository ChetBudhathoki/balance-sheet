import React from "react";
import { Container, Row, Col } from "reactstrap";
import { useAuth0 } from "../react-auth0-spa";
import Loading from "../components/Loading";




const MySheet = () => {

  const { loading, user } = useAuth0();

  if(loading || !user) {
    return (
      <div>
        <Loading />
      
         </div>
    )
  }
  
  return (
    <Container>
      <Row >
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

export default MySheet;