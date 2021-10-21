import './App.css';
import { BrowserRouter, Redirect } from "react-router-dom";
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
 *  - token
 *  - currentUser
 * 
 *  App -> { Navigation, Routes }
 */

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(null);
  console.log("App has rendered")
  console.log({currentUser, token, formSubmitted})

  // add async function to get the user information
  useEffect(function updateCurrentUser() {
    async function getCurrentUser() {
      if (token) {
        console.log("token in App", {token});
        JoblyApi.token = token;
        const payload = jwt.decode(token);
        // const tokenUsername = decodeToken(token)
        // console.log("tokenUsername", tokenUsername);
        const resUser = await JoblyApi.getUser(payload.username)
        console.log({resUser});
        setCurrentUser(resUser);
        console.log("useEffect has triggered");
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
  }
  // Create a function to signup a user
  async function handleSignUp(formData) {
      const resToken = await JoblyApi.register(formData);
      setToken(resToken);
      setFormSubmitted(true);
  }

  // Create a function logout a user
  async function handleLogout() {
    setCurrentUser(null);
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