import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";

import { counterReducer } from "./counterReducer";
import { usersReducer } from "./usersReducer";
import { rootWatcher } from "../saga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  counter: counterReducer,
  users: usersReducer,
});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootWatcher);
