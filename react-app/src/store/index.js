import { legacy_createStore as createStore, combineReducers } from "redux";

import { cashReducer } from "./cashReducer";
import { castomerReducer } from "./castomerReducer";

const rootReducer = combineReducers({});

export const store = createStore(cashReducer);
