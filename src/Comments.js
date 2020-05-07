import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

function Comments({ postId, addComment, deleteComment }) {
  // const [commentList, setCommentList] = useState([]);
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
    // setCommentList([...commentList, commentData]);
    addComment(commentData);
    setCommentData({ body: "" });
  };

  const handleCommentRemove = (evt) => {
    // console.log(evt.target.id);
    // const nonDeletedComments = commentList.filter(
    //   (comment) => comment["id"] !== evt.target.id
    // );
    // setCommentList(nonDeletedComments);
    console.log("evt.target.id", evt.target.id);
    deleteComment(evt.target.id);
  };

  const commentArea = Object.keys(comments).map((id) => (
    <div key={id}>
      {comments[id].body}
      <button id={id} onClick={handleCommentRemove}>
        {" "}
        remove{" "}
      </button>
    </div>
  ));

  return (
    <div className="commentsArea">
      <div>
        <h3>Comments</h3>
        <div>{commentArea}</div>
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
