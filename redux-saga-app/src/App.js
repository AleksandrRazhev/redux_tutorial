import { useDispatch, useSelector } from "react-redux";

import {
  asyncIncrementCounterAction,
  asyncDecrementCounterAction,
} from "./store/counterReducer";
import { getUsersSagaAction } from "./store/usersReducer";

import "./App.css";

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const users = useSelector((state) => state.users.users);

  return (
    <div className="App">
      <div className="block">{counter}</div>
      <div className="block">
        <button
          className="button"
          onClick={() => dispatch(asyncIncrementCounterAction())}
        >
          инкремент ++
        </button>
        <button
          className="button"
          onClick={() => dispatch(asyncDecrementCounterAction())}
        >
          декремент --
        </button>
      </div>
      <div className="block">
        <button
          className="button"
          onClick={() => dispatch(getUsersSagaAction())}
        >
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
