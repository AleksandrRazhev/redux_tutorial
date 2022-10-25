import { put } from "redux-saga/effects";

import { incrementCounterAction } from "../store/counterReducer";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function* incrementWorker() {
  yield delay(1000);
  yield put(incrementCounterAction(1));
}

function* decrementWorker() {}

function* countWatcher() {}
