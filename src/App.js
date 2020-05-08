import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Header from "./Header";
import AddPostForm from "./AddPostForm";
import Post from "./Post";
import { Route, Switch, Redirect } from "react-router-dom";
import { getTitlesFromAPI } from "./actions";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

function App() {
  const titles = useSelector((st) => st.titles, shallowEqual);
  const dispatch = useDispatch();

  // Sort titles by votes, descending
  let sortedTitles = [];
  for (let postId in titles) {
    // Push a [postId, vote] to sortedTitles
    sortedTitles.push([postId, titles[postId].votes]);
  }
  // Sort by vote descending, resulting in a sorted
  // array, e.g.
  // sortedTitles = [["productId1", 5], ["productId2", 3]...]
  sortedTitles.sort(function (a, b) {
    return b[1] - a[1];
  });

  // Build an array of just postIds
  // (sorted by votes, descending)
  let sortedPostIds = [];
  for (let postIdVote of sortedTitles) {
    sortedPostIds.push(postIdVote[0]);
  }

  useEffect(() => {
    dispatch(getTitlesFromAPI());
  }, [dispatch]);

  //TODO: DeleteBlog post can be done in POST move down dispatch in post component

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main>
          <Switch>
            <Route exact path="/">
              <Home sortedPostIds={sortedPostIds} titles={titles} />
            </Route>
            <Route exact path="/new">
              <AddPostForm />
            </Route>
            <Route exact path="/:id">
              <Post />
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
