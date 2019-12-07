import React, { Component } from 'react';
// import logo from './desk.jpg';
// import LoginButton from "./pages/LoginButton";
import NotFound from "./components/NotFound";
import Main from "./components/Main";
import LoggedIn from "./components/LoggedIn";
import Callback from './components/Callback';
import './App.css';

class App extends Component {
  render()  {
      let mainComponent = ""
      switch(this.props.location) {
        case "":
          mainComponent = <Main {...this.props} />;
          break;
        case "callback":
          mainComponent = <Callback />
          break;
        case "loggedIn":
          mainComponent = this.props.auth.isAuthenticated() ? <LoggedIn {...this.props} /> : <NotFound />;
          break;
        default:
          mainComponent = <NotFound />;
      }
    return(
      <div className="App">
        <header className="App-header">
        
          <h1 className="App-title">Welcome to Balance-It {this.props.name}</h1>
        </header>
          {mainComponent}
      </div>
    )
  }
}

export default App;
