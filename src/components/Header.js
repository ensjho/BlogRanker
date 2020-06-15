import React from "react";
import "../CSS/Header.css"
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className="headerContainer">
        <h1>Blog Ranker</h1>
        <h3>Ranking your favorite blog post!</h3>
        <nav className="navLinkContainer">
            <span>01.</span>
            <NavLink className="HomeLink" exact to="/">
                Home
            </NavLink>
            <span>02.</span>
            <NavLink className="AddPostLink" exact to="/new">
              Add a new post
            </NavLink>
          </nav>
      </div>
    </div>
  )
}

export default Header;
