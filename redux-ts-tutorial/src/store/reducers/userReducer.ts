const FETCH_USERS = "FETCH_USERS";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_ERROR = "FETCH_USERS_ERROR";

enum UserActionTypes {
  FETCH_USERS = "FETCH_USERS",
  FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
  FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
}

interface UserState {
  users: any[];
  loading: boolean;
  error: null | string;
}

interface FetchUserAction {
  type: FETCH_USERS;
}

interface FetchUserSuccessAction {
  type: FETCH_USERS_SUCCESS;
  payload: any[];
}

interface FetchUserErrorAction {
  type: FETCH_USERS_ERROR;
  payload: string;
}

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

export const userReducer = (
  state = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case FETCH_USERS:
      return { loading: true, error: null, users: [] };
    case FETCH_USERS_SUCCESS:
      return { loading: false, error: null, users: action.payload };
    case FETCH_USERS_ERROR:
      return { loading: false, error: action.payload, users: [] };
    default:
      return state;
  }
};
