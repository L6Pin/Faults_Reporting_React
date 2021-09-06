import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function singleProblemReducer(
  state = initialState.singleProblem,
  action
) {
  switch (action.type) {
    case types.SINGLE_PROBLEM_REQUEST:
      return state;
    case types.SINGLE_PROBLEM_SUCCESS:
      return action.response;
    case types.SINGLE_PROBLEM_FAILURE:
      return state;
    case types.SINGLE_PROBLEM_RESET:
      return null;
    default:
      return state;
  }
}
