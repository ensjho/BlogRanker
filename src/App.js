import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Header from "./Header";
import AddPostForm from "./AddPostForm";
import Post from "./Post";
import { Route, Switch, Redirect } from "react-router-dom";
import {
  getTitlesFromAPI,
  addPostToAPI,
  editPostToAPI,
  deletePostFromAPI,
} from "./actions";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

function App() {
  const titles = useSelector((st) => st.titles, shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTitlesFromAPI());
  }, [dispatch]);

  const addBlogPost = (post) => {
    dispatch(addPostToAPI(post));
  };

  const editBlogPost = (post, postId) => {
    dispatch(editPostToAPI(post, postId));
  };

  const deleteBlogPost = (postId) => {
    dispatch(deletePostFromAPI(postId));
  };

  //TODO: DeleteBlog post can be done in POST move down dispatch in post component

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main>
          <Switch>
            <Route exact path="/">
              <Home titles={titles} />
            </Route>
            <Route exact path="/new">
              <AddPostForm addBlogPost={addBlogPost} />
            </Route>
            <Route exact path="/:id">
              <Post
                editBlogPost={editBlogPost}
                deleteBlogPost={deleteBlogPost}
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
