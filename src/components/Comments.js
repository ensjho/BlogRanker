import React, { useState } from "react";

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
      <div className="mt-3 d-flex justify-content-left"key={id}>
        <div className="col-11 border-bottom border-secondary mr-3">
        {comments[id].text}
        </div>
        <div className="col-3 p-0">
        <button id={id} className="btn btn-danger" onClick={handleCommentRemove}>
          X
        </button>
        </div>
      </div>
    ));
  }


  return (
    <div className="col-md-8 offset-md-2 mt-4">
      <h1>Comments</h1>
      <div className="card">
        <div className="card-body">
          <form className="form-inline" onSubmit={handleCommentSubmit}>
            <input
              className="form-control form-control-lg flex-grow-1"
              name="text"
              onChange={handleChange}
              value={commentData.text}
              placeholder="New Commnet"
            />
            <button className="btn btn-primary btn-lg">Add</button>
          </form>
          {commentsRendered}
        </div>
      </div>
    </div>
  );
}

export default Comments;
