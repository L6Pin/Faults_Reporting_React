import * as types from "./actionTypes";
import * as problemsApi from "../../api/problems";

export function singleProblemRequest() {
  return {
    type: types.SINGLE_PROBLEM_REQUEST,
  };
}

export function singleProblemSuccess(response) {
  return {
    type: types.SINGLE_PROBLEM_SUCCESS,
    response,
  };
}

export function singleProblemFailure() {
  return {
    type: types.SINGLE_PROBLEM_FAILURE,
  };
}

export function singleProblemReset() {
  return {
    type: types.SINGLE_PROBLEM_RESET,
  };
}

export function getSingleProblem(id) {
  return (dispatch) => {
    dispatch(singleProblemRequest);
    problemsApi
      .getSingleProblem(id)
      .then((response) => dispatch(singleProblemSuccess(response)))
      .catch(() => {
        alert("There was a problem getting the problem");
        dispatch(singleProblemFailure);
      });
  };
}
