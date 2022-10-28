import { createSlice } from "@reduxjs/toolkit";

const toolkitSlice = createSlice({
  name: "toolkit",
  initialState: {
    counter: 0,
    todos: [],
  },
  reducers: {
    increment(state, action) {
      state.counter = state.counter + action.payload;
    },
    decrement(state, action) {
      state.counter = state.counter - action.payload;
    },
    addTodo(state, action) {
      const todo = () => {
        if (action.payload.id) {
          return { id: action.payload.id, title: action.payload.title };
        } else {
          return { id: Date.now(), title: action.payload };
        }
      };
      state.todos.push(todo());
    },
    removeLastTodo(state) {
      state.todos.pop();
    },
  },
});

export default toolkitSlice.reducer;
export const { addTodo, decrement, increment, removeLastTodo } =
  toolkitSlice.actions;
