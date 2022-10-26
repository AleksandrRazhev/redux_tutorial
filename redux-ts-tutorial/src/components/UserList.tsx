import React from "react";
import { userTypedSelector } from "../hooks/userTypedSelector";

const UserList: React.FC = () => {
  const { users, error, loading } = userTypedSelector((state) => state.user);
  return <div></div>;
};

export default UserList;
