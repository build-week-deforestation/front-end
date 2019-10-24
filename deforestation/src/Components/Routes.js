import React from "react";
import { Wrapper } from "../Styles/style"
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./Home";
import LoginPage from "./Home";
import Registration from "./Registraition/registration";
import UserDash from "./UserDash";
import PrivateRoute from "./PrivateRoute";



//Creating private routes HOC

const Router = () => (
  <Wrapper>
    <Switch>
      <Redirect from="/" to="/home" />
      <Route path="/home" component={Home} />
     
      <PrivateRoute
          exact path="/UserDash"
          component={UserDash}
        />
      <Route path="/LoginPage" component={LoginPage} />
      <Route path="/Registration" component={Registration} />
    </Switch>
  </Wrapper>
);

export default Router;

