import bloggy from "../_apis/bloggy";
import {ADD_COMMENT_POST} from "../_constants";


export const addCommentPost = ({id, body}) => async dispatch => {
  const postId = Number(id);
  try {
    const { data, status } = await bloggy.post(
      `/comments`,
      { postId, body }
    );
    if (status === 201 || status === '201') {
      dispatch({ type: ADD_COMMENT_POST, payload: data });
    }


  } catch (err) {
    console.log(err);
  }
};