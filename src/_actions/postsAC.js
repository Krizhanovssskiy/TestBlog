import bloggy from '../_apis/bloggy';
import { GET_LIST_ALL_POSTS, CREATE_POST } from '../_constants';


export const getAllPosts = () => async dispatch => {
  try {
    const { data, status } = await bloggy.get(
      `/posts`
    );
    if (status === 200 || status === '200') {
      dispatch({ type: GET_LIST_ALL_POSTS, payload: data });
    }
  } catch (err) {
    console.log(err);
  }
};

export const createPost = ({...data}) => async dispatch => {
  const { titlePost: title, bodyPost: body } = data;
  try {
    const { data, status } = await bloggy.post(
      `/posts`,
      { title, body }
    );
    if (status === 201 || status === '201') {
      dispatch({ type: CREATE_POST, payload: data });
    }


  } catch (err) {
    console.log(err);
  }
};