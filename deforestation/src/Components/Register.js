import React from "react";
import "../Styles/App.css";
import { Wrapper, FormWrapper } from "../Styles/style";

function Register() {
  //Creating a intial state object that handles the various states needed
  const registerState = {
    user: "",
    password: "",
  };

  //Passing the state object into state and
  const [data, setData] = React.useState(registerState);

  //Change handler for changing the input states
  const InputChangeHandler = event => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
  };
  return (
    <Wrapper>
        <FormWrapper>
          <h1>Register</h1>
          <input
            placeholder="User Name"
            type="text"
            value={data.user}
            onChange={InputChangeHandler}
            name="user"
            id="user"
          />
          <input
            type="password"
            placeholder="Password"
            value={data.password}
            onChange={InputChangeHandler}
            name="password"
            id="password"
          />

          <button>Register</button>
        </FormWrapper>
    </Wrapper>
  );
}
export default Register;
