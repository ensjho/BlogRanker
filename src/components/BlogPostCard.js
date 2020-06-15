import React from "react";
import "../CSS/BlogPostCard.css";
import Vote from "./Vote";
import { Link } from "react-router-dom";
import first from "../img/first.svg"
import second from "../img/second.png"
import third from "../img/third.svg"

//renders a blog post card that gets displayed in home page
function BlogPostCard({ id, title, description, votes, idx }) {
  let logo = "";

  if (idx === 0) logo = first;
  if (idx === 1) logo = second;
  if (idx === 2) logo = third;

  return (
    <div>
      <div className="postcardHome">
        <div>
          <Link to={`/${id}`} className="blogpostCard">
            <div>
              <b>  {title} </b>
            </div>
            <div>
              <b>Description: </b>
              {description}
            </div>
          </Link>
        </div>
        <div className="">
          <Vote postId={id} votes={votes} />
        </div>
        <div className="ranking-container">
          <img src={logo} alt="ranking">
          </img>
        </div>
      </div>
    </div>
  );
}

export default BlogPostCard;
