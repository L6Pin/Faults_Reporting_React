import * as types from "./actionTypes";
import * as problemsApi from "../../api/problems";

export function getAllUsersRequest() {
  return { type: types.ALL_USERS_REQUEST };
}

export function getAllUsersSuccess(response) {
  return { type: types.ALL_USERS_SUCCESS, response };
}

export function getAllUsersFailure() {
  return { type: types.ALL_USERS_FAILURE };
}

export function getAllUsers() {
  return (dispatch) => {
    dispatch(getAllUsersRequest);
    problemsApi
      .getAllUsers()
      .then((response) => {
        dispatch(getAllUsersSuccess(response));
      })
      .catch(() => {
        dispatch(getAllUsersFailure);
      });
  };
}
