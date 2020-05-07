import {
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  ADD_COMMENT,
  DELETE_COMMENT,
} from "./actionTypes";

const INITIAL_STATE = {};

/*
 */
function rootReducer(state = INITIAL_STATE, action) {
  console.log("state is", state);
  const payload = action.payload;
  let stateCopy = { ...state };
  let post;

  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        [payload.id]: { ...payload, comments: {} },
      };
    case EDIT_POST:
      console.log("payload is", payload);
      console.log("payload post comments", payload.comments);
      stateCopy[payload.id] = payload;
      return stateCopy;
    case DELETE_POST:
      delete stateCopy[payload.id];
      return stateCopy;
    case ADD_COMMENT:
      post = state[payload.postId];
      return {
        ...state,
        [payload.postId]: {
          ...post,
          comments: {
            ...post.comments,
            [payload.comment.id]: payload.comment,
          },
        },
      };
    case DELETE_COMMENT:
      post = stateCopy[payload.postId];
      console.log("post", post);
      console.log("payload", payload);
      console.log(
        "what we're trying to delete",
        post.comments[payload.commentId]
      );
      delete post.comments[payload.commentId];
      return stateCopy;
    default:
      return state;
  }
}

export default rootReducer;
