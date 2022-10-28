import { useDispatch, useSelector } from "react-redux";

import {
  addTodo,
  decrement,
  increment,
  removeLastTodo,
} from "./toolkitRedux/toolkitSlice";

import "./App.css";

function App() {
  const counter = useSelector((state) => state.toolkit.counter);
  const todos = useSelector((state) => state.toolkit.todos);
  const dispatch = useDispatch();

  const getTodoList = async () => {
    const fetchTodo = await fetch(
      "https://jsonplaceholder.typicode.com/todos"
    ).then((response) => response.json());
    fetchTodo.forEach((item) => {
      dispatch(addTodo({ id: item.id, title: item.title }));
    });
  };

  return (
    <div className="App">
      <h1>Счетчик {counter}</h1>
      <button className="button" onClick={() => dispatch(increment(10))}>
        Инкремент
      </button>
      <button className="button" onClick={() => dispatch(decrement(10))}>
        Декремент
      </button>
      <button className="button" onClick={() => dispatch(removeLastTodo())}>
        Удалить последний туду
      </button>
      <button className="button" onClick={() => dispatch(addTodo(prompt()))}>
        Добавить туду
      </button>
      <button className="button" onClick={() => getTodoList()}>
        Добавить асинхронный туду
      </button>
      <ul className="list">
        {todos.map((item) => (
          <li key={item.id} className="list-item">
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
