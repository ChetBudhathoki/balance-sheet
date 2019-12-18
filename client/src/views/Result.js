import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import Container from "../components/Container";
import Moment from "react-moment";
import { useAuth0 } from "../react-auth0-spa";
import { FormBtn } from "../components/Form";

const Result = () => {

  const { loading, user } = useAuth0();

  const [balances, setBalances] = useState([]);

  useEffect(() => {
    loadBalances()
  }, []);

  if (loading || !user) {
    return (
      <div>
        <Loading />;
      </div>
    )
  }

  const loadBalances = () => {
    API.getBalances()
      .then(res => {
        console.log(res)
        setBalances(
          {
            balances: res.data, email: user.email,
          })
      })
      .catch(err => console.log(err))
  };

  const deleteBalance = id => {
    API.deleteBalance(id)
      .then(res => loadBalances())
      .catch(err => console.log(err));
  };



  return (
    <Container>

      <h2 className="uk text-center"> My Balance Sheet </h2>

      <div class="uk-flex uk-flex-wrap uk-flex-wrap-around uk-background-muted uk-height-xsmall">

        <div class="uk-width-1-5 uk-card uk-card-default uk-card-body uk-card-small">
          Date
              </div>

        <div class="uk-width-1-5 uk-card uk-card-default uk-card-body uk-card-small">
          Category
              </div>

        <div class="uk-width-1-5 uk-card uk-card-default uk-card-body uk-card-small">
          Description
              </div>

        <div class="uk-width-1-5 uk-card uk-card-default uk-card-body uk-card-small">
          Spending $
                  </div>

        <div class="uk-width-1-5 uk-card uk-card-default uk-card-body uk-card-small">
          Delete
              </div>
      </div>



      {balances && balances.balances && balances.balances.length ? (

        balances.balances.map(balance => {

          if (balance.email !== user.email) return null

          return (


            <div class="uk-flex uk-flex-wrap uk-flex-wrap-around uk-background-muted uk-height-xsmall">

              <div class="uk-width-1-5 uk-card uk-card-default uk-card-body uk-card-small">
                <Moment format="MM.DD.YYYY">{balance.date}</Moment>
              </div>

              <div class="uk-width-1-5 uk-card uk-card-default uk-card-body uk-card-small">
                {balance.categoryName}
              </div>

              <div class="uk-width-1-5 uk-card uk-card-default uk-card-body uk-card-small">
                {/* <Link
                  key={balance._id}
                  to={"/balances/" + balance._id}
                > */}
                {balance.description}
                {/* </Link> */}
              </div>

              <div class="uk-width-1-5 uk-card uk-card-default uk-card-body uk-card-small">
                {balance.spending} $
                  </div>

              <div class="uk-width-1-5 uk-card uk-card-default uk-card-body uk-card-small"
                onClick={() => deleteBalance(balance._id)}
              >
                <span uk-icon="trash"></span>
              </div>
            </div>
          )
        }
        )
      ) : <div> No result </div>}

      <FormBtn>
        <Link to="/sheet">
          Add new sheet
        </Link>
      </FormBtn>

    </Container>
  )
}

export default Result;