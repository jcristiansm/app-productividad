import React from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const Navbar = () => {
  return (
    <AppBar position="static" style={{ marginBottom: "1rem" }}>
      <Toolbar style={{ display: "flex", justifyContent: "space-evenly" }}>
        <NavLink to="/" className="nav-link">
          Tareas
        </NavLink>
        <NavLink to="/historial" className="nav-link">
          Historial
        </NavLink>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
