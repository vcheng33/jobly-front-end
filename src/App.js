import './App.css';
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Navigation";
import Routes from "./Routes";
import "bootstrap/dist/css/bootstrap.css";

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
  // Create a function to login a user

  // Create a function to signup a user

  // Create a function logout a user

  // Pass login and signup into Routes
  // Pass logout into Navigation

  // create an effect that is triggered when token is updated
  // it will be an async function that updates currentUser

  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
