import React from "react";
import "./Vote.css";
import { useDispatch } from "react-redux";
import { voteToAPI } from "../../actions/actions";

function Vote({ postId, votes }) {
  let dispatch = useDispatch();
  const upVote = () => {
    dispatch(voteToAPI(postId, "up"));
  };
  const downVote = () => {
    dispatch(voteToAPI(postId, "down"));
  };

  return (
    <div className="text-center">
      <div className="vote-title text-primary">
        Votes
      </div>
      <div className="card mb-2 p-3 align-items-center font-weight-bold">
          {votes}
      </div>
      <button className="btn btn-primary btn-sm mr-1" onClick={upVote}>&uarr;</button>
      <button className="btn btn-primary btn-sm" onClick={downVote}> &darr;</button>
    </div >
  )
}

export default Vote;
