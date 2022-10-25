import { put, takeEvery, call } from "redux-saga/effects";

import { getUsersAction } from "../store/usersReducer";
import { GET_USERS_SAGA } from "../store/usersReducer";

const dataUsers = () => fetch("https://jsonplaceholder.typicode.com/users");

function* fetchUsersWorker() {
  const data = yield call(dataUsers);
  const json = yield call(() => new Promise((res) => res(data.json)));
  yield put(getUsersAction(json));
}

export function* fetchUsersWatcher() {
  yield takeEvery(GET_USERS_SAGA, fetchUsersWorker);
}
