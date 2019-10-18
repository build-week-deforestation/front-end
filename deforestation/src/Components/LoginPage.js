import React from "react";
import "../Styles/App.css";
import {Wrapper} from "../Styles/style";
import Register from "./Register";
import Login from "./Login";

function LoginPage() {
  return (
    <Wrapper>
      <h2>This is the Login Page!</h2>
      <Register/>
      <Login/>
    </Wrapper>
  );
}

export default LoginPage;



