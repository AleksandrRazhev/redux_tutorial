import { all } from "redux-saga/effects";

import { countWatcher } from "./countSaga";
import { fetchUsersWatcher } from "./usersSaga";

export function* rootWatcher() {
  yield all([countWatcher(), fetchUsersWatcher()]);
}
