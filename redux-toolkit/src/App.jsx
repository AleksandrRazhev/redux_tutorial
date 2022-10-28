import { useDispatch, useSelector } from "react-redux";

import { decrementAction, incrementAction } from "./store/counterReducer";

import "./App.css";

function App() {
  const counter = useSelector((state) => state.counter.counter);
  // const todos = useSelector((state) => state.main.todos);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Счетчик {counter}</h1>
      <button className="button" onClick={() => dispatch(incrementAction(1))}>Инкремент</button>
      <button className="button" onClick={() => dispatch(decrementAction(1))}>Декремент</button>
    </div>
  );
}

export default App;
