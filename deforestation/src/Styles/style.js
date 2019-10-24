import styled from "styled-components";
import ForestBackground from "../components/Images/ForestBackground.jpg";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 80%;
  margin:3% auto;
  background: rgb(0, 22, 46, 0.5);
  display: flex;
  justify-content: center;
  h1, h2  {
    display: flex;
    justify-content: center;
    margin: 1% auto;
  }
`;

export const AppWrapper = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin: auto;
  background: linear-gradient(rgba(20, 20, 20, 0.5), rgba(20, 20, 20, 0.5)),
    url(${ForestBackground});
  position: fixed;
  min-width: 100%;
  min-height: 100%;
  background-size: cover;
`;

export const FormWrapper = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 80%;
  margin: 2% auto;
  display: flex;
  justify-content: center;
  h1,
  input,
  button {
    margin: 1%;
  }
`;
