import React from "react";
import { userTypedSelector } from "../hooks/userTypedSelector";

const UserList: React.FC = () => {
  const state = userTypedSelector((state) => state.user);
  console.log(state);
  return <div></div>;
};

export default UserList;
