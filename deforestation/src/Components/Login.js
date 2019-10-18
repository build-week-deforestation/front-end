import React from "react";
import "../Styles/App.css";
import { Wrapper, FormWrapper } from "../Styles/style";

function Login() {
  //Creating a intial state object that handles the various states needed
  const loginState = {
    user: "",
    password: "",
  };

  //Passing the state object into state and
  const [data, setData] = React.useState(loginState);

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
          <h1>Log In</h1>
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
export default Login;
