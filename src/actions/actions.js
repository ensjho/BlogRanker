import {
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  ADD_COMMENT,
  DELETE_COMMENT,
  FETCH_TITLES,
  FETCH_POST,
  VOTE,
} from "./actionTypes";

import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000";


/**titles is an res.data (array) you get from the api  get request
in the form of {id, title, description, votes}
[
  {
    "id": 4,
    "title": "Our first Post",
    "description": "MJ",
    "votes": 0
  }
]
*/
function fetchTitles(titles) {
  return {
    type: FETCH_TITLES,
    titles,
  };
}

/**post is an res.data(object) you get from the api get request to get
 * details about a post in the form of {id, title, description, votes, comments}
 *
 * {
  "id": 4,
  "title": "Our first Post",
  "description": "MJ",
  "body": "i like basketball",
  "votes": 0,
  "comments": [
    {
      "id": 7,
      "text": "Hello the last dance"
    }
  ]
  }
 */

function fetchPost(post) {
  return {
    type: FETCH_POST,
    post,
  };
}

/**
 * post is what you get back from API once you post a new post
 *{
    "id": 10,
    "title": "First 123Post",
    "description": "Bes123t post ever!",
    "body": "Everyone love213s posting first. I win!",
    "votes": 0
  }

  applies for addPost/ edit post (what you get back when you edit)
 */

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

/** postId is postId(string) for specific post */
function deletePost(postId) {
  return {
    type: DELETE_POST,
    postId,
  };
}

/** postId is postId(string) for specific post
 * comment is what you get from api request to grab comments for specific post
  * [
      {
        "id": 7,
        "text": "Hello the last dance"
      }
    ]
*/
function addComment(comment, postId) {
  return {
    type: ADD_COMMENT,
    comment,
    postId,
  };
}

/** postId is postId(string) for specific post
 * commentId is commentId(string) for specific comment
 */
function deleteComment(commentId, postId) {
  return {
    type: DELETE_COMMENT,
    commentId,
    postId,
  };
}

/**input votes {
  "votes": 1
} */

function vote(votes, postId) {
  return {
    type: VOTE,
    votes: votes.votes,
    postId,
  };
}
function handleError(error) {
  return {
    type: "ERROR",
    error: true,
  };
}

export function clearError() {
  return {
    type: "ERROR",
    error: false,
  };
}

export function getTitlesFromAPI() {
  return async function thunk(dispatch) {
    try {
      let res = await axios.get(`${BASE_URL}/api/posts`);
      dispatch(fetchTitles(res.data));
    } catch (error) {
      dispatch(handleError(error));
    }
  };
}

export function getPostFromAPI(postId) {
  return async function thunk(dispatch) {
    try {
      let res = await axios.get(`${BASE_URL}/api/posts/${postId}`);
      dispatch(fetchPost(res.data));
    } catch (error) {
      dispatch(handleError(error));
    }
  };
}

export function addPostToAPI(post) {
  return async function thunk(dispatch) {
    try {
      let res = await axios.post(`${BASE_URL}/api/posts/`, post);
      dispatch(addPost(res.data));
    } catch (error) {
      dispatch(handleError(error));
    }
  };
}

export function editPostToAPI(post, postId) {
  return async function thunk(dispatch) {
    try {
      let res = await axios.put(`${BASE_URL}/api/posts/${postId}`, post);
      dispatch(editPost(res.data));
    } catch (error) {
      dispatch(handleError(error));
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
      dispatch(handleError(error));
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
      dispatch(handleError(error));
    }
  };
}

export function deleteCommentFromAPI(commentId, postId) {
  return async function thunk(dispatch) {
    try {
      let res = await axios.delete(
        `${BASE_URL}/api/posts/${postId}/comments/${commentId}`
      );
      if (res.data.message === "deleted") {
        dispatch(deleteComment(commentId, postId));
      }
    } catch (error) {
      dispatch(handleError(error));
    }
  };
}

export function voteToAPI(postId, direction = "up") {
  return async function thunk(dispatch) {
    try {
      let res = await axios.post(
        `${BASE_URL}/api/posts/${postId}/vote/${direction}`
      );
      dispatch(vote(res.data, postId));
    } catch (error) {
      dispatch(handleError(error));
    }
  };
}
