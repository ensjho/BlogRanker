import React from "react";
import "../CSS/Vote.css";
import { useDispatch } from "react-redux";
import { voteToAPI } from "../actions/actions";

function Vote({ postId, votes }) {
  let dispatch = useDispatch();
  const upVote = () => {
    dispatch(voteToAPI(postId, "up"));
  };
  const downVote = () => {
    dispatch(voteToAPI(postId, "down"));
  };

  return (
    <div>
      <div>
        Votes: {votes}
      </div>
      <button className="upVote-button" onClick={upVote}>Up</button>
      <button className="downVote-button" onClick={downVote}>Down</button>
    </div >
  )
}

export default Vote;
