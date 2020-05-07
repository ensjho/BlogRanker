import React from "react";


//Render post details: renders only if setOnEdit staet is set as False
function PostDisplay({ post,
  handleDelete,
  handleEditToggle }) {

  return (
    <div>
      <h1>{post.title} </h1>
      <h5>{post.description}</h5>
      <h5>{post.body}</h5>

      <button onClick={handleDelete}> Remove </button>
      <button onClick={handleEditToggle}> Edit</button>
    </div>
  )
}
export default PostDisplay