import styled from "styled-components";
import HeaderContainer from "./components/HeaderContainer";
import ButtonsContainer from "./components/ButtonsContainer";
// import "./index.css";

function App() {
  const buttonData = [
    { label: "GitHub", url: "https://github.com/example" },
    { label: "Frontend Mentor", url: "https://www.frontendmentor.io/" },
    { label: "LinkedIn", url: "https://www.linkedin.com/" },
    { label: "Twitter", url: "https://twitter.com/" },
    { label: "Instagram", url: "https://www.instagram.com/" },
  ];

  return (
    <Container>
      <HeaderContainer />
      <Main>
        {buttonData.map(({ label, url }) => (
          <ButtonsContainer key={label} redirectTo={url}>
            {label}
          </ButtonsContainer>
        ))}
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
