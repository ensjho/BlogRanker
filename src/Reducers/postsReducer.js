import {
  ADD_COMMENT,
  DELETE_COMMENT,
  DELETE_POST,
  FETCH_POSTS,
  FETCH_POST,
  FETCH_COMMENTS,
} from "../actionTypes";

//TIPS FROM ELIE: here is the shape of what my state looks like and dealing with what's inside and why
//IMMER (libraray) => temporary copy of state and modifying using push and pop GOOD FURTHER STUDY

function postsReducer(state = {}, action) {
  // const payload = action.payload;
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
      console.log("NEW STATE AFTER DELETE COMMENT", copyState);
      return copyState;

    case "ERROR":
      return { ...state, error: true };

    // case EDIT_POST:
    //   {
    //     ...state,
    //     [action.post.id]: {{...state[action.post.id]}, action.post},
    //   };
    //   // stateCopy[payload.id] = payload;
    //   // return stateCopy;

    // case FETCH_COMMENTS:
    //   // {posts: {1: {title, description, comments:{"commentId1": message}}}}
    //   let comments = {};
    //   for (let comment of action.comments) {
    //     comments[comment.id] = comment;
    //   }

    //   console.log("NEW STATE", {
    //     ...state,
    //     [payload.postId]: {
    //       ...post,
    //       comments,
    //     },
    //   });

    //   return {
    //     ...state,
    //     [payload.postId]: {
    //       ...post,
    //       comments,
    //     },
    //   };

    // case ADD_COMMENT:
    //   post = state[payload.postId];
    //   return {
    //     ...state,
    //     [payload.postId]: {
    //       ...post,
    //       comments: {
    //         ...post.comments,
    //         [payload.comment.id]: payload.comment,
    //       },
    //     },
    //   };

    // case DELETE_COMMENT:
    //   post = state[payload.postId];

    //   let copyState = {
    //     ...state,
    //     [payload.postId]: {
    //       ...post,
    //       comments: {
    //         ...post.comments,
    //       },
    //     },
    //   };

    // delete copyState[payload.postId].comments[payload.commentId];

    // return copyState;

    default:
      return state;
  }
}

export default postsReducer;
