import React from "react";
import { NavLink } from "react-router-dom";

function CatNavBar() {
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
        style={{ padding: "10px", color: "black" }}
        activeStyle={{ color: "red" }}>
        Home
      </NavLink>
      <NavLink
        to="/cats"
        style={{ padding: "10px", color: "black" }}
        activeStyle={{ color: "red" }}>
        Cats
      </NavLink>
      <NavLink
        to="/tictactoe"
        style={{ padding: "10px", color: "black" }}
        activeStyle={{ color: "red" }}>
        Game
      </NavLink>
    </div>
  );
}

export default CatNavBar;
