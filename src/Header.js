import React from "react";
import "./Header.css"
import { Link } from "react-router-dom";

function Header(){
  return (
    <div className="headerContainer">
      <h1>Microblog</h1>
      <h3>Get in the Rithm of blogging yo!</h3>
      <div>
        <Link className="blogLink" to="/"> Blog </Link>
        <Link className="addPostLink" to="/new"> Add a new post </Link>
      </div>
    </div>
  )
}

export default Header;
