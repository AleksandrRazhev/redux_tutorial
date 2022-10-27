import React, { useEffect } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const TodoList: React.FC = () => {
  const { todos, loading, error, limit, page } = useTypedSelector(
    (state) => state.todos
  );

  const { fetchTodos } = useActions();

  useEffect(() => {
    fetchTodos(page, limit);
  }, []);

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
    </div>
  );
};

export default TodoList;
