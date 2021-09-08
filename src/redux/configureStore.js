import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";
import persistStore from "redux-persist/es/persistStore";
import initialState from "./reducers/initialState";

const composeEnchancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools

export const store = createStore(
  rootReducer,
  {
    ...initialState,
  },
  composeEnchancers(applyMiddleware(reduxImmutableStateInvariant(), thunk))
);

export const persistor = persistStore(store);
