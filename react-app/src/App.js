import { useDispatch, useSelector } from "react-redux";

import { addCustomerAction } from "./store/customerReducer";
import { removeCustomerAction } from "./store/customerReducer";
import { addCashAction } from "./store/cashReducer";
import { getCashAction } from "./store/cashReducer";
import { fetchCustomers } from "./asyncActions/customers";

import "./App.css";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customers.customers);

  const addCash = (cash) => {
    dispatch(addCashAction(cash));
  };

  const getCash = (cash) => {
    dispatch(getCashAction(cash));
  };

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    };
    dispatch(addCustomerAction(customer));
  };

  const removeCustomer = (id) => {
    dispatch(removeCustomerAction(id));
  };

  return (
    <div className="App">
      <div className="block">
        <div
          style={{ fontSize: "3rem", display: "flex", alignItems: "center" }}
        >
          {cash}
        </div>
        <button className="button" onClick={() => addCash(Number(prompt()))}>
          добавить на счет
        </button>
        <button className="button" onClick={() => getCash(Number(prompt()))}>
          снять со счета
        </button>
      </div>
      <div className="block">
        <button className="button" onClick={() => addCustomer(prompt())}>
          добавить клиента
        </button>
        <button className="button" onClick={() => dispatch(fetchCustomers())}>
          получить клиентов из базы
        </button>
      </div>
      <div className="block">
        {customers.length > 0 ? (
          <ul className="customers-list">
            {customers.map((item) => (
              <li key={item.id} className="customer">
                {item.name}
                <button
                  className="button"
                  onClick={() => removeCustomer(item.id)}
                >
                  Удалить
                </button>
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
