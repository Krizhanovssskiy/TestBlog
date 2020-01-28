import bloggy from '../_apis/bloggy';
import {
  GET_LIST_ALL_POSTS,
  RETRIEVE_DETAILS_POST,
  CREATE_POST,
  DELETE_POST,
  UPDATE_POST
} from '../_constants';


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

export const retrieveDetailsPost = (id) => async dispatch => {
  try {
    const { data, status } = await bloggy.get(
      `/posts/${id}?_embed=comments`
    );
    if (status === 200 || status === '200') {
      dispatch({ type: RETRIEVE_DETAILS_POST, payload: data });
    }
  } catch (err) {
    console.log(err);
  }
};

export const createPost = ({title, body}) => async dispatch => {
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

export const deletePost = (id) => async dispatch => {
  try {
    const { status } = await bloggy.delete(
      `/posts/${id}`
    );
    if (status === 204 || status === '204') {
      dispatch({ type: DELETE_POST, payload: id });
    }
  } catch (err) {
    console.log(err);
  }
};

export const updatePost = ({id, title, body}) => async dispatch => {
  try {
    const { data, status } = await bloggy.put(
      `/posts/${id}`,
      { title, body }
    );
    if (status === 200 || status === '200') {
      dispatch({ type: UPDATE_POST, payload: data });
    }
  } catch (err) {
    console.log(err);
  }
};

