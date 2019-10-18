import styled from "styled-components";
import ForestBackground from "../Assets/ForestBackground.jpg";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 80%;
  margin: auto;
  background: black;
  display: flex;
  justify-content: center;
  h1, h2 {
    display: flex;
    justify-content: center;
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
