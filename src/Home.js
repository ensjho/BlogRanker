import React from "react";
import BlogPostCard from "./BlogPostCard";

//Renders Home Page with post cards (have title and description displayed)
function Home({ posts }) {

  console.log(posts);
  
  const postComponent = Object.keys(posts).map((id) => (
    <BlogPostCard
      key={id}
      id={id}
      title={posts[id].title}
      description={posts[id].description}
    />
  ));
  // // console.log(posts)
  //   const postComponent = posts.map((post) => (
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
        <div className="blogPostCard">
         {postComponent}
        </div>
      </div>
    </div>
  );
}

export default Home;
