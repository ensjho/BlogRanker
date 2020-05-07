import React, {useEffect} from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Header from "./Header";
import AddPostForm from "./AddPostForm";
import Post from "./Post";
import { Route, Switch, Redirect } from "react-router-dom";
import { addPost, editPost, deletePost, getPostsFromAPI } from "./actions";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

function App() {
  const posts = useSelector((st) => st.posts, shallowEqual);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getPostsFromAPI());
  }, [dispatch]);

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
              <AddPostForm addBlogPost={addBlogPost} />
            </Route>
            <Route exact path="/:id">
              <Post
                posts={posts}
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
