import React from "react";
import { Link } from "react-router-dom";
import PostCardHome from "./PostCardHome";

function Home({ posts }) {
  const postComponent = Object.keys(posts).map((id) => (
    <PostCardHome
      key={id}
      id={id}
      title={posts[id].title}
      description={posts[id].description}
    />
  ));

  return (
    <div className="homeContainer">
      <h4>
        Welcome to <b>Microblog</b>, our innovative site for communicating on
        the information superhighway.
      </h4>
      <div className="postCardArea">{postComponent}</div>
    </div>
  );
}

export default Home;
