import React from "react";
import BlogPostCard from "./BlogPostCard";

//Renders Home Page with post cards (have title and description displayed)
function Home({ titles }) {
  const postComponent = Object.keys(titles).map((id) => (
    <BlogPostCard
      key={id}
      id={id}
      title={titles[id].title}
      description={titles[id].description}
    />
  ));
  // // console.log(titles)
  //   const postComponent = titles.map((post) => (
  //   <BlogPostCard
  //     key={post.id}
  //     id={post.id}
  //     title={post.title}
  //     description={post.description}
  //   />
  // ));

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
