import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function getAllProblemsReducer(
  state = initialState.allProblems,
  action
) {
  switch (action.type) {
    case types.ALL_PROBLEMS_REQUEST:
      return state;
    case types.ALL_PROBLEMS_SUCCESS:
      return action.response;
    case types.ALL_PROBLEMS_FAILURE:
      console.log("Problem getting all Problems!");
      return state;
    case types.ALL_PROBLEMS_SORT_BY_OLDEST:
      return [...state].reverse();
    case types.ALL_PROBLEMS_SORT_BY_NEWEST:
      return [...state].reverse();
    default:
      return state;
  }
}
