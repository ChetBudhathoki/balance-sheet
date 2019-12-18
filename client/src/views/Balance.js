import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import Container from "../components/Container";
import Moment from "react-moment";
import { useAuth0 } from "../react-auth0-spa";
import { Input, TextArea, FormBtn } from "../components/Form";


const Balance = () => {

  const { loading, user } = useAuth0();

  const [balances, setBalances] = useState([]);
  const [email, setEmail] = useState(user.email);
  const [categoryName, setCastegoryName] = useState("");
  const [spending, setSpending] = useState("");
  const [description, setDescription] = useState("");

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


  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (email && categoryName && spending) {
      API.saveBalance({
        email: user.email,
        categoryName,
        spending,
        description

      })
        .then(res => loadBalances())
        .catch(err => console.log(err));
    }
  };
  return (
    <Container>
      <h2 className="uk text-center"> Dear {user.name} Welcome to Balance-Sheet</h2>
      <form>

        <Input
          value={categoryName}
          onChange={event => setCastegoryName(event.target.value)}
          name="categoryName"
          placeholder="Add Spending category"
        />
        <Input
          value={spending}
          onChange={event => setSpending(event.target.value)}
          name="spending"
          placeholder="Spending"
        />
        <TextArea
          value={description}
          onChange={event => setDescription(event.target.value)}
          name="description"
          placeholder="Description"
        />


        <FormBtn
          onClick={handleFormSubmit}
        >
          <Link className="sheetlink">
            Submit Your Spending
           </Link>
        </FormBtn>

        <hr className="uk-divider-icon uk-margin-large-top"></hr>

      </form>

      <h2 className="uk text-center"> My Balance Sheet </h2>

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
                {balance.description}
              </div>

              <div class="uk-width-1-5 uk-card uk-card-default uk-card-body uk-card-small">
                {balance.spending} $
                  </div>

              <div class="uk-width-1-5 uk-card uk-card-default uk-card-body uk-card-small">
                <span uk-icon="trash"></span>
              </div>
            </div>
          )
        }
        )
      ) : <div> No result </div>}

    </Container>
  )
}

export default Balance