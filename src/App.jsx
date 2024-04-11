import { useState } from "react";
import styled from "styled-components";
import HeaderContainer from "./components/HeaderContainer";
import ButtonsContainer from "./components/ButtonsContainer";
// import "./index.css";

function App() {
  const arr = ["GitHub", "Frontend Mentor", "LinkedIn", "Twitter", "Instagram"];
  return (
    <Container>
      <HeaderContainer />
      <Main>
        {arr.map((element) => {
          return <ButtonsContainer>{element}</ButtonsContainer>;
        })}
      </Main>
    </Container>
  );
}

const Container = styled.div`
  background-color: hsl(0, 0%, 12%);
  border-radius: 1.5rem;
  padding: 4rem 3rem;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.3rem;
  margin-top: 2rem;
`;

export default App;
