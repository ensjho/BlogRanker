import React from "react";
import "./PostCardHome.css"
import { Link } from "react-router-dom";

function PostCardHome({ id, title, description }) {
  return (
    <div>
      <Link to={`/${id}`}>
      <div className="postcardHome">
        <div>
          Title: {title}
        </div>
        <div>
          Description: {description}
        </div>
      </div>
      </Link>
    </div>
    
  )
}

export default PostCardHome;