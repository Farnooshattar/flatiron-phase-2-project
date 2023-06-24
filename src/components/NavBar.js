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
      <NavLink style={{ padding: "10px", color: "black" }} to="/">
        Home
      </NavLink>
      <NavLink style={{ padding: "10px", color: "black" }} to="/cats">
        Cats
      </NavLink>
      <NavLink style={{ padding: "10px", color: "black" }} to="/about">
        About
      </NavLink>
    </div>
  );
}

export default NavBar;
