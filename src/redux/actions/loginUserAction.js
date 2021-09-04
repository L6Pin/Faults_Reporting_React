import * as types from "./actionTypes";
import * as problemsApi from "../../api/problems";

export function loginRequest() {
  return {
    type: types.LOGIN_REQUEST,
  };
}

export function loginSuccess(response) {
  return {
    type: types.LOGIN_SUCCESS,
    response,
  };
}

export function loginFailure() {
  return {
    type: types.LOGIN_FAILURE,
  };
}

export function userLogin(loginObject) {
  return (dispatch) => {
    dispatch(loginRequest);
    problemsApi
      .userLogin(loginObject)
      .then((response) => dispatch(loginSuccess(response)))
      .catch(() => {
        alert("Incorrect username or password");
        dispatch(loginFailure);
      });
  };
}
