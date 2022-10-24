import { useDispatch, useSelector } from "react-redux";

import {
  incrementCounterAction,
  decrementCounterAction,
} from "./store/counterReducer";

import { fetchUsers } from "./syncActions/fetchUsers";

import "./App.css";

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const users = useSelector((state) => state.users.users);

  const onIncrement = (number) => {
    dispatch(incrementCounterAction(number));
  };

  const onDecrement = (number) => {
    dispatch(decrementCounterAction(number));
  };

  const onGetUsers = () => {
    dispatch(fetchUsers());
  };

  return (
    <div className="App">
      <div className="block">{counter}</div>
      <div className="block">
        <button className="button" onClick={() => onIncrement(1)}>
          инкремент ++
        </button>
        <button className="button" onClick={() => onDecrement(1)}>
          декремент --
        </button>
      </div>
      <div className="block">
        <button className="button" onClick={() => onGetUsers()}>
          получить пользователей
        </button>
      </div>
      <div className="block">
        {users.length ? (
          <ul className="users-list">
            {users.map((item, i) => (
              <li className="users">{`${i + 1}. ${item.name}`}</li>
            ))}
          </ul>
        ) : (
          <p>список пользователей пуст</p>
        )}
      </div>
    </div>
  );
}

export default App;
