import { combineReducers } from "redux";
import getAllProblemsReducer from "./getAllProblemsReducer";
import loginUserReducer from "./loginUserReducer";

const rootReducer = combineReducers({ getAllProblemsReducer, loginUserReducer});

export default rootReducer;