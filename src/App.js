import './App.css';
import { Redirect } from "react-router-dom";
import Navigation from "./Navigation";
import Routes from "./Routes";
import "bootstrap/dist/css/bootstrap.css";
import UserContext from './UserContext';
import { useState, useEffect } from "react";
import JoblyApi from './JoblyApi';
import jwt from "jsonwebtoken";

const TOKEN_KEYNAME = "token";

/** App for Jobly
 * 
 *  Props:
 *  - None
 * 
 *  State:
 *  - token: "string"
 *  - currentUser: { username, firstName, lastName, isAdmin, jobs }
 *  - formSubmitted: true/false
 * 
 *  App -> { Navigation, Routes }
 */

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem(TOKEN_KEYNAME));
  const [formSubmitted, setFormSubmitted] = useState(null);
  const [applicationIds, setApplicationIds] = useState(new Set([]));
  console.log("App has rendered", { currentUser, token, formSubmitted })

  useEffect(function updateCurrentUser() {
    async function getCurrentUser() {
      console.log("existing token: ", token);
      if (token) {
        console.log("token in App", { token });
        JoblyApi.token = token;
        const payload = jwt.decode(token);
        console.log({ payload });
        const resUser = await JoblyApi.getUser(payload.username);
        setCurrentUser(resUser);
      }
    }
    getCurrentUser();
  }, [token])

  /** Logs in a user using login information {username, password}
 *  Gets a token from the server 
 *  Sets the token state, localStorage and formSubmitted
 */
  async function handleLogin({ username, password }) {
    console.log("in handleLogin", { username, password });
    const resToken = await JoblyApi.login({ username, password });
    console.log({ resToken })
    setToken(resToken);
    localStorage.setItem(TOKEN_KEYNAME, resToken);
    setFormSubmitted(true);
  }

  /** Signs up a new user with data provided from SignUpForm
   *  (includes username, password, firstName, lastName, email)
   *  Gets a token from the server
   *  Sets the token state, localStorage and formSubmitted
   */
  async function handleSignUp(newUserData) {
    const resToken = await JoblyApi.register(newUserData);
    setToken(resToken);
    localStorage.setItem(TOKEN_KEYNAME, resToken);
    setFormSubmitted(true);
  }

  /** Logs out the current user 
   *  Sets the currentUser to null, sets formSubmitted to false
   *  Removes the token from localStorage
  */
  function handleLogout() {
    setCurrentUser(null);
    setToken(null);
    setApplicationIds(new Set([]));
    setFormSubmitted(false);
    localStorage.removeItem(TOKEN_KEYNAME);
  }

  /** Updates a user with data provided from ProfileForm
   *  First validates username and password are correct.
   *  Then updates firstName, lastName and/or email.
  */
  async function handleProfileUpdate(userUpdateData) {
    const res = await JoblyApi.updateUser(userUpdateData);
    console.log(res);
    setCurrentUser(curr => ({ ...curr, ...res.user }));
    setFormSubmitted(true);
  }

  /** Checks if a job has been applied for. */
  function hasAppliedToJob(id) {
    return applicationIds.has(id);
  }

  async function handleApplyToJob(id) {
    await JoblyApi.applyToJob(currentUser.username, id)
    setApplicationIds(curr => new Set([...curr, id]));
  }

  return (
    < UserContext.Provider value={
        {currentUser, 
        hasAppliedToJob,
        handleApplyToJob
    }}>
      <div className="App">
        <Navigation
          handleLogout={handleLogout}
        />
        <Routes
          handleLogin={handleLogin}
          handleSignUp={handleSignUp}
          handleProfileUpdate={handleProfileUpdate}
        />
        {formSubmitted && <Redirect push to="/" />}
      </div>
    </UserContext.Provider>
  );
}

export default App;