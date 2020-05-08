import {
  ADD_COMMENT,
  DELETE_COMMENT,
  DELETE_POST,
  FETCH_POST,
  VOTE,
} from "../actionTypes";

//TODO: IMMER

/**postsReducer that returns state in the form of
 *  { postId(string): id(string), title(string), description(string), body(string),
 *    comments:{id(string), text(string)},
 *
 *    anotherPostId(string): id(string), title(string), description(string), body(string),
 *    comments:{id(string), text(string)},
 *  }
 */
function postsReducer(state = {}, action) {
  let stateCopy = { ...state };
  let post;

  switch (action.type) {
    case FETCH_POST:
      let comments = {};
      for (let comment of action.post.comments) {
        comments[comment.id] = comment;
      }
      return {
        ...state,
        [action.post.id]: { ...action.post, comments },
      };

    case DELETE_POST:
      delete stateCopy[action.postId];
      return stateCopy;

    case ADD_COMMENT:
      post = state[action.postId];
      return {
        ...state,
        [action.postId]: {
          ...post,
          comments: {
            ...post.comments,
            [action.comment.id]: action.comment,
          },
        },
      };

    case DELETE_COMMENT:
      post = state[action.postId];
      let copyState = {
        ...state,
        [action.postId]: {
          ...post,
          comments: {
            ...post.comments,
          },
        },
      };
      delete copyState[action.postId].comments[action.commentId];
      return copyState;

    case VOTE:
      return {
        ...state,
        [action.postId]: { ...state[action.postId], votes: action.votes },
      };

    case "ERROR":
      return { ...state, error: action.error };

    default:
      return state;
  }
}

export default postsReducer;
