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

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    };
    dispatch({ type: "ADD_CUSTOMER", payload: customer });
  };

  const removeCustomer = (id) => {
    dispatch({ type: "REMOVE_CUSTOMER", payload: id });
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
      <div style={{ fontSize: "3rem" }}>
        <button onClick={() => addCustomer(prompt())}>добавить клиента</button>
        <button onClick={() => getCash(prompt())}>удалить клиента</button>
      </div>
      <div>
        {customers.length > 0 ? (
          <ul>
            {customers.map((item) => (
              <li key={item.id} onClick={() => removeCustomer(item.id)}>
                {item.name}
              </li>
            ))}
          </ul>
        ) : (
          <p>клиенты отсутствуют</p>
        )}
      </div>
    </div>
  );
}

export default App;
