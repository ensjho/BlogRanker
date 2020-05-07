import { combineReducers } from 'redux'
import postsReducer from './postsReducer'
import titleReducer from './titleReducer'

export default combineReducers({
  posts: postsReducer,
  title: titleReducer
})