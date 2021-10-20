import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

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

function Navigation() {
    return (
        <nav className="Navigation row">
          <NavLink exact to="/" className="col-10 navbar-brand">
            Jobly
          </NavLink>
          <NavLink exact to="/companies" className="col-1">
            Companies
          </NavLink>
          <NavLink exact to="/jobs" className="col-1">
            Jobs
          </NavLink>
        </nav>
      );
}
export default Navigation;