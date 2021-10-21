import './App.css';
import { BrowserRouter } from "react-router-dom";
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
  const [error, setError] = useState(null);

  useEffect(function updateCurrentUser() {
    console.log("useEffect has triggered");
    const tokenUsername = decodeToken(token)
    setCurrentUser(tokenUsername);
  }, [token])

  // Create a function to login a user
  async function handleLogin(formData) {
    try {
      const resToken = await JoblyApi.login(formData);
      setToken(resToken);
    } catch (err) {
      setError(err);
    }
  }
  // Create a function to signup a user
  async function handleSignUp(formData) {
    try {
      console.log("in try of handleSignUp")
      const resToken = await JoblyApi.register(formData);
      setToken(resToken);
      console.log("resToken", resToken);
    } catch (err) {
      console.log("in catch of handleSignUp")
      console.log("error", err);
      setError(err);
    }
  }

  // Create a function logout a user
  async function handleLogout(formData) {

  }


  // create an effect that is triggered when token is updated
  // it will be an async function that updates currentUser

  return (
    < UserContext.Provider value={currentUser}>
      <div className="App">
        <BrowserRouter>
          <Navigation
            handleLogout={handleLogout}
          />
          <Routes
            handleLogin={handleLogin}
            handleSignUp={handleSignUp}
            error={error}
          />
        </BrowserRouter>
        {/* {error && 
          <Alert error={error} />} */}
      </div>
    </UserContext.Provider>
  );
}

export default App;