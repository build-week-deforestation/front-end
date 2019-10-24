import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "../Contexts/AuthContexts"

const PrivateRoute = ({ component: Component, ...rest }) => {
    const isAuthenticated = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Component {...props} {...rest} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute