import {
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  ADD_COMMENT,
  DELETE_COMMENT,
  FETCH_POST
} from "../actionTypes";

//TIPS FROM ELIE: here is the shape of what my state looks like and dealing with what's inside and why
//IMMER (libraray) => temporary copy of state and modifying using push and pop GOOD FURTHER STUDY

function postsReducer(state = {}, action) {
  const payload = action.payload;
  let stateCopy = { ...state };
  let post;

  switch (action.type) {

    case FETCH_POST:
      return { ...state, ...action.posts};

    case 'ERROR':
      return { ...state, error: true };

    case ADD_POST:
      return {
        ...state,
        [payload.id]: { ...payload, comments: {} },
      };

    case EDIT_POST:
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
      post = state[payload.postId];

      let copyState = {
        ...state,
        [payload.postId]: {
          ...post,
          comments: {
            ...post.comments
          },
        },
      };

      delete copyState[payload.postId].comments[payload.commentId]

      return copyState

    default:
      return state;
  }
}

export default postsReducer;
