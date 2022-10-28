import { useDispatch, useSelector } from "react-redux";

// import { decrementAction, incrementAction } from "./store/counterReducer";
// import { todoAddEndAction, todoRemoveEndAction } from "./store/todosReducer";
import { decrement, increment } from "./toolkitRedux/toolkitReducer";


import "./App.css";

function App() {
  const counter = useSelector((state) => state.toolkit.counter);
  // const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Счетчик {counter}</h1>
      <button className="button" onClick={() => dispatch(increment(10))}>Инкремент</button>
      <button className="button" onClick={() => dispatch(decrement(10))}>Декремент</button>
      {/* <button className="button" onClick={() => dispatch()}>Удалить последний туду</button>
      <button className="button" onClick={() => dispatch()}>Добавить туду</button>
      <ul className="list">
        {todos.map(item => <li key={item.id} className="list-item">{item.name}</li>)}
      </ul> */}
    </div>
  );
}

export default App;
