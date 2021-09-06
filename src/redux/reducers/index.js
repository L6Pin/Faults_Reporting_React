import { combineReducers } from "redux";
import getAllProblemsReducer from "./getAllProblemsReducer";
import loginUserReducer from "./loginUserReducer";
import singleProblemReducer from "./singleProblemReducer";

const rootReducer = combineReducers({
  getAllProblemsReducer,
  loginUserReducer,
  singleProblemReducer,
});

export default rootReducer;
