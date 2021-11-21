import { NavbarToggler, Collapse, NavItem, Nav } from "reactstrap";

import "./Navigation.css";
import brand from "./images/brand.svg";

import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "./UserContext";

/** NavBar for Jobly App
 * 
 *  Props: 
 *  - handleLogout: function to be called in parent
 * 
 *  State:
 *  - isOpen: is the navbar open (true/false)
 * 
 *  App -> Navigation
 * 
 */

function Navigation({ handleLogout }) {
  const { currentUser } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="Navigation navbar navbar-expand-md navbar-absolute navbar-transparent">
      <div className="container-fluid">
        <NavLink exact to="/" id="navbar-Jobly">
          <img src={brand} alt="brand" className="Navigation-brand my-1 ms-2"></img>
        </NavLink>
        <NavbarToggler onClick={toggle} className="me-2 navbar-dark">
          <span className="navbar-toggler-icon"></span>
        </NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          {currentUser &&
            <Nav className="ms-auto" navbar>
              <NavItem>
                <NavLink exact to="/jobs" className="text-decoration-none">Jobs</NavLink>
              </NavItem>
              <NavItem>
                <NavLink exact to="/companies" className="text-decoration-none">Companies</NavLink>
              </NavItem>
              <NavItem>
                <NavLink exact to="/profile" className="text-decoration-none">Profile</NavLink>
              </NavItem>
              <NavItem className="me-0">
                <NavLink exact to="/" onClick={handleLogout} className="text-decoration-none">
                  Logout
                </NavLink>
              </NavItem>
            </Nav>}

          {!currentUser &&
            <Nav className="ms-auto" navbar>
              <NavItem>
                <NavLink exact to="/login" className="text-decoration-none">Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink exact to="/signup" className="text-decoration-none">Sign Up</NavLink>
              </NavItem>
            </Nav>}
        </Collapse>
      </div>
    </nav>
  );
}
export default Navigation;