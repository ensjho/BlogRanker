import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import titleReducer from "./titleReducer";


/**
 * Combining two reducers for our Redux state to have two differnt top-level keys
 * posts: an object mapping postId: 
 *        {id, title, description, body, comments}
 * 
 * titles: an object of {id, title, description} for each posts with postId as keys
 * you get from the backend when you get basic data on all posts
 * 
 * titles are used for Home route
 * posts are used for Post route (includes all the details and comments about the post)
 */

export default combineReducers({
  posts: postsReducer,
  titles: titleReducer,
});
