import {
  GET_LIST_ALL_POSTS,
  CREATE_POST } from '../_constants';

export default (store = [], { type, payload } ) => {
  switch (type) {

    case GET_LIST_ALL_POSTS:
      return [ ...payload ];
    case CREATE_POST:
      return [ ...store, payload ];

    default:
      return store;

  }
}