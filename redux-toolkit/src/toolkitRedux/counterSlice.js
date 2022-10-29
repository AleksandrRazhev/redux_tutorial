import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "toolkit",
  initialState: {
    counter: 0,
  },
  reducers: {
    increment(state, action) {
      state.counter = state.counter + action.payload;
    },
    decrement(state, action) {
      state.counter = state.counter - action.payload;
    },
  },
});

export default counterSlice.reducer;
export const { decrement, increment } = counterSlice.actions;
