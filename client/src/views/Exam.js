import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import Container from "../components/Container";
import { List, ListItem } from "../components/List";
import Moment from "react-moment";





import { useAuth0 } from "../react-auth0-spa";
import { Input, TextArea, FormBtn } from "../components/Form";


const Exam = () => {

  const { loading, user } = useAuth0();

  const [balances, setBalances] = useState([]);
  const [email, setEmail] = useState(user.email);
  const [category, setCastegory] = useState([
    { categoryName: '', spending: "", description: "" }
  ]);
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
    console.log({ category });
    if (email && categoryName && spending) {
      API.saveBalance({
        email: user.email,
        category: [
          {
            categoryName,
            spending,
            description
          }]
      })
        .then(res => loadBalances())
        .catch(err => console.log(err));
    }
  };
  console.log(balances)
  return (
    <Container>
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

      <h2> My Balance Sheet </h2>

      {balances && balances.balances && balances.balances.length ? (

        balances.balances.map(balance => {

          console.log(balance)
          if (balance.email !== user.email) return null

          return (

            <div>{balance.category.map(cat => {
              return (
                <div>
                  <Moment format="MM.DD.YYYY">
                    {cat.date}
                  </Moment>
                  {cat.categoryName}
                  {cat.description}
                  {cat.spending}
                </div>
              )
            })}</div>
          )
        }
        )) : <div> No result </div>}









    </Container>
  )
}

export default Exam