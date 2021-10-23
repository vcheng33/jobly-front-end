import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import UserContext from "./UserContext";

/** NavBar for Jobly App
 * 
 *  Props: 
 *  - None
 * 
 *  State:
 *  - None
 * 
 *  App -> Navigation
 * 
 */

function Navigation({ handleLogout }) {
  const { currentUser }= useContext(UserContext);

  return (
    <nav className="Navigation navbar navbar-expand-sm">
      <div className="container-fluid">
        <NavLink exact to="/" className="navbar-brand text-white ms-3">
          Jobly
        </NavLink>
        {currentUser && <ul className="navbar-nav ms-auto">
          <li className="nav-item me-4" >
            <NavLink exact to="/companies" className="text-decoration-none">
              Companies
            </NavLink>
          </li>
          <li className="nav-item me-4" >
            <NavLink exact to="/jobs" className="text-decoration-none">
              Jobs
            </NavLink>
          </li>
          <li className="nav-item me-4" >
            <NavLink exact to="/profile" className="text-decoration-none">
              Profile
            </NavLink>
          </li>
          <li className="nav-item" >
            <NavLink exact to="/" className="text-decoration-none" onClick={handleLogout}>
              Logout
            </NavLink>
          </li>
        </ul>}
        {!currentUser && <ul className="navbar-nav ms-auto">
          <li className="nav-item me-4" >
            <NavLink exact to="/login" className="text-decoration-none">
              Login
            </NavLink>
          </li>
          <li className="nav-item text-nowrap" >
            <NavLink exact to="/signup" className="text-decoration-none">
              Sign Up
            </NavLink>
          </li>
        </ul>}
      </div>
    </nav>
  );
}
export default Navigation;