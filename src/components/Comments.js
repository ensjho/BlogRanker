import React, { useState } from "react";
import "../CSS/Comments.css"


function Comments({ comments, addBlogComment, deleteBlogComment }) {
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
    if (!(commentData.text === "")) {
      addBlogComment(commentData);
      setCommentData({ text: "" });
    }
  };

  const handleCommentRemove = (evt) => {
    deleteBlogComment(evt.target.id);
  };

  let commentsRendered;

  if (comments) {
    commentsRendered = Object.keys(comments).map((id) => (
      <div className="single-comment" key={id}>
        <div className="comment-content">
        {comments[id].text}
        </div>
        <button id={id} className="comment-remove-button" onClick={handleCommentRemove}>
          X
        </button>
      </div>
    ));
  }


  return (
    <div className="comments-container">
      <div>
        <h1>Comments</h1>
      </div>
      <form onSubmit={handleCommentSubmit}>
        <input
          name="text"
          onChange={handleChange}
          value={commentData.text}
          placeholder="New Commnet"
        ></input>
        <button className="addComment-Button">Add</button>
      </form>
      <div className="commentsRendered-container">
        {commentsRendered}
      </div>
    </div>
  );
}

export default Comments;
