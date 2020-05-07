import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { useSelector, shallowEqual } from "react-redux";

function Comments({ postId, addBlogComment, deleteBlogComment }) {
  const comments = useSelector((st) => st[postId].comments, shallowEqual);
  const [commentData, setCommentData] = useState({ body: "" });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setCommentData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleCommentSubmit = (evt) => {
    evt.preventDefault();
    commentData.id = uuid();
    addBlogComment(commentData);
    setCommentData({ body: "" });
  };

  const handleCommentRemove = (evt) => {
    deleteBlogComment(evt.target.id);
  };

  const commentsRendered = Object.keys(comments).map((id) => (
    <div key={id}>
      {comments[id].body}
      <button id={id} onClick={handleCommentRemove}>
        remove
      </button>
    </div>
  ));
  

  //TODO: eventually want comment component, render one comment or rendering 100 COMMENTs
  //just like what we are doing rn.

  return (
    <div className="commentsArea">
      <div>
        <h3>Comments</h3>
        <div>{commentsRendered}</div>
      </div>
      <form onSubmit={handleCommentSubmit}>
        <input
          name="body"
          onChange={handleChange}
          value={commentData.body}
          placeholder="New Commnet"
        ></input>
        <button>Add</button>
      </form>
    </div>
  );
}

export default Comments;
