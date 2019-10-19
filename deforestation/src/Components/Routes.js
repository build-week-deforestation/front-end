import React from "react";
import "../styles/App.css";
import { Wrapper } from "../styles/style";
import { Route, Switch, Redirect } from "./node_modules/react-router-dom";
import Home from ".";
import LoginPage from "./Home";
import Register from "./Register";
import UserDash from "./UserDash";
import { AuthContext } from "../contexts/AuthContexts";



//Creating private routes HOC


const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={} />
  )

const Router = () => (
  <Wrapper>
    <Switch>
      <Redirect from="/" to="/home" />
      <Route path="/home" component={Home} />
      <PrivateRoute path="/UserDash" component={UserDash} />
      <Route path="/LoginPage" component={LoginPage} />
      <Route path="/Register" component={Register} />
    </Switch>
  </Wrapper>
);

export default Router;

