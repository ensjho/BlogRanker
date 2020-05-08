import React from "react";
import "./BlogPostCard.css";
import Vote from "./Vote";
import { Link } from "react-router-dom";

//renders a blog post card that gets displayed in home page
function BlogPostCard({ id, title, description, votes }) {
  return (
    <div>
      <div className="postcardHome">
        <Link to={`/${id}`}>
          <div>
            <b> Title: {title} </b>
          </div>
          <div>Description: {description}</div>
        </Link>
        <Vote postId={id} votes={votes} />
      </div>
    </div>
  );
}

export default BlogPostCard;
