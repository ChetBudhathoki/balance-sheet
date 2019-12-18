import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";

class Result extends Component {
  state = {
    balances: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getBooks(this.balances.body)
      .then(res => this.setState({ balance: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
     <div>
              <h1>
                Barev
              </h1>
           
              
            
          
            <Link to="/">← Back to Authors</Link>

            </div>
          
    );
  }
}

export default Result;
