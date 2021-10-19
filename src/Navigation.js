import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
    return (
        <nav className="NavBar">
          <NavLink exact to="/">
            Jobly
          </NavLink>
          <NavLink exact to="/companies">
            Companies
          </NavLink>
          <NavLink exact to="/jobs">
            Jobs
          </NavLink>
        </nav>
      );
}
export default Navigation;