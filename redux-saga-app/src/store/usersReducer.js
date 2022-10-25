const defaultState = {
  users: [],
};

export const GET_USERS = "GET_USERS";
export const GET_USERS_SAGA = "GET_USERS_SAGA";

export const usersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, users: [...state.users, ...action.payload] };
    default:
      return state;
  }
};

export const getUsersAction = (payload) => ({
  type: GET_USERS,
  payload,
});
export const getUsersSagaAction = (payload) => ({
  type: GET_USERS_SAGA,
  payload,
});
