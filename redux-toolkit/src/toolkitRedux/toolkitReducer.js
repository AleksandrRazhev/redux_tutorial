import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
  todos: [],
};

export const increment = createAction("INCREMENT");
export const decrement = createAction("DECREMENT");

export default createReducer(initialState, {
  [increment]: (state, action) => {
    state.counter = state.counter + action.payload;
  },
  [decrement]: (state, action) => {
    state.counter = state.counter - action.payload;
  },
});

console.log(decrement);
