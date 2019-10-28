//This is a example of an update for CRUD functionality for MVP of unit 3 build
import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

function FakeUpdateUser(props) {
  //set name and password of newUser
  const [UpdateUser, setValues] = useState({
    username: "",
    password: ""
  });

  function SubmitUserChange(event) {
    function handleSubmit(e) {
      axios
        .post(`https://NoBackendToUse/users/${user.id}`, { UpdateUser })
        .then(res => {
          console.log(res);
          localStorage.setItem("token", res.data.payload);
          props.history.push("/Dashboard");
        });
      console.log(res.data);
    }
  }

  return (
    <form onSubmit={SubmitUserChange}>
      <input id="username" type="text" name="username" placeholder="username" />
      <input
        id="password"
        type="password"
        name="password"
        placeholder="password"
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default withRouter(FakeUpdateUser);
