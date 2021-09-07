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

export function allProblemsSortByNewest(response) {
  return {
    type: types.ALL_PROBLEMS_SORT_BY_NEWEST,
    response,
  };
}

export function allProblemsSortByOldest(response) {
  return {
    type: types.ALL_PROBLEMS_SORT_BY_OLDEST,
    response,
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
