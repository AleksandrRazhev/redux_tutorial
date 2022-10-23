import { useDispatch, useSelector } from "react-redux";

import "./App.css";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash);
  console.log(cash);

  return (
    <div className="App">
      <div style={{ padding: "1rem", display: "flex" }}>
        <div style={{ fontSize: "3rem" }}>{cash}</div>
        <button>получить на счет</button>
        <button>снять со счета</button>
      </div>
    </div>
  );
}

export default App;
