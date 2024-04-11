import styled from "styled-components";

export default function HeaderContainer() {
  return (
    <Header>
      <img src="https://avatars.githubusercontent.com/u/84536014?v=4 alt="user avatar" />
      <h1>Mikhil Berishvili</h1>
      <span>Tbilisi, Georgia</span>
      <p>CEO & Founder of EasyDine | Software Developer @ TBC | Expertise in C# and .NET</p>
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
