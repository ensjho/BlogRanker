import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { useSelector, shallowEqual } from "react-redux";

function Comments({ comments, addBlogComment, deleteBlogComment }) {
  // const comments = useSelector((st) => st.posts[postId].comments, shallowEqual);

  const [commentData, setCommentData] = useState({ text: "" });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setCommentData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleCommentSubmit = (evt) => {
    evt.preventDefault();
    addBlogComment(commentData);
    setCommentData({ text: "" });
  };

  const handleCommentRemove = (evt) => {
    deleteBlogComment(evt.target.id);
  };

  // console.log("comments is", comments);
  const commentsRendered = Object.keys(comments).map((id) => (
    <div key={id}>
      {comments[id].text}
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
          name="text"
          onChange={handleChange}
          value={commentData.text}
          placeholder="New Commnet"
        ></input>
        <button>Add</button>
      </form>
    </div>
  );
}

export default Comments;
