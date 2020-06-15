import React from "react";
import { useDispatch } from "react-redux";
import { voteToAPI } from "../actions/actions";

function Vote({ postId, votes }) {
  // Think about where to put dispatches
  let dispatch = useDispatch();
  const upVote = () => {
    dispatch(voteToAPI(postId, "up"));
  };
  const downVote = () => {
    dispatch(voteToAPI(postId, "down"));
  };

  return (
    <div>
      {votes}
      <button onClick={upVote}>UP</button>
      <button onClick={downVote}>Down</button>
    </div>
  );
}

export default Vote;
