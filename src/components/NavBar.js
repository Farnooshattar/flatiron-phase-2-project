import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div
      style={{
        borderBottom: "2px solid red",
        paddingBottom: "10px",
        marginBottom: "12px",
        fontSize: "20px",
      }}>
      <NavLink
        to="/"
        exact
        style={{ padding: "10px" }}
        activeClassName="nav-link"
        className="nav-link-unselected">
        Home
      </NavLink>
      <NavLink
        to="/cats"
        style={{ padding: "10px" }}
        activeClassName="nav-link"
        className="nav-link-unselected">
        Cats
      </NavLink>
      <NavLink
        to="/about"
        activeClassName="nav-link"
        className="nav-link-unselected">
        About
      </NavLink>
    </div>
  );
}

export default NavBar;
