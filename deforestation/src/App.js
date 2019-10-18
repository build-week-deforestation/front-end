import React from "react";
import "./Styles/App.css";
import Home from "./Components/Home";
import LoginPage from "./Components/LoginPage";
import { AppWrapper, Wrapper } from "./Styles/style";
import { AuthContext } from "./Contexts/AuthContexts";

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
    <AuthContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      <AppWrapper>
        <Wrapper>
          <div className="App">
            {!state.isAuthenticated ? <LoginPage /> : <Home />}
          </div>
        </Wrapper>
      </AppWrapper>
    </AuthContext.Provider>
  );
}

export default App;
