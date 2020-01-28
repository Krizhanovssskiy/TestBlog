import { RETRIEVE_DETAILS_POST, ADD_COMMENT_POST } from '../_constants';

export default (state = {}, { type, payload }) => {
  switch (type) {
    case RETRIEVE_DETAILS_POST:
      return { ...payload };
    case ADD_COMMENT_POST:
      return { ...state, comments: [...state.comments, payload]};

    default:
      return state;
  }
}