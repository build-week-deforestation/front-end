import React from "react";
import { Wrapper } from "../Styles/style";
import Registraition from "./Registraition/registration";
import Login from "./Login";

function Home() {
  return (
    <Wrapper>
      <h1>This is the Login Page!</h1>
      <Registraition />
      <Login />
    </Wrapper>
  );
}

export default Home;
