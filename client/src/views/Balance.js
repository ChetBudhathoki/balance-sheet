import React from "react";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import Container from "../components/Container";
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

      <h2 className="uk text-center"> Dear {user.name} Welcome to Balance-Sheet</h2>
      



      <div className="uk-child-width-1-3@m uk-position-center" uk-grid uk-scrollspy="cls: uk-animation-fade; target: .uk-card; delay: 500; repeat: true">
        <Link to="/result">
          <div className="float">
            <div className="uk-card uk-card-default uk-card-body">
              <h3 className="uk-card-title">My sheet</h3>
              <p>Click here to see your sheets</p>
            </div>
          </div>
        </Link>
        <Link to="/sheet">
          <div className="float">
            <div className="uk-card uk-card-default uk-card-body">
              <h3 className="uk-card-title">New Sheet</h3>
              <p>Click here to add new sheet</p>
            </div>
          </div>
        </Link>
      </div>


    </Container>
  )
}

export default Balance