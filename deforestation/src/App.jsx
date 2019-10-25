import React, { createContext } from 'react';
import { Route, Link } from "react-router-dom";
import styled from "styled-components";
import Registration from './Components/registration';
import UserPage from "./Components/UserPage";
import Dashboard from "./Components/Dashboard";
import background from "./Components/Images/backgrnd.svg"



// //body color: #e8ecf1,
//  Primary color:  #03bd37,
//   Accent 1: #f0f8ff,
//   Accent 2: #3d7c47, 
//   Accent 3: #2c82c9


//Setting up state for authentication

const AuthContext = createContext();

const state = {
  isAuthenticated: false,
  user: null,
  token: null
};

//Reducer pattern for rendering based on whether the user is logged in using a switch method.
const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", JSON.stringify(action.payload.token));
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null
      };
    default:
      return state;
  }
};

const Wrapper = styled.div`

  font-family: 'Roboto Mono', monospace;
  background-color: #22313f;
  width: 100vw
  height: 100vh;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  
`;



function App() {
  return (
      <Wrapper>
        <AuthContext.Provider
          value={{
            state

          }}
        >

        

        <Route exact path="/" component={!state.isAuthenticated ?  Registration : Dashboard}></Route>
        <Route path="/user-page" component={UserPage}></Route>
        <Route path="/dashboard" component={Dashboard}></Route>

        </AuthContext.Provider>
      </Wrapper>
    
  );
}

export default App;
