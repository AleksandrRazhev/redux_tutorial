import React, { useEffect } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const TodoList: React.FC = () => {
  const { todos, loading, error, limit, page } = useTypedSelector(
    (state) => state.todos
  );

  const { fetchTodos, setTodoPage } = useActions();

  const pages = [1, 2, 3, 4, 5];

  useEffect(() => {
    fetchTodos(page);
  }, [page]);

  if (loading) {
    return <p>...идет загрузка</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      {todos.map((item) => (
        <div key={item.id}>{`${item.id} - ${item.title}`}</div>
      ))}
      <div
        style={{
          marginTop: "1em",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {pages.map((item) => (
          <span
            key={item}
            onClick={() => setTodoPage(item)}
            style={{
              padding: "1em",
              border: "1px solid black",
              color: item === page ? "red" : "black",
              fontWeight: item === page ? "700" : "400",
              borderRadius: "5px",
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
