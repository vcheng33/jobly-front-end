import './App.css';
import { BrowserRouter, Redirect } from "react-router-dom";
import Navigation from "./Navigation";
import Routes from "./Routes";
import "bootstrap/dist/css/bootstrap.css";
import UserContext from './UserContext';
import { useState, useEffect, useContext } from "react";
import JoblyApi from './JoblyApi';
import Alert from "./Alert";

import { decodeToken } from "react-jwt";


/** App for Jobly
 * 
 *  Props:
 *  - None
 * 
 *  State:
 *  - token
 *  - currentUser
 * 
 *  App -> { Navigation, Routes }
 */
function App() {
  console.log("App has rendered")
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(null);
  // should the error be here?
  const [formSubmitted, setFormSubmitted] = useState(null);
  console.log({currentUser, token})

  // add async function to get the user information
  useEffect(function updateCurrentUser() {
    console.log("useEffect has triggered");
    const tokenUsername = decodeToken(token)
    setCurrentUser(tokenUsername);
  }, [token])

  // Create a function to login a user
  async function handleLogin(formData) {
      console.log("in try of Login")
      const resToken = await JoblyApi.login(formData);
      setToken(resToken);
      console.log("resToken", resToken);
  }
  // Create a function to signup a user
  async function handleSignUp(formData) {
      const resToken = await JoblyApi.register(formData);
      setToken(resToken);
      setFormSubmitted(true);
  }

  // Create a function logout a user
  async function handleLogout(formData) {

  }

  // if (formSubmitted) {
  //   debugger;
    // return <Redirect push to="/companies"/>
  // }


  // create an effect that is triggered when token is updated
  // it will be an async function that updates currentUser

  return (
    < UserContext.Provider value={currentUser}>
      <div className="App">
          <Navigation
            handleLogout={handleLogout}
          />
          <Routes
            handleLogin={handleLogin}
            handleSignUp={handleSignUp}
          />
      {formSubmitted && <Redirect push to="/"/>}
      </div>
    </UserContext.Provider>
  );
}

export default App;