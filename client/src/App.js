import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";

import PrivateRoute from "./components/PrivateRoute";
import Loading from "./components/Loading";
import NavBar from "./components/NavBar";
import Home from "./views/Home";
import NotFind from "./views/NotFind"
import Profile from "./views/Profile";
import { useAuth0 } from "./react-auth0-spa";
import history from "./utils/history";
import MySheet from "./components/MySheet"
import Exam from "./views/Exam"

// styles
import "./App.css";

// fontawesome
import initFontAwesome from "./utils/initFontAwesome";
import Balance from "./views/Balance";


initFontAwesome();

const App = () => {
  const { loading } = useAuth0();

  if (loading) {
    return <Loading />;
  }

  return (
    <Router history={history}>
      <div id="app" className="d-flex flex-column h-100">
        <NavBar />
        <Container className="flex-grow-1 mt-2">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/sheet" exact component={Exam} />
            <Route path="/balance" exact component={Balance} />
            <Route path="/mysheet" exact component={MySheet} />
            <PrivateRoute path="/profile" component={Profile} />
            <Route component={NotFind} /> 
          </Switch>
        </Container>
      </div>
    </Router>
  );
};

export default App;
