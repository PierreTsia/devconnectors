import axios from "axios";
import {
  GET_PROFILE,
  PROFILE_LOADING,
  CLEAR_CURRENT_PROFILE,
  GET_ERRORS,
  SET_CURRENT_USER,
} from "./types";

//Get Current Profile

export const getCurrentProfile = () => dispatch => {
  dispatch(setProfileLoading());

  axios
    .get("api/profiles")
    .then(res => {
      console.log("res: ", res);

      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      });
    })
    .catch(err =>
      dispatch({
        type: GET_PROFILE,
        payload: {},
      }),
    );
};

//Profile Loading

export const setProfileLoading = () => {
  return { type: PROFILE_LOADING };
};

//Clear Profile

export const clearCurrentProfile = () => {
  return { type: CLEAR_CURRENT_PROFILE };
};

//create a profile

export const createProfile = (profileData, history) => dispatch => {
  console.log("profileData: ", profileData);
  axios
    .post("/api/profiles", profileData)
    .then(res => {
      history.push("/dashboard");
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};

//Delete a profile
export const deleteAccount = () => dispatch => {
  if (window.confirm(`Are you sure ? You're about to delete your account.`)) {
    axios
      .delete("/api/profiles/")
      .then(() => {
        dispatch({ type: SET_CURRENT_USER, payload: {} });
      })
      .catch(error => {
        dispatch({ type: GET_ERRORS, payload: error });
      });
  }
};
