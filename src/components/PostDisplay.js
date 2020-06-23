import React from "react";
import Vote from "./Vote/Vote"
import "./PostDisplay.css"

//Render post details: renders only if setOnEdit staet is set as False
function PostDisplay({ post,
  handleDelete,
  handleEditToggle,
  postId,
  votes }) {

  return (
    <div className="col-md-8 offset-md-2 mt-4">
      <div className="card">
        <div className="d-flex mt-2 mr-2 justify-content-end">
          <button className="btn btn-primary mr-1" onClick={handleEditToggle}> Edit</button>
          <button className="btn btn-danger" onClick={handleDelete}> Remove </button>
        </div>
        <div className="card-body pb-5">
          <div className="row mb-5">
            <div className="postdisplay-title col-10">
            {post.title}
            </div>
            <div className="postdisplay-vote col-2">
              <Vote postId={postId} votes={votes} />
            </div>
          </div>
          <div className="lead font-italic mb-3 border-bottom">
            {post.description}
          </div>
          <div className="mb-5 pb-5">
            {post.body}
          </div>

        </div>
      </div>
    </div>
  )
}
export default PostDisplay