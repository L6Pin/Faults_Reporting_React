import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function getAllUsersReducer(
  state = initialState.allUsers,
  action
) {
  switch (action.type) {
    case types.ALL_USERS_REQUEST:
      return state;
    case types.ALL_USERS_SUCCESS:
      return action.response;
    case types.ALL_USERS_FAILURE:
      alert("There was a problem getting all users");
      return state;
    default:
      return state;
  }
}
