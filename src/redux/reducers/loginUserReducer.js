import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function loginUserReducer(
  state = initialState.userProfile,
  action
) {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return state;
    case types.LOGIN_SUCCESS:
      console.log(action.response);
      return action.response;
    case types.LOGIN_FAILURE:
      alert("Incorrect login data");
      return state;
    default:
      return state;
  }
}