import {
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  ADD_COMMENT,
  DELETE_COMMENT,
  FETCH_TITLES,
  FETCH_POST,
} from "./actionTypes";

import axios from "axios";

const BASE_URL = "http://localhost:5000";

function fetchTitles(titles) {
  return {
    type: FETCH_TITLES,
    titles,
  };
}

function fetchPost(post) {
  return {
    type: FETCH_POST,
    post,
  };
}

function addPost(post) {
  return {
    type: ADD_POST,
    post,
  };
}

function editPost(post) {
  return {
    type: EDIT_POST,
    post,
  };
}

function deletePost(postId) {
  return {
    type: DELETE_POST,
    postId,
  };
}

function addComment(comment, postId) {
  return {
    type: ADD_COMMENT,
    comment,
    postId,
  };
}

function deleteComment(commentId, postId) {
  return {
    type: DELETE_COMMENT,
    commentId,
    postId,
  };
}

function handleError(error) {
  return {
    type: "ERROR",
    error,
  };
}

export function getTitlesFromAPI() {
  return async function thunk(dispatch) {
    try {
      let res = await axios.get(`${BASE_URL}/api/posts`);
      dispatch(fetchTitles(res.data));
    } catch (error) {
      dispatch(handleError(error.response.data));
    }
  };
}

export function getPostFromAPI(postId) {
  return async function thunk(dispatch) {
    try {
      let res = await axios.get(`${BASE_URL}/api/posts/${postId}`);
      dispatch(fetchPost(res.data));
    } catch (error) {
      dispatch(handleError(error.response.data));
    }
  };
}

export function addPostToAPI(post) {
  return async function thunk(dispatch) {
    try {
      let res = await axios.post(`${BASE_URL}/api/posts/`, post);
      dispatch(addPost(res.data));
    } catch (error) {
      dispatch(handleError(error.response.data));
    }
  };
}

export function editPostToAPI(post, postId) {
  return async function thunk(dispatch) {
    try {
      let res = await axios.put(`${BASE_URL}/api/posts/${postId}`, post);
      dispatch(editPost(res.data));
    } catch (error) {
      dispatch(handleError(error.response.data));
    }
  };
}

export function deletePostFromAPI(postId) {
  return async function thunk(dispatch) {
    try {
      let res = await axios.delete(`${BASE_URL}/api/posts/${postId}`);
      if (res.data.message === "deleted") {
        dispatch(deletePost(postId));
      }
    } catch (error) {
      dispatch(handleError(error.response.data));
    }
  };
}

export function addCommentToAPI(comment, postId) {
  return async function thunk(dispatch) {
    try {
      let res = await axios.post(
        `${BASE_URL}/api/posts/${postId}/comments`,
        comment
      );
      dispatch(addComment(res.data, postId));
    } catch (error) {
      dispatch(handleError(error.response.data));
    }
  };
}

export function deleteCommentFromAPI(commentId, postId) {
  console.log("commentId, postId", commentId, postId);
  return async function thunk(dispatch) {
    try {
      let res = await axios.delete(
        `${BASE_URL}/api/posts/${postId}/comments/${commentId}`
      );
      console.log(`${BASE_URL}/api/posts/${postId}/comments/${commentId}`);
      if (res.data.message === "deleted") {
        dispatch(deleteComment(commentId, postId));
      }
    } catch (error) {
      dispatch(handleError(error.response.data));
    }
  };
}

//TIPS FROM ELIE: payload is too generalized,
//also what does each post take in, so that we can help other developers know what we are
//getting (YOU ARE GONNA PROBABLY FORGET EVERYTHING WHEN YOU COME BACK IN THE FUTRE)

// function addComment(postId, comment) {
//   return {
//     type: ADD_COMMENT,
//     payload: { postId, comment: { ...comment } },
//   };
// }

// function deleteComment(postId, commentId) {
//   return {
//     type: DELETE_COMMENT,
//     payload: { postId, commentId },
//   };
// }

// export { addPost, editPost, deletePost, addComment, deleteComment };
