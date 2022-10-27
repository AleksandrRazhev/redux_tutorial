import React from "react";

import "./App.css";
import TodoList from "./components/TodoList";
import UserList from "./components/UserList";

function App() {
  return (
    <div className="App">
      <TodoList />
      <UserList />
    </div>
  );
}

export default App;
