import {
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  ADD_COMMENT,
  DELETE_COMMENT,
  FETCH_POST
} from "./actionTypes";

import axios from 'axios';

const BASE_URL = "http://localhost:5000"

function fetchPosts(posts) {
  return {
    type: FETCH_POST,
    posts
  };
}

function handleError(error) {
  return {
    type: 'ERROR',
    error
  };
}

export function getPostsFromAPI() {
  return async function thunk(dispatch) {
    try {
      let res = await axios.get(`${BASE_URL}/api/posts`);
      console.log(res.data)
      dispatch(fetchPosts(res.data));
    } catch (error) {
      dispatch(handleError(error.response.data));
    }
  };
}


function addPost(post) {
  return {
    type: ADD_POST,
    payload: { ...post }
  };
}

function editPost(post) {
  return {
    type: EDIT_POST,
    payload: { ...post }
  };
}

function deletePost(post) {
  return {
    type: DELETE_POST,
    payload: { ...post }
  };
}

//TIPS FROM ELIE: payload is too generalized,
//also what does each post take in, so that we can help other developers know what we are 
//getting (YOU ARE GONNA PROBABLY FORGET EVERYTHING WHEN YOU COME BACK IN THE FUTRE)

function addComment(postId, comment) {
  return {
    type: ADD_COMMENT,
    payload: { postId, comment: { ...comment } }
  };
}

function deleteComment(postId, commentId) {
  return {
    type: DELETE_COMMENT,
    payload: { postId, commentId }
  };
}

export { addPost, editPost, deletePost, addComment, deleteComment };
