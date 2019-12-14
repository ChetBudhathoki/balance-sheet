import React, { Component } from "react";
import API from "../utils/API";
// import { useAuth0 } from "../react-auth0-spa";
import { Input, TextArea, FormBtn } from "../components/Form";



class Exam extends Component {

  state = {
    balances: [],
    email: "",
    category: [],
    categoryName: "",
    spending: "",
    description: "",
  };



  componentDidMount() {
    this.loadBalances();
  };

  loadBalances = () => {
    API.getBalances()
      .then(res =>
        this.setState({ balances: res.data, email: "", category: [ { categoryName: '', spending: "", description: "" }] })
      )
      .catch(err => console.log(err)
      )
  };

  // deleteBalance = () => {
  //   API.getBalance(id)
  //   .then(res => this.loadBalances())
  //   .catch(err => console.log(err)
  //   )
  // }

  // HandleInputchange
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.email) {
      API.saveBalance({
        category: [
          { categoryName: this.state.categoryName,
            spending: this.state.spending, 
            description: this.state.description }]
      })
        .then(res => this.loadBalances())
        .catch(err => console.log(err));
    }
  };



  render() {
    return (
      <form>

        <Input
          value={this.state.categoryName}
          onChange={this.handleInputChange}
          name="categoryName"
          placeholder="Food"
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
        <FormBtn
          onClick={this.handleFormSubmit}
        >
          Submit Your Spending
              </FormBtn>




      </form>

    )
  }
}




export default Exam;