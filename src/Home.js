import React from "react";
import BlogPostCard from "./BlogPostCard";
import { useDispatch, useSelector } from "react-redux";

import { clearError } from "./actions";
//Renders Home Page with post cards (have title and description displayed)
function Home({ sortedPostIds, titles }) {
  const dispatch = useDispatch();
  const error = useSelector((st) => st.posts.error);

  if (error) {
    dispatch(clearError());
  }

  const postComponent = sortedPostIds.map((id) => (
    <BlogPostCard
      key={id}
      id={id}
      title={titles[id].title}
      description={titles[id].description}
      votes={titles[id].votes}
    />
  ));

  return (
    <div className="homeContainer">
      <h4>
        Welcome to <b>Microblog</b>, our innovative site for communicating on
        the information superhighway.
      </h4>
      <div className="postCardArea">
        <div className="blogPostCard">{postComponent}</div>
      </div>
    </div>
  );
}

export default Home;
