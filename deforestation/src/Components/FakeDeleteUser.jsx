//This is a example of an delete for CRUD functionality for MVP of unit 3 build
import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

function FakeDeleteUser(props) {

  function deleteUser(event) {
    function handleSubmit(e) {
      axios
        .delete(`https://NoBackendToUse/users/${user.id}`, { deleteUser })
        .then(res => {
          console.log("You have deleted your profile.");
          props.history.push("/Register");
        });
      console.log(res.data);
    }
  }

  return (
    <form onSubmit={deleteUser}>
      <input
        id="User"
        type="User"
        name="User"
        placeholder="Type Username here to delete"
        required
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default withRouter(FakeDeleteUser);
