import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Loading from "../components/Loading";
import { useAuth0 } from "../react-auth0-spa";
import { Link } from "react-router-dom";
import API from "../utils/API";
import { Input, TextArea, FormBtn } from "../components/Form";



const Balance = () => {

  // const [balances, setBalances] = useState([]);
  // const [email, setEmail] = useState("");
  // const [category, setCategory] = useState([
  //   {
  //     categoryName: "",
  //     spending: "",
  //     description: ""
  //   }
  // ]);

  const { loading, user } = useAuth0();

  if (loading || !user) {
    return (
      <div>
        <Loading />;
      </div>
    )
  }

  // const loadBalances = () => {
  //   API.getBalances()
  //     .then(res =>
  //       setBalances(
  //         {
  //           balances: res.data, email: `${user.email}`,
  //           category: [{ categoryName: "", spending: "", description: "" }]
  //         })
  //     )
  //     .catch(err => console.log(err)
  //     )
  // };

  // useEffect(() => {
  //   loadBalances();
  // }, [])

  // HandleInputchange
  // const handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };



  // const handleFormSubmit = event => {
  //   event.preventDefault();
  //   if (email) {
  //     API.saveBalance({
  //       email: email,
  //       category: [
  //         {
  //           categoryName: category.categoryName,
  //           spending: category.pending,
  //           description: category.description
  //         }]
  //     })
  //       .then(res => loadBalances())
  //       .catch(err => console.log(err));
  //   }
  // };




  return (
    <Container>
      <Row className="align-items-center profile-header mb-5 text-center text-md-left">
        {/* <Col className="uk-column-1-2">
          <h2>{user.email}</h2>
        </Col> */}
        <Col className="uk-column-1-1 uk-text-center">
          <h2> Dear {user.name} Welcome to Balance-Sheet</h2>
        </Col>
      </Row>

      <Link to="/sheet"> Go to sheet </Link>

      {/* <form>
        <Input
          // INSTRUCTIONS | Update value and onChange to read from the new useState variables and call the corresponding new useState function 
          value={categoryName}
          onChange={this.handleInputChange}
          name="categoryName"
          placeholder="Add Spending category"
        />
        <Input
          value={this.state.spending}
          onChange={this.handleInputChange}
          name="spending"
          placeholder="Spending"
        />
        <TextArea
          value={this.state.description}
          onChange={this.handleInputChange}
          name="description"
          placeholder="Description"
        />

        <hr className="uk-divider-icon"></hr>



        <FormBtn>
          Submit our sheet
              </FormBtn>

      </form> */}


    </Container>
  )

}

export default Balance;

