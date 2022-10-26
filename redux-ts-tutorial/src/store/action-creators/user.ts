import { Dispatch } from "redux";
import { UserAction, UserActionTypes } from "../../types/user";

export const fetchUsers = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionTypes.FETCH_USERS });
    } catch (e) {
      dispatch({
        type: UserActionTypes.FETCH_USERS_ERROR,
        payload: "ошибка загрузки пользователей",
      });
    }
  };
};
