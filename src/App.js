import './App.css';
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Navigation";
import Routes from "./Routes";
import "bootstrap/dist/css/bootstrap.css";
import UserContext from './UserContext';
import {useState, useContext } from "react";
import JoblyApi from './JoblyApi';
import LoginForm from './LoginForm';

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
  
  // Create a function to login a user
  async function handleLogin() {
    const resToken = await JoblyApi.login(formData);  }

  // Create a function to signup a user

  // Create a function logout a user

  // Pass login and signup into Routes

  // Pass logout into Navigation

  // create an effect that is triggered when token is updated
  // it will be an async function that updates currentUser

  return (
    < UserContext.Provider value={currentUser}>
      <div className="App">
        <BrowserRouter>
          <Navigation />
          <Routes />
        </BrowserRouter>
      </div>
    </UserContext.Provider>
  );
}

export default App;
