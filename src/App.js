import './App.css';
import { Redirect } from "react-router-dom";
import Navigation from "./Navigation";
import Routes from "./Routes";
import "bootstrap/dist/css/bootstrap.css";
import UserContext from './UserContext';
import { useState, useEffect } from "react";
import JoblyApi from './JoblyApi';
import jwt from "jsonwebtoken";


/** App for Jobly
 * 
 *  Props:
 *  - None
 * 
 *  State:
 *  - token: "string"
 *  - currentUser: {user}
 *  - formSubmitted: true/false
 * 
 *  App -> { Navigation, Routes }
 */

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(null);
  console.log("App has rendered", {currentUser, token, formSubmitted})

  useEffect(function updateCurrentUser() {
    async function getCurrentUser() {
      if (token) {
        console.log("token in App", {token});
        JoblyApi.token = token;
        const payload = jwt.decode(token);
        const resUser = await JoblyApi.getUser(payload.username);
        setCurrentUser(resUser);
      }
    }
    getCurrentUser();
  }, [token])

  // Create a function to login a user
  async function handleLogin(formData) {
      const resToken = await JoblyApi.login(formData);
      console.log({resToken})
      setToken(resToken);
      setFormSubmitted(true);
      return <Redirect push to="/"/>
  }
  // Create a function to signup a user
  async function handleSignUp(formData) {
      const resToken = await JoblyApi.register(formData);
      setToken(resToken);
      setFormSubmitted(true);
      return <Redirect push to="/"/>
  }

  // Create a function logout a user
  async function handleLogout() {
    setCurrentUser(null);
    setFormSubmitted(false);
    return <Redirect push to="/"/>
  }

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