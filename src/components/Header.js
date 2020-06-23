import React from "react";
import "./Header.css"
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header jumbotron jumbotron-fluid bg-dark col-md-8 offset-md-2 mt-3">
      <div className="container text-center text-white">
        <div className="display-4">Blog Ranker</div>
        <div className="lead">Ranking your favorite blog post!</div>
        <nav className="Navigation navbar navbar-expand-lg">
          <ul className="navbar-nav m-auto">
            <li className="nav-item mr-4">
              <NavLink className="nav-link" exact to="/">
                Home
            </NavLink>
            </li>
            <li className="nav-item mr-4">
              <NavLink className="nav-link" exact to="/new">
                Add a new post
            </NavLink>
            </li>
          </ul>
        </nav>

      </div>
    </div>
  )
}

export default Header;
