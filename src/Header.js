import React from "react";
import "./Header.css"
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="headerContainer">
      <h1>Microblog</h1>
      <h3>Get in the Rithm of blogging yo!</h3>
      <div>
        <NavLink className="navBar blogLink"  
                 to="/">
                    Blog 
        </NavLink>
        <NavLink className="navBar addPostLink" 
                 to="/new"> 
                 Add a new post 
        </NavLink>
      </div>
    </div>
  )
}

export default Header;
