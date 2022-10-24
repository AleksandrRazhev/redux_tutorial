import { useDispatch, useSelector } from "react-redux";

import "./App.css";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customers.customers);

  const addCash = (cash) => {
    dispatch({ type: "ADD_CASH", payload: cash });
  };

  const getCash = (cash) => {
    dispatch({ type: "GET_CASH", payload: cash });
  };

  return (
    <div className="App">
      <div style={{ padding: "1rem", display: "flex" }}>
        <div style={{ fontSize: "3rem" }}>{cash}</div>
        <button onClick={() => addCash(Number(prompt()))}>
          получить на счет
        </button>
        <button onClick={() => getCash(Number(prompt()))}>
          снять со счета
        </button>
      </div>
      {customers.length > 0 ? <div></div> : <div>клиенты отсутствуют</div>}
    </div>
  );
}

export default App;
