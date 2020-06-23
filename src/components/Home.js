import React from "react";
import BlogPostCard from "./BlogPostCard";
import { useDispatch, useSelector } from "react-redux";
import { clearError } from "../actions/actions";

//Renders Home Page with post cards (have title and description displayed)
function Home({ sortedPostIds, titles }) {
  const dispatch = useDispatch();
  const error = useSelector((st) => st.posts.error);

  if (error) {
    dispatch(clearError());
  }

  const postComponent = sortedPostIds.map((id, idx) => (
    <BlogPostCard
      idx={idx}
      key={id}
      id={id}
      title={titles[id].title}
      description={titles[id].description}
      votes={titles[id].votes}
    />
  ));

  return (
    <div>
      <div className="text-center">
        <h5>Welcome to <b>Blog Ranker</b>, our innovative site for communicating on
        the information superhighway!
        </h5>
      </div>
      <div className="col-md-8 offset-md-2 mt-4">
        {postComponent}
      </div>
    </div>
  );
}

export default Home;
