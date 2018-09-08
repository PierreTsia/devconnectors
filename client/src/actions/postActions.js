import axios from "axios";
import {
  ADD_POST,
  GET_ERRORS,
  GET_POSTS,
  POST_LOADING,
  DELETE_POST,
} from "./types";

//add Post
export const addPost = postData => dispatch => {
  axios
    .post("/api/posts", postData)
    .then(response => {
      dispatch({ type: ADD_POST, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: GET_ERRORS, payload: error.response.data });
    });
};

//get All Posts

export const getPosts = () => dispatch => {
  dispatch(setPostLoading());

  axios
    .get("api/posts")
    .then(response => {
      dispatch({ type: GET_POSTS, payload: response.data });
    })
    .catch(err => {
      dispatch({ type: GET_POSTS, payload: null });
    });
};

//Delete Post

export const deletePost = postId => dispatch => {
  console.log("postId: ", postId);
  axios
    .delete(`api/posts/${postId}`)
    .then(res => {
      dispatch({ type: DELETE_POST, payload: postId });
    })
    .catch(err => {
      dispatch({ type: GET_ERRORS, payload: err.response.data });
    });
};

//set loading state

export const setPostLoading = () => {
  return { type: POST_LOADING };
};
