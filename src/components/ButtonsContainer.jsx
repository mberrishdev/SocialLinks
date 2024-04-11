import styled from "styled-components";

export default function ButtonsContainer({ children, redirectTo }) {
  return (
    <Button href={redirectTo} target="_blank" rel="noopener noreferrer">
      {children}
    </Button>
  );
}

const Button = styled.a`
  display: inline-block;
  height: 4rem;
  width: 30rem;
  border-radius: 0.5rem;
  border: none;
  background-color: hsl(0, 0%, 20%);
  color: white;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  line-height: 4rem;
  cursor: pointer;

  &:hover {
    background-color: hsl(75, 94%, 57%);
    color: hsl(0, 0%, 12%);
  }

  @media screen and (max-width: 385px) {
    width: 25rem;
  }
`;
