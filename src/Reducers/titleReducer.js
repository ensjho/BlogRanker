import { FETCH_TITLES, ADD_POST, EDIT_POST, DELETE_POST } from "../actionTypes";

// //TIPS FROM ELIE: here is the shape of what my state looks like and dealing with what's inside and why
// //IMMER (libraray) => temporary copy of state and modifying using push and pop GOOD FURTHER STUDY

function titleReducer(state = {}, action) {
  switch (action.type) {
    case FETCH_TITLES:
      let newState = {};
      for (let title of action.titles) {
        newState[title.id] = title;
      }
      return newState;

    case ADD_POST:
      return {
        ...state,
        [action.post.id]: action.post,
      };

    case EDIT_POST:
      return {
        ...state,
        [action.post.id]: action.post,
      };

    case DELETE_POST:
      let stateCopy = { ...state };
      delete stateCopy[action.postId];
      return stateCopy;

    default:
      return state;
  }
}

export default titleReducer;
