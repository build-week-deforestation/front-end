import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../Contexts/AuthContexts"

const UserDash = () => {
  const user = useContext(AuthContext);
  
  if (!user) {
    return <Link to="/">Please log in</Link>;
  }

  return (
    <div>
      <p>Hello {user}</p>
      <button>Log out</button>
    </div>
  );
};

export default UserDash;
