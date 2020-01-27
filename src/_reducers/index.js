import { combineReducers } from "redux";
import listPosts from './listPostReducer';
import popup from './popupReducer'

export default combineReducers({
  listPosts,
  popup,
})