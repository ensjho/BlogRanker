import React, { useState, useEffect } from "react";
import { BrowserRouter, useHistory } from "react-router-dom";
import "./App.css";
import Home from "./Home";
// import NotFound from "./NotFound"
import Header from "./Header";
import AddPostForm from "./AddPostForm";
import PostDetails from "./PostDetails";
import { Route, Switch, Redirect } from "react-router-dom";
import { addPost, editPost, deletePost } from "./actions";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

function App() {
  const posts = useSelector((st) => st, shallowEqual);
  console.log("RERENDER AT APP LEVEL");
  console.log("POSTS IS", posts);
  const dispatch = useDispatch();

  /** Add a madlib story. */
  // const addPost = (postObj) => {
  //   setPosts((posts) => [...posts, postObj]);
  // };

  const addBlogPost = (post) => {
    dispatch(addPost(post));
  };

  const editBlogPost = (post) => {
    dispatch(editPost(post));
  };

  const deleteBlogPost = (post) => {
    dispatch(deletePost(post));
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main>
          <Switch>
            <Route exact path="/">
              <Home posts={posts} />
            </Route>
            <Route exact path="/new">
              <AddPostForm addPost={addBlogPost} />
            </Route>
            <Route exact path="/:id">
              <PostDetails
                posts={posts}
                editPost={editBlogPost}
                deletePost={deleteBlogPost}
              />
            </Route>
          </Switch>
          <Route>
            <Redirect to="/"></Redirect>
          </Route>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
