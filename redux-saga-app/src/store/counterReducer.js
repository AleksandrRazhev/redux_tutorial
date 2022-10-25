const defaultState = {
  counter: 0,
};

const INCREMENT_COUNTER = "INCREMENT_COUNTER";
export const ASYNC_INCREMENT_COUNTER = "ASYNC_INCREMENT_COUNTER";
const DECREMENT_COUNTER = "DECREMENT_COUNTER";
export const ASYNC_DECREMENT_COUNTER = "ASYNC_DECREMENT_COUNTER";

export const counterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return { ...state, counter: state.counter + action.payload };
    case DECREMENT_COUNTER:
      return { ...state, counter: state.counter - action.payload };
    default:
      return state;
  }
};

export const incrementCounterAction = (payload) => ({
  type: INCREMENT_COUNTER,
  payload,
});
export const asyncIncrementCounterAction = (payload) => ({
  type: ASYNC_INCREMENT_COUNTER,
  payload,
});
export const decrementCounterAction = (payload) => ({
  type: DECREMENT_COUNTER,
  payload,
});
export const asyncDecrementCounterAction = (payload) => ({
  type: ASYNC_DECREMENT_COUNTER,
  payload,
});
