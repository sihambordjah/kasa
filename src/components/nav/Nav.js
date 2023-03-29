import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav-header">
      <NavLink to="/" className="nav-header__nav-link">
        Accueil
      </NavLink>
      <NavLink to="/About" className="nav-header__nav-link">
        A Propos
      </NavLink>
    </nav>
  );
};

export default Nav;
