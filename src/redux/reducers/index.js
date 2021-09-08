import { combineReducers } from "redux";
import getAllProblemsReducer from "./getAllProblemsReducer";
import loginUserReducer from "./loginUserReducer";
import singleProblemReducer from "./singleProblemReducer";
import getAllUsersReducer from "./getAllUsersReducer";

import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["loginUserReducer"],
};

const rootReducer = combineReducers({
  getAllProblemsReducer,
  loginUserReducer,
  singleProblemReducer,
  getAllUsersReducer,
});

export default persistReducer(persistConfig, rootReducer);
