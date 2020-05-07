import React from "react";
import "./BlogPostCard.css"
import { Link } from "react-router-dom";

//renders a blog post card that gets displayed in home page
function BlogPostCard({ id, title, description }) {
  return (
    <div>
      <Link to={`/${id}`}>
        <div className="postcardHome">
          <div>
            <b> Title: {title} </b>
          </div>
          <div>
            Description: {description}
          </div>
        </div>
      </Link>
    </div>
  )
}

export default BlogPostCard;