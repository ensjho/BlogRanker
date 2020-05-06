
import React, { useState, useEffect } from "react";
import { BrowserRouter, useHistory } from "react-router-dom";
import './App.css';
import Home from "./Home";
// import NotFound from "./NotFound"
import Header from "./Header";
import AddPostForm from "./AddPostForm";
import PostDetails from "./PostDetails"
import { Route, Switch } from "react-router-dom";

function App() {
  const [posts, setPosts] = useState([]);

  /** Add a madlib story. */
  const addPost = postObj => {
    setPosts(posts => [...posts, postObj]);
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
              <AddPostForm addPost={addPost} />
            </Route>
            <Route exact path="/:id">
              <PostDetails posts={posts} setPosts={setPosts} />
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
