import React, { useContext, dispatch } from "react";
import styled from "styled-components";
// import {axiosWithAuth} from 'axios';
import { LoginStyles } from "../Styles/Login";
import { AuthContext } from "./Context";
import {withRouter} from "react-router-dom"

const MainLogin = styled.div`
  ${LoginStyles}
`;

function Login(props) {
  const { dispatch } = useContext(AuthContext);

  //If backend was ready I would use something like this to deal with authentication.
  //    const handleSubmit = () => {
  //     e.preventDefault();

  //     axiosWithAuth()
  //       .post(`/login`, credentials)
  //       .then(res => {
  //         localStorage.setItem("token", res.data.payload);
  //         console.log(res);
  //         props.history.push("/Dashboard");
  //       })
  //       .catch(err => console.log(err));
  //    }

  function toggleIsAuthenticated(event) {
    event.preventDefault();
    dispatch({ type:"LOGIN"})
    props.history.push("/user-page")
  }

  return (
    <MainLogin>
      <form onSubmit={toggleIsAuthenticated}>
        <input
          id="username"
          type="text"
          name="username"
          placeholder="username"
        />
        <input
          id="password"
          type="password"
          name="password"
          placeholder="password"
        />
        <button type="submit">Login</button>
      </form>
    </MainLogin>
  );
}

export default withRouter(Login) ;
