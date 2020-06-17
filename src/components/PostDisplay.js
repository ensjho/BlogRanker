import React from "react";
import "../CSS/PostDisplay.css"

//Render post details: renders only if setOnEdit staet is set as False
function PostDisplay({ post,
  handleDelete,
  handleEditToggle }) {

  return (
    <div className="postdisplay-container">
      <div className="button-container">
        <button className="remove-button" onClick={handleDelete}> Remove </button>
        <button className="edit-button" onClick={handleEditToggle}> Edit</button>
      </div>
      <div className="postDetail-container">
        <div className="titlePost-container">
          <h1>{post.title} </h1>
        </div>
        <div className="descriptionPost-container">
          <i>{post.description}</i>
        </div>
        <div className="bodyPost-container">
          {post.body}
        </div>
      </div>
    </div>
  )
}
export default PostDisplay