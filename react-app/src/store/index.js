import { legacy_createStore as createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { cashReducer } from "./cashReducer";
import { castomerReducer } from "./castomerReducer";

const rootReducer = combineReducers({
  cash: cashReducer,
  castomer: castomerReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
