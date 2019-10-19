import React from "react";
import "../styles/App.css";
import {Wrapper} from "../styles/style";
import Register from "./Register";
import Login from "./Login";

function Home() {
  return (
    <Wrapper>
      <h1>This is the Login Page!</h1>
      <Register/>
      <Login/>
    </Wrapper>
  );
}

export default Home;



