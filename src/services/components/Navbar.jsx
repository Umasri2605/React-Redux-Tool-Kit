import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const links = ["counter", "todolist", "products", "recipes", "leads"];

  return (
    <nav className="navbar navbar-expand-lg shadow-sm" style={{ backgroundColor: 'lightgrey' }}>
      <div className="container">
        <NavLink 
          to="/" 
          className="navbar-brand fw-bold brand-color ms-1"
        >
          Edupoly
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {links.map((route) => (
              <li key={route} className="nav-item">
                <NavLink
                  to={`/${route}`}
                  className={({ isActive }) =>
                    "nav-link mx-2 fw-medium link-style " + (isActive ? "active-link" : "")
                  }
                >
                  {route.charAt(0).toUpperCase() + route.slice(1)}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

