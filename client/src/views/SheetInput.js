import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import Container from "../components/Container";
import { useAuth0 } from "../react-auth0-spa";
import { Input, TextArea, FormBtn } from "../components/Form";


const SheetInput = () => {

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
      <h2 className="uk text-center"> Input Your New Sheet </h2>
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
        <Link
          className="sheetlink"
          to="/result"
        >
            Submit Your Spending
        </Link>
        </FormBtn>

        <hr className="uk-divider-icon uk-margin-large-top"></hr>

      </form>

    </Container>
  )
}

export default SheetInput;