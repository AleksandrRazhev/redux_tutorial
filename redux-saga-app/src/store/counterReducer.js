const defaultState = {
  counter: 0,
};

const INCREMENT_COUNTER = "INCREMENT_COUNTER";
const DECREMENT_COUNTER = "DECREMENT_COUNTER";

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
export const decrementCounterAction = (payload) => ({
  type: DECREMENT_COUNTER,
  payload,
});
