import React from "react";

import DataPage from "./Components/DataPage";
import Home from "./Components/Home";
import { BrowserRouter } from "react-router-dom";
import { AppWrapper, Wrapper } from "./Styles/style";
import AuthContext from "./Contexts/AuthContexts"
import Router from "./Components/Routes"

//Setting up state for authentication
const initialState = {
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

//App component
function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <BrowserRouter>
      <AuthContext.Provider
        value={{
          state,
          dispatch
        }}
      >
        <AppWrapper>
          <Wrapper>
            <div className="App">
              {!state.isAuthenticated ? <Home /> : <DataPage />}
            </div>
            <Router/>
          </Wrapper>
        </AppWrapper>
      </AuthContext.Provider>
    </BrowserRouter>
  );
}

export default App;
