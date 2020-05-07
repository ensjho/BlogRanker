import {
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  ADD_COMMENT,
  DELETE_COMMENT,
} from "./actionTypes";

function addPost(post) {
  return { type: ADD_POST, payload: { ...post } };
}

function editPost(post) {
  return { type: EDIT_POST, payload: { ...post } };
}

function deletePost(post) {
  return { type: DELETE_POST, payload: { ...post } };
}

function addComment(postId, comment) {
  return {
    type: ADD_COMMENT,
    payload: { postId, comment: { ...comment } },
  };
}

function deleteComment(postId, commentId) {
  console.log("postId in action", postId);
  console.log("commentId in action", commentId);
  return { type: DELETE_COMMENT, payload: { postId, commentId } };
}

export { addPost, editPost, deletePost, addComment, deleteComment };
