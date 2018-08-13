import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import Dashboard from "./components/dashboard/Dashboard";

import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import "./App.css";

import { Provider } from "react-redux";
import store from "./store";

import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logOutUser } from "./actions/authActions";
import { clearCurrentProfile } from "./actions/profileAction";

//check for token
if (localStorage.jwtToken) {
  //Set Auth token header auth
  setAuthToken(localStorage.jwtToken);

  //decode token and get user info and exp.
  const decoded = jwt_decode(localStorage.jwtToken);

  //set Current user
  store.dispatch(setCurrentUser(decoded));

  //check for expire token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logOutUser());
    store.dispatch(clearCurrentProfile());
    //TODO : clear current profile

    //Redirect to Login
    window.location.href = "/login";
  } else {
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <div className="container">
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/dashboard" component={Dashboard} />
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
