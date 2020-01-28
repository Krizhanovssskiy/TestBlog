import { combineReducers } from "redux";
import listPosts from './listPostReducer';
import popup from './popupReducer';
import detailsPost from './detailsPostReducer'

export default combineReducers({
  listPosts,
  popup,
  detailsPost,
})