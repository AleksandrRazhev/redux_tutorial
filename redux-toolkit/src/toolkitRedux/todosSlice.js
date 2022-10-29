import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
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

export default todosSlice.reducer;
export const { addTodo, removeLastTodo } = todosSlice.actions;
