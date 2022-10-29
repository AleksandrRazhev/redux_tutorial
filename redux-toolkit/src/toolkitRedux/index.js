import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import todosSlice from "./todosSlice";
import toolkitSlice from "./toolkitSlice";

const rootReducer = combineReducers({
  toolkit: toolkitSlice,
  todos: todosSlice,
  counter: counterSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
