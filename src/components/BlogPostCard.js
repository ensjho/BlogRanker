import React from "react";
import "./BlogPostCard.css";
import Vote from "./Vote/Vote";
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
    <img src={src} className="ranking-img" alt="Responsive" >
    </img>
  )

  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="container">
          <div className="row">
            <div className="col-2 homepage-img  d-flex align-items-center">
              {src ? imgRanking : ""}
            </div>
            <Link to={`/${id}`} className="blogpost-Card d-flex flex-column justify-content-center col-8 text-left mr-5">
              <div className="title-card font-weight-bold">
                Title: {title}
              </div>
              Description: {description}
            </Link>
            <Vote postId={id} votes={votes} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPostCard;
