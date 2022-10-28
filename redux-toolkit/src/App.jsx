import { useDispatch, useSelector } from "react-redux";

import { decrementAction, incrementAction } from "./store/counterReducer";
import { todoAddEndAction } from "./store/todosReducer";

import "./App.css";

function App() {
  const counter = useSelector((state) => state.counter.counter);
  const todos = useSelector((state) => state.todos.todos);
  // const todos = ['qwe', 'asd', 'zxc']
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Счетчик {counter}</h1>
      <button className="button" onClick={() => dispatch(incrementAction(1))}>Инкремент</button>
      <button className="button" onClick={() => dispatch(decrementAction(1))}>Декремент</button>
      <button className="button" onClick={() => console.log('Удалить последний туду')}>Удалить последний туду</button>
      <button className="button" onClick={() => dispatch(todoAddEndAction(prompt()))}>Добавить туду</button>
      <ul className="list">
        {todos.map(item => <li key={item} className="list-item">{item}</li>)}
      </ul>
    </div>
  );
}

export default App;
