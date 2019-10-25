import React, { useReducer } from "react";
import { AuthContext } from "./Components/Context";
import { Route, Link } from "react-router-dom";
import styled from "styled-components";
import Registration from "./Components/registration";
import UserPage from "./Components/UserPage";
import Dashboard from "./Components/Dashboard";
import { BrowserRouter as Router } from "react-router-dom";
import background from "./Components/Images/backgrnd.svg"
// import Routes from "./Components/Routes"

// //body color: #e8ecf1,
//  Primary color:  #03bd37,
//   Accent 1: #f0f8ff,
//   Accent 2: #3d7c47,
//   Accent 3: #2c82c9

//Setting up state for authentication

const initialState = {
  isAuthenticated: false
  // user: null,
  // token: null
};

const Wrapper = styled.div`

  font-family: 'Roboto Mono', monospace;
  background-color: #22313f;
  
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  
`;

function App() {
  const [state, dispatch] = useReducer((initialState, action) => {
    switch (action.type) {
      case "LOGIN":
        return {
          ...state,
          isAuthenticated: true
        };
      case "LOGOUT":
        localStorage.clear();
        return {
          ...state,
          isAuthenticated: false
        };
      default:
        return state;
    }
  });
  return (
    <Router>
      <Wrapper>
        <AuthContext.Provider
          value={{
            state,
            dispatch
          }}
        >
          <Route
            exact
            path="/"
            component={!initialState.isAuthenticated ? Registration : Dashboard}
          ></Route>
          <Route path="/user-page" component={UserPage}></Route>
          <Route path="/dashboard" component={Dashboard}></Route>
        </AuthContext.Provider>
      </Wrapper>
    </Router>
  );
}

export default App;
