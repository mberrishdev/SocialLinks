import styled from "styled-components";

export default function HeaderContainer() {
  return (
    <Header>
      <img src="./images/avatar-jessica.jpeg" alt="user avatar" />
      <h1>Jessica Randall</h1>
      <span>London, United Kingdom</span>
      <p>"Front-end developer and avid reader."</p>
    </Header>
  );
}

const Header = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  & img {
    border-radius: 50%;
    width: 8rem;
    margin-bottom: 2rem;
  }

  & h1 {
    color: hsl(0, 0%, 100%);
    letter-spacing: 0.1rem;
    font-size: 2.2rem;
    margin-bottom: 1rem;
  }
  & span {
    color: hsl(75, 94%, 57%);
    font-weight: 600;
    font-size: 1.4rem;
    margin-bottom: 3rem;
  }
  & p {
    color: hsl(0, 0%, 100%);
    font-size: 1.4rem;
    font-weight: 300;
  }

  @media screen and (max-width: 385px) {
    h1 {
      font-size: 2rem;
    }
  }
`;
