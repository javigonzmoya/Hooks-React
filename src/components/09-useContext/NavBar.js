import React from 'react';

import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        UseContext
      </Link>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink
            exact
            to="/"
            className="nav-item nav-link"
            activeClassName="active"
          >
            Home
          </NavLink>
          <NavLink
            exact
            to="/about"
            className="nav-item nav-link"
            activeClassName="active"
          >
            About
          </NavLink>
          <NavLink
            exact
            to="/login"
            className="nav-item nav-link"
            activeClassName="active"
          >
            Login
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
