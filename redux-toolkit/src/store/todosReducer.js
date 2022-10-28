const initialState = {
  todos: [],
};

const TODO_ADD_END = "TODO_ADD_END";
const TODO_REMOVE_END = "TODO_REMOVE_END";

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case TODO_ADD_END:
      const arrAdd = [...state.todos];
      arrAdd.push(action.payload);
      return { state, todos: arrAdd };
    case TODO_REMOVE_END:
      const arrRemove = [...state.todos];
      arrRemove.pop();
      return { state, todos: arrRemove };
    default:
      return state;
  }
};

export const todoAddEndAction = (payload) => ({
  type: TODO_ADD_END,
  payload,
});
export const todoRemoveEndAction = () => ({ type: TODO_REMOVE_END });
