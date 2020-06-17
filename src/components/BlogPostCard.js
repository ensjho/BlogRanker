import React from "react";
import "../CSS/BlogPostCard.css";
import Vote from "./Vote";
import { Link } from "react-router-dom";
import first from "../img/first.svg"
import second from "../img/second.svg"
import third from "../img/third.svg"

//renders a blog post card that gets displayed in home page
function BlogPostCard({ id, title, description, votes, idx }) {
  let src;

  if (idx === 0) src = first;
  if (idx === 1) src = second;
  if (idx === 2) src = third;

  let imgRanking = (
    <img src={src} alt="ranking">
    </img>
  )

  return (
    <div>
      <div className="postcard-Home">
        <div className="ranking-container">
          {src? imgRanking : null}
        </div>
        <Link to={`/${id}`} className="blogpost-Card">
          <div className="title-container">
            <b> Title: {title} </b>
          </div>
          <div className="description-container">
            Description: {description}
          </div>
        </Link>
        <div className="vote-container">
          <Vote postId={id} votes={votes} />
        </div>
      </div>
    </div>
  );
}

export default BlogPostCard;
