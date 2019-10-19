import React from 'react';
import { Route, Link } from "react-router-dom";
import styled from "styled-components";
import Registration from './components/registration';
import './App.css';

// //body color: #e8ecf1,
//  Primary color:  #03bd37,
//   Accent 1: #f0f8ff,
//   Accent 2: #3d7c47, 
//   Accent 3: #2c82c9


 const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #e8ecf1;
  font-family: 'Roboto Mono', monospace;
 `;



function App() {
  return (
    <div className="App">
      <Wrapper>

        <Route exact path="/" component={Registration}></Route>
      </Wrapper>
      
    </div>
  );
}

export default App;
