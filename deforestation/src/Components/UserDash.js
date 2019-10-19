import React from "react";
import { useAuthDataContext } from "./node_modules/components/auth-provider";
import { Link } from './node_modules/react-router-dom'

const UserDash = () => {
  const { user, onLogout } = useAuthDataContext();

  if (!user) {
    return <Link to="/">Please log in</Link>;
  }

  return (
    <div>
      <p>Hello {user.name}</p>
      <button onClick={onLogout}>Log out</button>
    </div>
  );
};

export default  UserDash;