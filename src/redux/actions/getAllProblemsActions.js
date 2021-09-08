import * as types from "./actionTypes";
import * as problemsApi from "../../api/problems";

export function allProblemsRequest() {
  return { type: types.ALL_PROBLEMS_REQUEST };
}

export function allProblemsSuccess(response) {
  return { type: types.ALL_PROBLEMS_SUCCESS, response };
}

export function allProblemsFailure() {
  return { type: types.ALL_PROBLEMS_FAILURE };
}

export function allProblemsSortByNewest() {
  return {
    type: types.ALL_PROBLEMS_SORT_BY_NEWEST,
  };
}

export function allProblemsSortByOldest() {
  return {
    type: types.ALL_PROBLEMS_SORT_BY_OLDEST,
  };
}

export function getAllProblems() {
  return (dispatch) => {
    dispatch(allProblemsRequest);
    problemsApi
      .getAllProblems()
      .then((response) => {
        dispatch(allProblemsSuccess(response));
      })
      .catch((error) => {
        dispatch(allProblemsFailure);
      });
  };
}
