import * as types from "./actionTypes";
import * as problemsApi from "../../api/problems";

export function postProblemRequest() {
  return { type: types.POST_PROBLEM_REQUEST };
}

export function postProblemSuccess(response) {
  return { type: types.POST_PROBLEM_SUCCESS, response };
}

export function postProblemFailure() {
  return { type: types.POST_PROBLEM_FAILURE };
}

export function postProblem() {
  return (dispatch) => {
    dispatch(postProblemRequest);
    problemsApi
      .problemPost()
      .then((response) => dispatch(postProblemSuccess(response)))
      .catch(() => dispatch(postProblemFailure));
  };
}
