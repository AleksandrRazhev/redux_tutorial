import { put, takeEvery, call } from "redux-saga/effects";

import { GET_USERS_SAGA, getUsersAction } from "../store/usersReducer";

const fetchUsers = () => fetch("https://jsonplaceholder.typicode.com/users");

function* fetchUsersWorker() {
  const data = yield call(fetchUsers);
  const json = yield call(() => new Promise((res) => res(data.json())));
  yield put(getUsersAction(json));
}

export function* fetchUsersWatcher() {
  yield takeEvery(GET_USERS_SAGA, fetchUsersWorker);
}
