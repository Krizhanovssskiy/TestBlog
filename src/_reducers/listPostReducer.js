import {
  GET_LIST_ALL_POSTS,
  CREATE_POST,
  UPDATE_POST,
  DELETE_POST
} from '../_constants';

export default (state = [], { type, payload } ) => {
  switch (type) {

    case GET_LIST_ALL_POSTS:
      return [ ...payload ];

    case CREATE_POST:
      return [ ...state, payload ];

    case UPDATE_POST:
      const updatePostList = [ ...state];
      const updateIdx = updatePostList.findIndex(
        post => post.id === payload.id
      );
      updatePostList[updateIdx] = payload;
      return updatePostList;

    case DELETE_POST:
      const newState = state.filter(item => item.id !== payload);
      return [ ...newState ];

    default:
      return state;

  }
}