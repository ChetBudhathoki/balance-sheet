import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";



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
      .then(res =>
        setBalances(
          {
            balances: res.data, email: user.email,
            category: [{ categoryName: "", spending: "", description: "" }]
          }))
      .catch(err => console.log(err))
  };

const handleFormSubmit = (event) => {
  event.preventDefault();
console.log({category});
  if (email) {
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

return (
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