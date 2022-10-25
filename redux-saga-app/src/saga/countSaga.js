import { put, takeEvery } from "redux-saga/effects";

import {
  incrementCounterAction,
  decrementCounterAction,
} from "../store/counterReducer";
import {
  ASYNC_INCREMENT_COUNTER,
  ASYNC_DECREMENT_COUNTER,
} from "../store/counterReducer";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function* incrementWorker() {
  yield delay(1000);
  yield put(incrementCounterAction(1));
}

function* decrementWorker() {
  yield delay(1000);
  yield put(decrementCounterAction(1));
}

export function* countWatcher() {
  yield takeEvery(ASYNC_INCREMENT_COUNTER, incrementWorker);
  yield takeEvery(ASYNC_DECREMENT_COUNTER, decrementWorker);
}
