import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import "./Exam.css"


// import { useAuth0 } from "../react-auth0-spa";
import { Input, TextArea, FormBtn } from "../components/Form";

// ----------- New Functional Component ------------------
// const Exam = ({}) => {
//   const[stateVariable, setStateVariable] = useState('initialValue')
//   const [balances, setBalances] = useState([])

//   // By adding the empty [] at the end I am saying that this useEffect will only be called once, mimicking the componentDidMount behavior
//   useEffect(() => {
//     // call loadBalances function
//   }, [])

//   // INSTRUCTIONS | Add loadBalances function here 
//   const functionName = () => {
//     // INSTRUCTIONS | function details
//   }

//   return (

//   )
// }

// export default Exam







// --------------------------------------------------------

const Exam = () => {


  const [balances, setBalances] = useState([]);
  const [email, setEmail] = useState("abareyan@gmail.com");
  const [category, setCastegory] = useState([
    { categoryName: '', spending: "", description: "" }
  ]);
  const [categoryName, setCastegoryName] = useState("");
  const [spending, setSpending] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    loadBalances()
  }, []);

  const loadBalances = () => {
    API.getBalances()
      .then(res =>
        setBalances(
          {
            balances: res.data, email: "abareyan@gmail.com",
            category: [{ categoryName: "", spending: "", description: "" }]
          }))
      .catch(err => console.log(err))
  };

const handleFormSubmit = (event) => {
  event.preventDefault();
console.log({category});
  if (email) {
    API.saveBalance({
      email: "abafreyan@gmail.com",
      category: [
        {
          // INSTRUCTIONS | Remove references to this.state and add in new references to the uaseState variables
          categoryName,
          spending,
          description
        }]
    })
      .then(res => loadBalances())
      .catch(err => console.log(err));
  }
};

return (
  <form>

    <Input
      // INSTRUCTIONS | Update value and onChange to read from the new useState variables and call the corresponding new useState function 
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

    <hr className="uk-divider-icon"></hr>

    <FormBtn
      onClick={handleFormSubmit}

    >
      <Link className="sheetlink" to="/sheet">
        Submit Your Spending
           </Link>
    </FormBtn>


  </form>
)
}

export default Exam


// class Exam extends Component {

//   state = {
//     balances: [],
//     email: "",
//     category: [],
//     categoryName: "",
//     spending: "",
//     description: "",
//   };



//   componentDidMount() {
//     this.loadBalances();
//   };

//   loadBalances = () => {
//     API.getBalances()
//       .then(res =>
//         this.setState({ balances: res.data, email: "abareyan@gmail.com", category: [{ categoryName: '', spending: "", description: "" }] })
//       )
//       .catch(err => console.log(err)
//       )
//   };

//   // deleteBalance = () => {
//   //   API.getBalance(id)
//   //   .then(res => this.loadBalances())
//   //   .catch(err => console.log(err)
//   //   )
//   // }

//   // HandleInputchange
//   // INSTRUCTIONS | REMOVE THIS FUNCTION, YOU USE STATE FUNCTIONS WILL HANDLE EACH FORM'S INPUT CHANGE
//   handleInputChange = event => {
//     const { name, value } = event.target;
//     this.setState({
//       [name]: value
//     });
//   };



//   handleFormSubmit = event => {
//     event.preventDefault();
//     if (this.state.email) {
//       API.saveBalance({
//         email: "abareyan@gmail.com",
//         category: [
//           {
//             // INSTRUCTIONS | Remove references to this.state and add in new references to the uaseState variables
//             categoryName: this.state.categoryName,
//             spending: this.state.spending,
//             description: this.state.description
//           }]
//       })
//         .then(res => this.loadBalances())
//         .catch(err => console.log(err));
//     }
//   };



//   render() {
//     return (
//       <form>

//         <Input
//           // INSTRUCTIONS | Update value and onChange to read from the new useState variables and call the corresponding new useState function 
//           value={this.state.categoryName}
//           onChange={this.handleInputChange}
//           name="categoryName"
//           placeholder="Add Spending category"
//         />
//         <Input
//           value={this.state.spending}
//           onChange={this.handleInputChange}
//           name="spending"
//           placeholder="Spending"
//         />
//         <TextArea
//           value={this.state.description}
//           onChange={this.handleInputChange}
//           name="description"
//           placeholder="Description"
//         />

//         <hr className="uk-divider-icon"></hr>

//         <FormBtn
//           onClick={this.handleFormSubmit}

//         >
//           <Link className="sheetlink" to="/sheet">
//             Submit Your Spending
//            </Link>
//         </FormBtn>







//       </form>

//     )
//   }
// }




// export default Exam;