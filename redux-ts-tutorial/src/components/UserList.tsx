import React, { useEffect } from "react";
import { useActions } from "../hooks/useActions";

import { useTypedSelector } from "../hooks/useTypedSelector";

const UserList: React.FC = () => {
  const { users, error, loading } = useTypedSelector((state) => state.user);

  const { fetchUsers } = useActions();

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <p>...идет загрузка</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div style={{ marginBottom: "1em" }}>
      {users.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
};

export default UserList;
